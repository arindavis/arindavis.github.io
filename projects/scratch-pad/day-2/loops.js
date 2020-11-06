// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
//a simple loop that starts at 0 and ends at the length of the array, each iteration adding one
  for(var i = 0; i < array.length; i++) {
  //logging our result to the console
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
//simple for loop that starts at the length of the array, ends at zero and iterates down one
  for ( var i = array.length - 1; i >= 0; i--) {
  //logging results
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
//a simple return statement that will return the keys of an object as an array
  return(Object.keys(object));
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
//the creation of a variable 'keys' that will store our keys from an object
  var keys = Object.keys(object);
//a loop deisgned to start at 0, end at the length of the keys and iterate once
  for (var i = 0; i < keys.length; i++) {
//logging results
  console.log(keys[i]);
  }
  
  
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
//not dissimiliar to the keys line, this simple return statement will return only our object values
  return(Object.values(object));
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
//creation of values variable that will store the object values as array
  var values = Object.values(object);
//for loop that will iterate once and, start at 0 and end at the values given length
  for (var i = 0; i < values.length; i++) {
  console.log(values[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
//variable that is doing double work. it is turnin gour object keys into an array and then logging the length of that array
  var keyLength = Object.keys(object).length;
//returning our results
  return(keyLength);
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
//creating a variable that will hold an array of our object values
  var values = Object.values(object);
//a simple for loop designed to iterate backwards over our values array, stopping at zero and starting at the end
 for (var i = values.length - 1; i >= 0; i--) {
//logging our results to the console
    console.log(values[i]);
  } 
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
