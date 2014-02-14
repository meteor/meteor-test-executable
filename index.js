var path = require('path');
var child_process = require('child_process');

exports.doIt = function () {
  child_process.execFile(path.join(__dirname, 'script.sh'),
                         function (error, stdout, stderr) {
                           process.stdout.write(error + "; " + stdout);
                         });
};
