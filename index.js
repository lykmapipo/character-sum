'use strict';

//dependencies
var _ = require('lodash');

function characterSum(characters, options) {

    //merge default options
    var options = _.merge({
        caseSensitive: false,
        prefix: undefined,
        suffix: undefined
    }, options);

    if (!characters && characters.length < 0) {
        return 0;
    } else {
        var sum = 0;
        //convert characters to upper
        characters = characters.toUpperCase();

        //split characters to array
        characters = characters.split('');

        //prepare pads
        var prefix = characters[0].charCodeAt();
        var mid = characters[Math.ceil(characters.length / 2)].charCodeAt();
        var suffix = characters[characters.length - 1].charCodeAt();

        //sum pads to reduce equality likelyhood
        sum = sum + prefix + suffix + mid;

        characters.forEach(function(character) {
            sum = sum + character.charCodeAt();
        });

        //TODO reduce guess probability
        //TODO fix pallidrome words

        return sum;
    }
}

module.exports = characterSum;