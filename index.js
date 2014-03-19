
/**
 * Expose `regex`.
 */

module.exports = regex;

/**
 * Make a series of `RegExp`s from each key
 * in the given `obj`.
 *
 * Example:
 *
 *    var regex = require('regex-object');
 *    var obj = { a: 'foo', b: 'bar', c: { d: 'foo' }};
 *    regex(obj);
 *    //=> { a: /foo/, b: /bar/, c: { d: /foo/ }};
 *    regex(obj, 'gi');
 *    //=> { a: /foo/gi, b: /bar/gi, c: { d: /foo/gi }};
 *
 * @api private
 * @param {Object} obj
 * @param {String} [flags]
 * @return {Object}
 */

function regex(obj, flags) {
  flags = flags || '';
  var res = {};
  Object.keys(obj).forEach(function (key) {
    var value = obj[key];
    if ('string' == typeof value) {
      res[key] = new RegExp(value, flags);
    } else {
      res[key] = regex(value, flags);
    }
  });
  return res;
}
