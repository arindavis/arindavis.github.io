/*
* VARIABLES:
*
* Picture a mailbox. A mailbox's primary function is storing information in the form of letters, 
* flyers and packages. In much the same fashion, variables are used in programming as a way of 
* storing information in the form of Booleans, Arrays, Objects, Strings or any of the other few  
* data-types in the Javascript language. Variables, like the identically named placeholders in 
* math, are the willing vessels of our program that are designed to change their values at our
* command. 
*
* In order to understand the variable, we must create the variable. Start with the "var"
* keyword, followed by a name for your  very first variable and a semicolon.
*/

var myVeryFirstVariable; 
 
/* Congrats! You just declared your first variable, which is just a fancy way of saying you've 
* created it. Good job, Dr. Frankenstein. It's alive!
*
* But slow down there for a second, partner. Before you go off naming variables whatever your 
* heart desires you need to consider a few things about naming conventions:
*
*      1. Camelcase - a strangely named method for formatting your variable names. Since the 
*      computer overlords won't let us add things like spaces or hyphens into our names, a 
*      bunch of really smart people a long time ago decided it was best practice to simply 
*      start the very first letter of your variable declaration with a lower case letter, 
*      with every subsequent word's first letter being capitalized as a way to denote the
*      beginning of a new word. See for yourself, it just works. 
*
*      2. Relevance - Notice we didn't name our very first variable something random like 
*      "henry" or "asdfjlkf". This is because it is best practice to keep your variable 
*      names relevant to their purpose within your program. This will help you keep track
*      of your data in the long run and avoid confusion when explaining your code to
*      others. This is more of a norm and ease of use rule, but don't say I didn't warn
*      you. 
*
*
* Now that our variable has been tethered to the mortal plane, it's time to initialize it, or 
* give it a value. 
* Simply place a "=" between  the name of your variable and whatever you wish to store in it, 
* followed by a semicolon. For demonstration purposes, we will initialize our variable with a 
* harmless little string. 
*/

myVeryFirstVariable = "A harmless little string";
 
/*
* Before we initialized our variable it was a formless, empty shell without purpose or value. 
* We call this "undefined".
*
* For example, if we would've checked the value by using the console.log() method BEFORE we 
* initialized it, we would have seen something like this:
*/

console.log(myVeryFirstVariable); // prints => undefined//

/* But variables, much like the people who grow to love and leave us, can change over time. 
* We call this "assignment". And then when it happens again, "re-assignment".
*/

myVeryFirstVariable = 'A harmless little string';
console.log(myVeryFirstVariable); // prints => A harmless little string. //

// re-assignment //

myVeryFirstVariable = 'A little string';
console.log(myVeryFirstVariable); // prints => A little string. //

/*
* Authors note: Variables declared with the "var" denotation are are mutable, fluid and
* open to change. They are pretty cool and surely the life of any party, but they are not
* the only kind of variable in your toolbox. 
*/
 
/* VAR VS CONST & LET
* OR HOW I LEARNED TO EXPLAIN SCOPE AND THE TEMPORAL DEADZONE
*
* In 2015, the keepers of the ancient Javascript scrolls decided to bless us with two new
* ways to use variables: "let" and "const".
*
* Simply put, "Const" is for storing values that are never meant to be assigned or 
* re-assigned. Just to prove it to you, here's an example:
*/
const pi = 3.14;
//console.log(pi); //--> 3.14//
// pi = 1;
console.log(pi); //--> Type Error: Assignment to Constant Variable//
 
/* Now this gets more complicated when you pass complex data types into const. For 
* instance, if you initialize const as an array, like so:
*/
const numbers = [0, 1, 2]; 
console.log(numbers); //-->[0,1,2]
 
//And then you simply want to update it.// 
 
//numbers.push[4];
console.log(numbers);//-->[0,1,2,3,4]
 
//It updates. But when you try and re-assign it's initialized value...//
 
//numbers = false;
console.log(numbers);//--> Type Error: Assignment to Constant Variable//
 
//... you then start to run into trouble.//
 
 
/* Still with me? Good. Because there's more. 
*
*So. Much. More.
*
* Let's talk let. 
* 
* Var and "let" are incredibly similair in that they can both be re-assigned at any
* time and are both mutable. The key difference, however, lies in the way in which
* let is actually more similar to const. 
* 
* Let's Talk scope. 
*
* Var is generally for variabes that need to be available within the scope of an entire  
* function. We call this "function scope".
*
* For example, if I were to write a function that would contain a simple for loop using 
* var to declare our iteration within the loop, that iteration would be available not just
* within the loop it was created for (marked below as "loop"), but within the entirety
* of the function itself. Like so:
*/
function iterateOver(array) {
     for(var i = 0; i < 4; i++) { //delcared as var, accesible inside loop(block)//
         console.log[i];        //accesible inside loop(block)//
     }   console.log[i];        //accesible outside the loop, but within the function.//
 }
 
/* This is called "function scope". If you were to declare/initialize the same variable outside
* of that function, it would become "global scope", or readily available throughout all of 
* your code. 
*
* When you declare using "const" or "let", you are using a variable that is "Block scoped",
* which basically means that your variable will only be executable within the scope of it's 
* originally declared block. Let's take that function before and replace the var with let. 
*/
function iterateOverAgain(array) {
     for(let i = 0; i < 4; i++) { //declared as let or const, accesible inside loop(block)//
         console.log[i];        //accesible inside loop (block)//
     }           //not accesible outside the loop within the function//
 }
 
/* It's crucial to understand these concepts before choosing which variable is right for you. 
* Do you want the variable to be flexible, mutable and accesible throughout a function?
* Then var is your gal. Would you prefer a variable that is mutable, yet block specific?
* Can't go wrong with let. Or do you need a variable that can't be reassigned and locked into
* the contained scope of a loop within your function? My man, big const is for you. 
* 
*
*
* HOISTING:
*
* I could tell you weren't satisfied with that, you want more. Well here you go, it's 
* time to talk hoisting. 
*
* Hoisting is the process by which variables can be used before they are declared. No, 
* you didn't hear me wrong there, you can use a variable before it is born. 
* This is only possible because, in Javascript, variable and function declarations are 
* actually processed before anything else, essentially declaring themselves before 
* anything else gets done in the program. 
* 
* 
* For example:
*
*/
console.log(seeYaLater);  //calling on a variable before it is declared//
var seeYaLater;           // the delcaration itself.// 
seeYaLater = "Behold my initialized form"; // the initialization, post console.log()//
 
/* If we were to pass this through the console, it would output "undefined" because 
* although seeYaLater is declared, it isn't initialized until after the console.log(). 
* In order to see the string "Behold my initialized form", we would have to log
* seeYaLater one last time to the console UNDER the initialization. Like so:
*/
console.log(seeYaLater);  //undefined//
//var seeYaLater;           // the delcaration itself. //
seeYaLater = "Behold my initialized form"; // the initialization, post console.log()
console.log(seeYaLater);  //"Behold my initialized form"//
 
/* The same logic can be applied to functions, and they will even run without any extra 
* hassle! Like so:
*/
var string = "string value"; //just making a simple string for testing//

printFunction(string);    //--> calls and executes the function, before it's declared.// 
function printFunction(string){  //declaration of the function//
 console.log(string);
}

/* Alright, I can tell you are getting a bit bored with all the technical stuff, 
* so heres a break from learning with a random fun fact:
*
*                          Only "var" is allowed to hoist. 
* 
* Ha! Gotchya. That wasn't a fun fact at all. That was more learning! But the fact 
* remains, attempting to hoist with "let" or "const" is no-go because of something
* called the "temporal dead zone", which, aside from being the setting of the 
* worst doctor who episode, is a fancy term reffering to the time between let or 
* const entering scope and being declared. This small window, ominously shortened 
* to "TDZ", is the reason var gets to have all the hoisting fun and the other two 
* have to stay inside and watch. 
*
*CONCLUSION:
*
* Well that's all fine and dandy, but we aren't quite done here yet. There are a few 
* more things you should know about let in particular. For example, even though you
* can assign and reassign a variable using let, you absolutely cannot under any 
* circumstance re-declare it. You are also not allowed to declare a variable using
* let with the same identifier as another variable that was declared using var. I 
* don't make the rules, I just try and understand and re-communicate them. 
*
* Now that you know all about the three types of variables, their individual 
* capabilities, scope and hoisting, go try it for yourself! 
* It won't hurt, I promise!
*/