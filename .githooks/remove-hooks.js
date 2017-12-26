const cs = require('./symlinks/symlinks.js');
const csObj = new cs('../.git/hooks', './');

csObj.removeSymlinks();
