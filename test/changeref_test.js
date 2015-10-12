'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.changeref = {
    setUp: function (done) {
        // setup here if necessary
        done();
    },
    replaceStrings: function replaceStrings (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/test1.html');
        var expected = grunt.file.read('test/expected/test1.html');
        test.notEqual(actual, expected, 'Files must be different.');

        test.done();
    },
    numberOfFilesGenerated: function numberOfFilesGenerated (test) {
        test.expect(1);

        var actual = grunt.file.expand('tmp/*.html');
        var expected = grunt.file.expand('test/expected/*.html');
        test.equal(actual.length, expected.length, 'Number of files must be the same.');

        test.done();
    }
};
