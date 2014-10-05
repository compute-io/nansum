
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
	'use strict';

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

	it( 'should compute the sum ignoring any non-numeric values', function test() {
		var data, expected;

		data = [ 2, NaN, 4, 5, NaN, 3, true, null, undefined, 8, [], {}, function(){}, 2 ];
		expected = 24;

		assert.strictEqual( nansum( data ), expected );
	});

});