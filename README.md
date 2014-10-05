nansum
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the sum over an array of values ignoring any values which are not numeric.


## Installation

``` bash
$ npm install compute-nansum
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var lib = require( 'compute-nansum' );
```


## Examples

``` javascript
var lib = require( 'compute-nansum' );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/compute-nansum.svg
[npm-url]: https://npmjs.org/package/compute-nansum

[travis-image]: http://img.shields.io/travis/compute-io/nansum/master.svg
[travis-url]: https://travis-ci.org/compute-io/nansum

[coveralls-image]: https://img.shields.io/coveralls/compute-io/nansum/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/nansum?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/nansum.svg
[dependencies-url]: https://david-dm.org/compute-io/nansum

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/nansum.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/nansum

[github-issues-image]: http://img.shields.io/github/issues/compute-io/nansum.svg
[github-issues-url]: https://github.com/compute-io/nansum/issues