
var regex = require('./');
var assert = require('better-assert');

var obj = { a: 'foo', b: 'bar', c: { d: 'baz' }};

var parsed = regex(obj);

assert(parsed);
assert('foo' == parsed.a.source);
assert('bar' == parsed.b.source);
assert('baz' == parsed.c.d.source);

var parsed = regex(obj, 'i');

assert(parsed.a.test('FOO'));
assert(parsed.b.test('BAR'));
assert(parsed.c.d.test('BAZ'));
