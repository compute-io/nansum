nansum
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the sum of an array ignoring non-numeric values.


## Installation

``` bash
$ npm install compute-nansum
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var nansum = require( 'compute-nansum' );
```

#### nansum( arr[, accessor] )

Computes the sum of an `array` ignoring non-numeric values. For primitive `arrays`,

``` javascript
var data = [ 1, NaN, 2, NaN, 1 ];

var s = nansum( data );
// returns 4
```

For object `arrays`, provide an accessor `function` for accessing `array` values

``` javascript
var data = [
    {'x':1},
    {'x':NaN},
    {'x':2},
    {'x':NaN},
    {'x':1},
];

function getValue( d ) {
    return d.x;
}

var s = nansum( data, getValue );
// returns 4
```



## Examples

``` javascript
var nansum = require( 'compute-nansum' );

var data = new Array( 1000 );
for ( var i = 0; i < data.length; i++ ) {
	if ( i%5 === 0 ) {
		data[ i ] = NaN;
	} else {
		data[ i ] = Math.random() * 100;
	}
}

console.log( nansum( data ) );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Notes

The sum of an array containing non-numeric values is equal to the sum of an equivalent array which contains only the numeric values. Hence,

``` javascript
var d1 = [ 1, NaN, 2, 3, NaN ],
    d2 = [ 1, 2, 3 ];

console.log( nansum( d1 ) === nansum( d2 ) );
// returns true
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

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


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2014-2015. Athan Reines.


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
