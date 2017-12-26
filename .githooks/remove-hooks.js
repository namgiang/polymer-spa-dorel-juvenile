const cs = require('./symlinks.js');
const csObj = new cs('.git/hooks', './.githooks/hooks');

csObj.removeSymlinks();
