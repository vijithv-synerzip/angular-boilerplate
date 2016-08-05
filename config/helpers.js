/**
 * This configuration is used to resolve application path.
 * It initially loads path from node's path module and we resolve this path to our directory..
 */

var path = require('path');
var _root = path.resolve(__dirname, '..');
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}
exports.root = root;
