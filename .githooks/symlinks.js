module.exports = class Symlinks {
  constructor(gitDir, gitHooksDir) {
    this.gitDir = gitDir;
    this.gitHooksDir = gitHooksDir;
    this.fs = require('fs');
    this.customHooks = this._setCustomHooks();
    this.hooksArr = this._setHooksArr();
  }

  _setCustomHooks() {
    return this.fs.readdirSync(this.gitHooksDir).filter(file => file.includes('hook_'));
  }

  _setHooksArr() {
    return this.customHooks.reduce((newArr, item, currentIndex) => {
      const newObj = {
        src: `../../${this.gitHooksDir}/${item}`,
        dest: `${this.gitDir}/${item.replace('hook_', '')}`
      };

      newArr.push(newObj);

      return newArr;
    }, [])
  }

  createSymlinks() {
    console.log(this.hooksArr);
    // create a symbolic link for each hookItem in hookArr
    this.hooksArr.forEach(hookItem => {

      // check if the symoblic link exists
      this.fs.lstat(hookItem.dest, (err, stats) => {
        // symlink doesn't exist, so we create it
        if (err) {
          this.fs.symlink(hookItem.src, hookItem.dest, () => {
            console.log(`${hookItem.src} -> ${hookItem.dest} \n -> symlink created...`);
          });
          return err;
        }

        // symlink already exists
        if (stats) {
          console.log(`${hookItem.src} -> ${hookItem.dest} \n -> symlink already exists...`);
          return stats;
        }

      });

    });
  }

  removeSymlinks() {
    // create a symbolic link for each hookItem in hookArr
    this.hooksArr.forEach(hookItem => {

      // check if the symoblic link exists
      this.fs.lstat(hookItem.dest, (err, stats) => {
        // symlink doesn't exist, so we create it
        if (err) {
          console.log(`${hookItem.src} -> ${hookItem.dest} \n -> symlink doesn't exists...`);
          return err;
        }

        // symlink already exists
        if (stats) {
          this.fs.unlink(hookItem.dest, () => {
            console.log(`${hookItem.src} -> ${hookItem.dest} \n -> symlink removed...`);
          });
          return stats;
        }

      });

    });
  }
}
