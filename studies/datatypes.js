/*
* Datatypes in JavaScript:
*
* 1. Number: Exactly what you think it is. Data stored as a numeric value. Here are some fun numbers. 
*/
42, 13, 7, 665
/*
*2. String - a data type used for storing data in text form. denoted by surrounding "" or ''
*/
var example = "A String Called String"
/*
*3. Boolean - a boolean is a data type that can only hold one of two values: true or false. 
*/
var exampleTwo = false;
/*
*4. Array - a special type of object that is capable of storing multiple values of differing data types. Arrays 
*   will always be denoted by bracks, with every value being seperated by a comma. Here's an example:
*/
var exampleThree = [true, false, 42, "A String Called String"]; 
/*
*5. Object - a data type used to store a varied collection of key value pairs. Objects always using curly
*   braces. Each property of the object has a key and value, seperated by a colon and a space. Always place 
*   a comma after your value before moving on to the next key. Here, I'll just show you:
*/
var exampleFour = {
    name: "Obi-Wan",
    hasHighGround: true, 
}
/*
*6. Function - At it's most basic level, a function is a set of commands that perform jobs or calculate 
*   desired values. As a requirement, a function must take some sort of input in the form of paramters in 
*   order to produce an output. When a user inputs their data into the parameters, that's called an
*   argument. Like variables, you must always declare a function as you create it using the following 
*   formatting: 
*/
function functionName(input) {
    //output//
}
/* When calling your function, simply use it's name and put your arguments (if applicable, some functions
*  do not require parameters to function) into the parameters. Like so:
*/
functionName(); 
/*
*7. Undefined - In a class all it's own, undefined is another way of saying "This value hasn't been defined". 
*   
*8. null - Not to be confused with undefined, null means a value is literally nothing, or there is no value. 
*
*9. NaN - Stands for "Not a Number", and is a non writable property returned in specific case scenarios such 
*   as a number having trouble being parsed, a math operation that produces a non real number, or any sort of 
*   operation involving a string, outside of simple addition with the + operator. 
*
*   Infinity and -Infinity - A value that results from a number surpassing the largest possible number, in either the
*   negative or positive direction. 
*
*
*PRIMITIVE VS COMPLEX DATA TYPES:
* 
*   A primitive data type is a data type specifically stored by value. The following data types are
*   considered primitive:
*
*   Strings, Booleans, Numbers, Undefined & Null 
*   
*   Because they are stored by value, each time a new variable is declared a new address in memory is stored
*   for that value. It's funny that it sounds so complicated but really is deceptively simple. 
*
*   A complex, or non-primitive, data type will always be stored by reference. The following data types are
*   considered complex:
*   Objects, Arrays, Functions. 
*
*   PASSING TO A FUNCTION BY COPY VS BY REFERENCE:
*
*   Primitive values are passed to a function by copy, complex values are passed by Reference. 
*   If you pass a variable to a function by reference you change the value in the function as well as the 
*   value outside as well. If you pass it via a copy, then it only changes that value on the inside of the funciton.
*   Like so:
*/
let example5 = 1;

function example6(a) {
    a = 2;
}
example6(example5); //--> will output 2, because we passed by value and it changed only the inside of the function. 
console.log(example5); //--. will output 1, because the variable outside of the function remains the same. 


/* Here we have function named example6 which, when given any value, will change that value to 2. You see once we pass in example5,
*  which is a primitive data type currently holding a value of 1, it will output 2, but when we try and log example5 to the console
*  it's still 1. This is because the function only changed the value by copy. 
*
*
*  Here's the same example, only this time will will pass in a value by reference. 
* 
*/
let example7 = {name: "Bob"};

function example8(b) {
    b.name = "Tony";
}
example6(example7); //will output "Tony"
console.log(example7); //--. will output "Tony" instead of "Bob", because objects are passed by reference. 