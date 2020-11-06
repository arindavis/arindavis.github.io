// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    //starting a for loop that will count from 1-100, each iteration is represented by "i"
for (var i = 1; i<=100; i++){
//creating a variable named "output", that is left purposely blank. 
    var output = "";
//if i is a multiple of  3, add "Fizz" to our output variable
    if ( i % 3 == 0) {output += "Fizz";}
//if I is a multiple of 5, add "Buzz" to the output variable (with "Fizz" taking precedence if it is also a multiple of 3, creating "fizzbuzz")
    if (i % 5 == 0) {output += "Buzz";}
//if the output is neither of these and just blank, replace it with regular old i 
if(output =="") { output = i }
//then send that output variable to the console on each iteration. voila. 
console.log(output);

}


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}