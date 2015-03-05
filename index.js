var path = require('path');
var child_process = require('child_process');

var scriptName = (process.platform === 'win32') ? 'script.bat' : 'script.sh';
exports.doIt = function () {
  child_process.execFile(path.join(__dirname, scriptName),
                         function (error, stdout, stderr) {
                           process.stdout.write(error + "; " + stdout);
                           process.exit(0);
                         });
};
