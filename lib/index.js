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
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	// NANSUM //

	/**
	* FUNCTION: nansum( arr )
	*	Computes the sum over an array of values ignoring non-numeric values.
	*
	* @param {Array} arr - array of values
	* @returns {Number} sum
	*/
	function nansum( arr ) {
		if ( !Array.isArray( arr ) ) {
			throw new TypeError( 'sum()::invalid input argument. Must provide an array.' );
		}
		var len = arr.length,
			s = 0,
			val;

		for ( var i = 0; i < len; i++ ) {
			val = arr[ i ];
			if ( typeof val !== 'number' || val !== val ) {
				continue;
			}
			s += val;
		}
		return s;
	} // end FUNCTION nansum()


	// EXPORTS //

	module.exports = nansum;

})();