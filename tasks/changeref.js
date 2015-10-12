/*
 * changeref
 * 
 *
 * Copyright (c) 2015 Thyago Weber <thyago.weber@gmail.com>
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('changeref', 'Utility to iterate over files and replace string references',
    function () {

        var files = this.files, options;

        options = this.options({
            find:      null,
            replaceBy: ''
        });

        if ( !options.find ) { throw new Error('"find" option is undefined.'); }
        if ( !files || !files.length ) { grunt.log.warn('No targets found.'); }

        // File iteration
        files.forEach(function (file) {

            file.src.filter(function (filepath) {
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            })
            .map(function (filepath) {
                // Read file source.
                var filename = filepath.split('/').reverse()[0],
                    fileContent = grunt.file.read(filepath),
                    strFound = function strFound () {
                        var match;

                        // The find pattern is a REGEXP
                        if ( typeof options.find === "object" ) { match = fileContent.match(options.find); }

                        // The find pattern is a string
                        else { match = file.body.indexOf(options.find); }

                        // Something was found
                        if ( match && match.length ) {
                            return ((match.length !== 0) || (match !== -1));
                        }

                        return false;
                    };

                if ( !strFound() ) {
                    grunt.verbose.warn("Your pattern hasn't matched anything and the current file will remain untouched.");

                    return;
                }

                fileContent = fileContent.replace(options.find, options.replaceBy);

                // Write the destination file
                grunt.file.write(file.dest + '/' + filename, fileContent);
            });
        });

    });

};
