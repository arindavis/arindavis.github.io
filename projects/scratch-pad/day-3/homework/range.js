// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
//creating an array to put all our values into
var depository = [];
//starting a simple if/else statment, first determining if the start number is smaller than the end number
  if(start < end) {
     //if it is, count from the start to the end in increments of 1
     for(var i = start; i <= end; i++){
    //for every iteration, add i to the depository
      depository.push(i);
      
     }
     //if the above is false, check if the end is smaller than the start
  }else if(end < start)
  //if it is, count from the end to the start decreasing in increments of 1
      for(var i = start; i >= end; i--){
    //for every iteration, push i into the depository array
        depository.push(i);
        
      } 
    return depository;
      

    
    
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}