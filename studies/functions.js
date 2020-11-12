/*
* FUNCTIONS:
* 
*
* Functions are one of the most essential tools in any programmer's arsenal. Simply
* put, a function is a collection of statements that perform a task or calculate a 
* value. The kicker, however, is that it requires some sort of input and output to
* be classified as a function(and those inputs and outputs must have some obvious
* relationship between them, like a budding teenage romance).
* 
* The syntax is as follows: the declaration using the word "function"(shocker, 
* right?) and optionally your function name,  a list of parameters enclosed in parenthesis
* and seperated by commas, and finally some sort of statment or block of executable code
* contained within curly brackets. Check it out:
*
*function myFunctionName(parameters) {
*   statments/executable code;
*}
* 
* Now that we've declared our fictional function, lets call it like so:
* 
* myFunctionName(argument);
*
* Notice anything different? No, I'm not trying to instigate a verbal sparring 
* match, I'm trying to tell the function what I want the parameters to be. 
* That's what the "argument" denotation is for. When we are designing our function
* we call those inputs parameters, but the second any actual data is placed inside 
* it is transformed into an argument instead. 
*
* Let's make a real one now:
*/
function returnValuePlusOne(value) { //declaration of our function
    return value + 1; //return statement that will add 1 to any given value
}
let two = 2;          //example variable named two, with 2 as a value

returnValuePlusOne(two); //calling our function and passing the argument two inside

/*
* This function will return "3", because 1 + 2 = 3. If you need me to explain that
* part then might I reccomend coolmathgames.com?
*
*
* This isn't all the fun we can have though! You are under no circumstances required
* to give your functions a parameter, like so:
*/
function tellMeImPretty(){ //declaration of our function
    return "You're Pretty"; 
    //return this string
}
tellMeImPretty();//--> "You're Pretty"
//every woman needs a man who will tell her she's pretty without arguments. 

/*
* You can also assign a function to a variable as an expression, like so:
*/
let variableFunctionHybrid = function() {
    return "You're doing it, peter! You're assigning functions to variables!";
};
console.log(variableFunctionHybrid); 
// "You're doing it, peter! You're assigning functions to variables!"

/* It's important to note that variables that are declared within a function
* cannot be accessed anywhere outside of that function. This is because that 
* variable is defined with the scope of the function, not the global scope. 
*
* It helps to think of scope in terms of boxes in boxes. Functions can 
* access anything within the global scope, but the inverse isn't true because
* anything declared or created within a function is locked to the scope of 
* that specific function. Even the different kinds of variables have different
* rules for what kind of scope they can access within a function, like we talked
* about earlier. Here's an even simpler way to put it:
*
* Every individual scope, regardless of size, has access to every other scope
* that is outside of it's own scope. So a block within a function on line 189 
* will have access to everything in the global scope, but a function in the 
* global scope on line 234 wouldn't have access to that block. 
* 
* Just be sure to be aware of where your data falls in the terms of broad scope. 
* Was your variable created using var outside of a function and you need it to 
* be accessed inside? No problem, it's in the global scope. Do you need your 
* variable declared inside of a function to be logged to the console later on 
* in another function? Too bad, it's scoped to that original function forever. 
*
* Nearing the end of our little adventure into function land, lets talk about 
* closures. Fitting, right?
*
* When people talk about closures they are usually referring to the process 
* by which functions operating inside of another function are able to access
* stored values and variables outside of itself. For example, a function within
* a function would be able to easily access a variable within it's own block, a 
* variable in it's parents function or a variable declared in the global scope. 
* The inner function would also have access to it's parent's parameters.
* 
* You can create a closure by using a little term I've coined as function-ception. 
* 
*/
function giveMeAnOriginalCompliment (firstName, adjective) {
//above we are creating our function, which will take our first name and adjective. 
    var finalStatement = "You are very ";
//prepping a variable to help with our final output
    function addArgs () {
//closure function that will access it's parent's function's variable
        return finalStatement + adjective + ", " + firstName + "!";
    }
//our final return statement, these are very important!
    return addArgs();
}
//calling the function
giveMeAnOriginalCompliment("Arin", "beautiful");
/*  The following will result in:
*
* "You are very beautiful, Arin!"
*
* And doesn't that just feel nice? 
*
*/
