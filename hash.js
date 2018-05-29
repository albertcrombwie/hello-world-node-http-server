'use strict';
const { execFile } = require('child_process');
const { resolve } = require('path');
const { EOL } = require('os');
// https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback
module.exports = function git_hash (callback) {
  const filepath = resolve(__dirname, '.bin/commit-hash.sh');
  // console.log(filepath);
  return execFile('sh', [filepath], function(e, stdout, stderr) {
    return callback(e, stdout.replace(EOL, ''), stderr);
  });
}
