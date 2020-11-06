// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //return a function with value parameter
    return function (value) {
    //if the value argument is greater than the base argument, return true
    if (value > base) {
        return true;
    }else {
        //if the value  argument is less than the base argument return false
    } return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
      //return a function with value parameter
    return function (value) {
    //if the value argument is greater than the base argument, return true
    if (value < base) {
        return true;
    }else {
        //if the value  argument is less than the base argument return false
    } return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    //return a function with a given string as a parameter
    return function(givenStr) {
    //if the first letter of the string is strictly equal to the startsWith argument, return true
        if (givenStr[0].toUpperCase() === startsWith.toUpperCase()) {
            return true;
    //otherwise, return false
        }else {
            return false;
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
     return function(string) {
    //if the last letter of the string (when uppercased to avoid case sensitivity) is strictly equal to the startsWith argument, return true
        if (string[string.length - 1].toUpperCase() === endsWith.toUpperCase()) {
            return true
    //otherwise, return false
        }else {
            return false;
        }
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
//creating an empty array to store our results
    var myArray = [];
//for of loop that will iterate through our array of strings, then push each iteration through a given function
    for(var x of strings) {
        myArray.push(modify(x))
//return our results
    }  return myArray;
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
//for of loop that will iterate through an array of strings and put each iteration through a test
    for(var x of strings) {
//if that test returns false for any of them
        if(!test(x)){
//return false
        return false;
    
        }
    }
//otherwise, return true
    return true;
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}