/**
*
*	COMPUTE: nansum
*
*
*	DESCRIPTION:
*		- Computes the sum over an array of values ignoring any values which are not numeric.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014-2015. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/


'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isNumber = require( 'validate.io-number-primitive' );

// NANSUM //

/**
* FUNCTION: nansum( arr )
*	Computes the sum of an array ignoring non-numeric values.
*
* @param {Array} arr - array of values
* @param {Function} [accessor] - accessor function for accessing array values
* @returns {Number|null} sum or null
*/
function nansum( arr, clbk ) {
	if ( !isArray( arr ) ) {
		throw new TypeError( 'sum()::invalid input argument. Must provide an array. Value: `' + arr + '`.' );
	}

	if ( arguments.length > 1 && typeof clbk !== 'function' ) {
		throw new TypeError( 'nansum()::invalid input argument. Accessor must be a function. Value: `' + clbk + '`.' );
	}

	var len = arr.length,
		s = 0,
		val,
		i;

	if ( !len ) {
		return null;
	}

	if ( clbk ) {
		for ( i = 0; i < len; i++ ) {
			val = clbk( arr[ i ] );
			if ( !isNumber( val ) ) {
				continue;
			}
			s += val;
		}
	} else {
		for ( i = 0; i < len; i++ ) {
			val = arr[ i ];
			if ( !isNumber( val ) ) {
				continue;
			}
			s += val;
		}
	}

	return s;
} // end FUNCTION nansum()


// EXPORTS //

module.exports = nansum;
