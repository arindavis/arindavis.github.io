/*
* CONTROL FLOW:
* Javascript supports a small group of statements called Control Flow Statements. 
* They are used to incorporate interactivity into your application by taking in an
* input, then checking that input against a preassigned set of if else if and else
* statements that will be determined by a simple boolean. 
*
* The important thing to remember, other than the syntax we are about to get into, 
* is that each stage of a Control Flow statement is checking for one of two 
* conditions; is it true or is it false? If it is true, do something. If it is 
* false, do something else. And so on.
*
* Here's an example of a simple if statement:
* 
*/ 
var exampleValue = false;     // our first example variable 
if (exampleValue) {          //if the given value is true//
   console.log(true); //console.log "true"
} else {              //otherwise
   console.log(false);//console.log "false"
}

/*In this case, the if statement would've logged "false", because
* our value is currently assigned the value of false. '
*
* Notice I put a little sneaky  one in there for you. Did you catch it?
*
* It's that statement after the if statement, the "else" statement. See it?
* It's usually placed at the end of these Control Flow statements as a sort 
* of last case scenario. In this case, it's logging "false" to the console for us. 
* 
* Simple enough, right? Well let's make it more fun by adding an "else if" 
* statement smack dab into the middle of our if statement. 
*
*/
var exampleValueTwo = false; //our second variable 

if(exampleValueTwo === "string") {  // if our variable is a string
    console.log("We got a string, boys!");  // log this message to the console 
} else if (exampleValueTwo === true || false) { // if it's true or false
    console.log("It's a boolean! Get it!");  // log this one
}  else {                                   // otherwise, log this final message. 
    console.log("I have no idea what it is, chief.");
}
/* So if you're paying attention, you already know that we will be logging
* "It's a boolean! Get it" into the console simply because our passed in variable, 
* exampleValue two, is not just false, it's a boolean. Notice the else if statement 
* is specifically checking our variable to see if it's true or false, and returning
* our pre-programed message. 
* 
* Last but not least, let's touch on Switch statments. 
* 
* Switch statements, expressed below for your viewing pleasure, allow our programs 
* to look at a value and match it to a case label. If the match is successful, then 
* our program will return our pre-assigned message. 
* 
* Important to always start a switch statment with the denotation "switch", then 
* place your input into a set of parenthesis, open up a curly bracket and 
* begin the process of labelling the cases you're checking for. As you go, 
* you will want to place "break;" statments along the way in order to make sure the 
* switch statment knows when to stop when a match has been found. Last but not least, 
* make sure to place a "default" statment at the end, almost like the final "else"
* in our above if statements. It helps insure that if the case isn't found it will 
* still return some kind of desired response. 
* 
* It sounds more complicated than it is, here ya go:
*/
var movieGenre = "Italian New Wave";
switch (movieGenre) {
    case "Noir":
     console.log('Saxophone intensifies');
     break;
    case "Western":
        console.log("Howdy there, pardner");
        break;
    case "RomCom":
        console.log("I'm not gonna cry...");
        break;
    default:
        console.log("Maybe just watch some tv?");
    
}

/*
*In this particular case, we would've seen the last message passed to the console, 
* because our switch statement couldn't find a match. 
*/