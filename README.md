# changeref

> Utility to iterate over files an replace string references using a regular expression. 

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install changeref --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('changeref');
```

## The "changeref" task

### Overview
In your project's Gruntfile, add a section named `changeref` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  changeref: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.find
Type: `Object` (regexp)
Default value: null

A regexp used to find strings in the file.

#### options.replaceBy
Type: `String`
Default value: `''`

A string value that is used to replace the strings found by the `find` regular expression.

### Usage Examples

#### Default Options
In this example, we are looking for all the html files located in the `tmp` folder. 
So if the `.html` file has a string starting with "bar-" end ending with ".js", it will be replaced by "bar.js" and saved into the "test/expected" folder.

```js
grunt.initConfig({
  changeref: {
    dist: {
     files: {
        'test/expected': ['./tmp/*.html']
     },
     options: {
        find: /(bar-).*\.js/ig,
        replaceBy: 'bar.js'
     }
    }
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2015 Thyago Weber. Licensed under the MIT license.
