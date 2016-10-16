/**
 * Utility class for Harshad numbers (also called Niven numbers).
 *
 * @namespace Harshad
 */
var Harshad = ( function() {
    'use strict';

    return {
        /**
         * Returns true when the given number is a valid Harshad number.
         *
         * @param {Number} number The given number
         * @returns {Boolean}
         * @function Harshad.isValid
         */
        isValid: function( number ) {
            return (number % number.toString().split('').reduce(function(a,b){return a+(+b);},0)) == 0;
        },
        /**
         * Gets the next Harshad number after the given number.
         *
         * @param {Number} number The given number
         * @returns {Number}
         * @function Harshad.getNext
         */
        getNext: function( number ) {
            var isHarshad = false;
            var i = number+1;
            while (!this.isValid(i)){
                i++;
            }
            return i;
        },
        /**
         * Returns the suite of Harshad numbers, starting after a given number.
         *
         * @param {Number} count The number of elements to return
         * @param {Number} start The number after which the serie should start;
         *  defaults to 0
         * @returns {Array}
         * @function Harshad.getSerie
         */
        getSerie: function( count, start ) {
            var res =[];
            var n = start;
            while (count){
                var self = this;
                res.push(n=self.getNext(n--));

                count--;
            }

            return res;
        }
    };

} () );
console.log(Harshad.getSerie(10,15))