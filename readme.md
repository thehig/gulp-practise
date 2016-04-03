# Gulp Practise

Getting unit and end to end tests up and running in a headless environment. Uses mocha and chai for all the tests.

Gulp automates the testing, transpiling and building actions through pipelines. Gulp tasks can require that other tasks have completed before they can start. Running `gulp` will list all the gulp tasks that have been detected using the default task in gulpfile.js.

## Gulp Tasks

The basic gulpfile.js provides only the most top level commands like `build` and `all`, but also handles `default` to print out a list of the available gulp tasks. The gulpfiles are controlled using the gulp.config.js file which specifies most of the input/output directories and some options for the webserver. The remainder of the gulp commands are split into their respective files

###### `gulp default`

Displayes the list of available top and second level gulp tasks

###### `gulp source`

> Dependencies: `'source' -> 'source-copy' -> ['source-jshint', 'source-clean-temp']`

Take the source files, run jshint on any js files, remove any previous temporary source, then copy all the output into the temporary source folder

###### `gulp unit`

> Dependencies: `'unit' -> 'unit-mocha' -> ['unit-coffee', 'source'] -> 'unit-clean-temp'`

Take the coffee script test files from the unit test folder, convert them to JS, remove any previous temporary unit tests, then copy our new unit tests into the temporary unit test folder. Then, once we have our transpiled coffee tests, and our source from the previous tasks, we run mocha on our unit test folder

###### `gulp e2e`

> Dependencies: `'e2e' -> 'e2e-mocha' -> 'e2e-serve' -> ['source', 'e2e-coffee'] -> 'e2e-clean-temp'`

Take the coffee script test files from the e2e test folder, convert them to JS, remove previous temporary e2e tests,
copy e2e tests into temporary e2e test folder. With the source from previous tasks, we bring up a webserver hosting the temporary source folder on port 3000. Then, we bring up mocha-casperjs to load the tests in the temporary e2e test folder and run them against the localhost webserver

###### `gulp all`

> Dependencies: `'all' -> ['source', 'unit', 'e2e']`

Run the source, unit and end to end tasks

###### `gulp build`

> Dependencies: `'build' -> ['all', 'build-clean']`

Remove any previous dist folders, run source, unit and e2e tests and if they complete, copy the source files into the output distribution folder.

## Types of tests

> Requires: mocha, chai, coffee-script

We have two types of test in this project. Unit tests, and End to End tests. All the tests are written in coffee-script using mocha and chai based assertations. 

##### Unit

Tests the functionality of any JS files found in the src directory using coffee tests from tests/unit

##### End to End

> Requires: phantomjs, casperjs, mocha-casperjs, casper-chai

Tests the functionality of the HTML/CSS/JS src in a headless browser using coffee tests from tests/e2e

## Other project files

Of course we have the basic project files that go along with all git node projects that don't really need their own explanation

* .gitignore
* gulp-practise.sublime-project
* package.json
* readme.md


## Useful google-links
* https://scotch.io/tutorials/automate-your-tasks-easily-with-gulp-js
* https://markgoodyear.com/2014/01/getting-started-with-gulp/