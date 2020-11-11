/*
* LOOPS:
*
* Do you need a repetitive job done quickly and easily? Don't do it yourself!
* Trick a computer into doing it for you with loops. Stupid computers. 
*
* Loops are one of the primary ways we can sift through data in Javascript, 
* and understanding each of them is key in the eventual design of any 
* application. Here and now we are only going to be covering a select few:
* the for loop, for in loop, and the while loop. 
*
*
* The For Loop: 
*
* A for loop consists of three expressions, contained within parentheses and 
* seperated by colons. Each expression represents a different point in our 
* loop. The first determines where the loop will start, the second when it
* will end, and the last expressions details what to do next. Always be sure
* to begin your for loop with the denotation "for", followed by a set of 
* parenthesis. Then be even more sure to end it with a statment. 
* 
* Here's a visual example of what I'm trying to get accross:
*
*for([start];[end];[next]) {
* statement;
*}
*
* Now that you have an idea on the concepts, let's see one in action. 
*
*/

for(let i = 0; i < 5; i++){ 
//for(start at 0; stop when i is less than five; add one every iteration)//
            console.log('iteration'+ i); 
            //log the string 'iteration' and the iteration counter//
        }
/*
* This loop will log the following to the console:
*
* iteration0
* iteration1
* iteration2
* iteration3
* iteration4
*
* Because we told it to start 0, stop at four(strictly less than five) and 
* add one for each time it loops. These can be used to iterate over arrays, 
* For loops can be handy for all sorts of things, from creating numbered lists
* to iterating over an array and searching for a  specific set of strings. 
* Just be careful not to create something programmers call an "infinite 
* loop", or help the intregrity of your application might falter. 
* 
* Now, just for fun and because we can, lets remake that for loop from the ground
* up to loop through the same data, but BACKWARDS. 
* (muffled mic drop)
*/
for(let i = 4; i >= 0; i--){
//for(start at 4; stop when i is greater than or equal to 0; subtract once each i//
            console.log('iteration'+ i); 
            //log the string 'iteration' and the iteration counter//
        }


/* Now this will result in the following: 
*
*
* iteration4
* iteration3
* iteration2
* iteration1
* iteration0
* 
* You could also use th for loop to iterate over an array, like so:
*/
var myArray = [0,1,2,3,4];
for(let i = myArray.length - 1; i >= 0; i--){
//for(start at the indexed length minus one, end at 0 and subtract one each i//
            console.log('iteration'+ i); 
            //log the string 'iteration' and the iteration counter//
        }


/*
*
* This will print the following to the console: 
*
* iteration4
* iteration3
* iteration2
* iteration1
* iteration0
*
* In this particular instance we've looped backwards, but by altering 
* your starting position, end position and the iteration counter you could
* easily make it loop forwards as well. Be careful how you use comparison
* operators for the end point in particular, it's the most likely way
* to create an infinity loop! Which isn't half as fun as it sounds. 
*
* Next up is a much more sleek loop, for the modern woman. The one, the only:
* 
* The For In Loop:
*
* Iterating over arrays is fun and all, I can here you thinking to yourself, 
* but what really gets my gears turning is iterating the other great complex 
* data type! The object!
*
* In order to iterate over an object's set of key value pairs we have to us the 
* for in loop. Starting again with "for", followed by open parenthesis and the 
* three essential expressions; the creation of a variable for the sake of 
* iterating, the "in" denotation, then finally the object in which you wish
* to loop over.  Just as in the case with for loops, we will want to finish our
* loop with some sort of statement or command.
* 
* See for yer'self:
*
* for(variable in object){
* statement;
*}
*
*
* Now let's see one of these beauties in the wild! Croikey!
*/ 
var crocHunterObject= {  // creation of an test object with
    firstName: "Steve",  // an honestly outdated reference. RIP. 
    lastName: "Irwin"
}
for(let i in crocHunterObject){
//for(variable named i, in, the object where we are looking//
    console.log(crocHunterObject[i]);
//log the values in this object
}

/*
* This would've resulted in the following being logged to the console:
*
* Steve
* Irwin
*
* Rest in peace, king. 
* Before moving on, it's important to note that if you wanted to only print the 
* key instead of the value, you would simply print i to the console instead, as the loop
* is technically using the property itself to sort through the object. 
*
* Before moving on to while loops, I think it's worth mentioning that you can certainly
* put an array into a for in loop, but unfortuneatly you'll only be able to access the 
* the indexed positions, not the values themselves. Tough break, kid. 
*
* The While Loop:
*
* Deceptively simple when compared to it's siblings, the while loop is used for 
* executing predetermined statments WHILE  some condition is true. It uses very 
* similar syntax as the other two, like so:
*
* while (condition){
*     statement;
*}
*
* It's very important to note that within those parenthesis, a boolean, or true/false
* statement, is being calculated. You're literally saying "While this specific condition
* is true, execute the following command". 
*
* Well that's it, pack it up. We're done here. 
*
*...
*
*.....
*
* Wait, you want an example? 
*
* Ugh. Fine. Just don't say I never did anything for you. 
*/
var dogs = 5;
//in this made up scenario this is how many dogs you have. Is it enough, though? No. 

while (dogs < 10) {
//while dogs is less than ten
    console.log("That's not Enough dogs, friend.");
//remind our reader that they need more dogs
    dogs++; //then give them more dogs until they have enough dogs. 
//
}
/*The following will result in our programed response, because our condition, 
* dogs < 10, is true, but without the "dogs++" after that log our program would
* be stuck in a never ending loop, because that's simply not enough dogs, friend. 
* 
* Once the condition is proven to be true the loop will stop, and you'll have the 
* right about of dogs once and for all. 
*/