/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	nansum = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-nansum', function tests() {

	it( 'should export a function', function test() {
		expect( nansum ).to.be.a( 'function' );
	});

	it( 'should throw an error if provided a non-array', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			function(){},
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				nansum( value );
			};
		}
	});

	it( 'should compute the sum ignoring non-numeric values', function test() {
		var data, expected;

		data = [ 2, NaN, 4, 5, NaN, 3, true, null, undefined, 8, [], {}, function(){}, 2 ];
		expected = 24;

		assert.strictEqual( nansum( data ), expected );
	});

	it( 'should throw an error if provided an accessor which is not a function', function test() {
		var values = [
			'5',
			5,
			[],
			undefined,
			null,
			NaN,
			true,
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				nansum( [ 1, 2, 3 ], value );
			};
		}
	});


	it( 'should return null if provided an empty array', function test() {
		var data, expected;

		data = [];
		expected = null;

		assert.strictEqual( nansum( data ), expected );
	});

	it( 'should compute the sum ignoring any non-numeric values & using an accessor function', function test() {
		var data, expected, actual;

		data = [
			{'x':2},
			{'x':NaN},
			{'x':4},
			{'x':5},
			{'x':NaN},
			{'x':3},
			{'x':true},
			{'x':null},
			{'x':undefined},
			{'x':8},
			{'x':[]},
			{'x':{}},
			{'x':function(){}},
			{'x':2}
		];
		expected = 24;
		actual = nansum( data, getValue );

		function getValue( d ) {
			return d.x;
		}

		assert.strictEqual( actual, expected );
	});

	it( 'should permit `Number` objects', function test() {
		var data, expected, actual;

		data = [
			2,
			4,
			NaN,
			new Number( 7 ),
			null,
			new Number( 3 ),
			2
		];

		expected = 18;
		actual = nansum( data );

		assert.strictEqual( actual, expected );
	});

});
