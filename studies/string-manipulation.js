/*
* STRING-MANIPULATION:
* 
*
* Because of the way Javascript treats primitive values, we
* can actualy manipulate strings using certain operators or string methods. 
*
*
*
* Using Operators:
*
* The only mathmatical operator we are allowed to use on strings in
* Javascript is the unitary plus operator. Which is a fancy way of 
* saying "addition". This is a reliable way to add strings together, 
* like so:
*/
var firstName = "Tommy";
var lastName = "Wiseau";
var fullName = firstName + " " + lastName;
console.log(fullName);//--> Tommy Wiseau
/*
* Be sure not to forget that additional space there in the middle, if
* it is relevant to your application. 
*
* This can be shorted to +=, if you so desire. 

* With String Methods:
*
* indexOf(): a method used for finding the indexed position of particular
* word within a string. 
*/
var string = "Where's the beef?";
//beef is at the 12th index of this string
var indexOfString = string.indexOf("beef");
console.log(indexOfString); //--> 12

/* This will log the indexed position of "beef" in string, 
* which is 12. 
*
* lastIndexOf(): a method that will return the index of the last occurence 
* of a specific text within a string. 
*/
var string2 = "Do you even have beef? Where's the beef?!";
var lastIndexOfString = string2.lastIndexOf("beef");
console.log(lastIndexOfString);//--> logs 35, the last index of beef

/* Both of the above methods return -1 if the text isn't found. 
*
* search(): searches for a string for a specific value and gives you
* back the position when it is found. Like so:
*/
var string3 = "Alright, no beef. Where's the chicken?";
var searchingString = string3.search("Chicken");
console.log(searchingString);//--> returns 30, the index of chicken. 

/* On the surface, both the index methods and the search method seem
* similiar to each other, but there a few key differences. 
* The search medthod absolutely cannot take a second start position argument,
* and the indexOf method cannot search for regular expressions. 
* 
*
* Now lets talk about extraction and strings. There are three primary ways of 
* extracting values from a string:
*
* slice(start, end): extracs a piece of the string and returns it as a new string.
* It takes two parameters, the start and the end. Here's an example:
*/
var string4= "Kitty, Banana, Bird";
var stringSlicer = string4.slice(7, 13);
console.log(stringSlicer);//--> will return "Banana", because everything else was extracted. 
/* Fun fact, the slice method can also accept negative values. If you were to do
* this, it would simply count from the end of the string backwards instead of from 
* the beginning forwards. Unlike-
*
*substring(): similiar to slice in every way, only it cannot take a negative value. 
* because this is the only primary difference, I don't think you need an example. 
*
* substr(): also similiar to slice, only the second parameter now specifies the length 
* of the extracted part, like so:
*/
var string5 = "Kitty, Banana, Bird";
var stringSub = string5.substr(7,6);
console.log(stringSub);//--> Banana
/*
*
*
* replace(): a method that replaces a specific value with another. Example:
*/
var string6 = "Please respect all authority";
var replaceString = string6.replace("respect", "question");
console.log(replaceString);//--> please question all authority
/*
* And those are just 7 of the darn things! There are plenty more where that came from. 
*
*
*toLowerCase(): a method for turning every letter of a string lowercase. 
*/
var string7 = "cAn yOU rEaD tHIs nOw?"
var lowerCaseString = string7.toLowerCase(string7);
console.log(lowerCaseString); //--> "can you read this now?";
/*
*toUpperCase(): the exact same as toLowerCase, only it deals in uppercase. 
*/
string7.toUpperCase();//--> "CAN YOU READ THIS NOW?"
/*
* Which brings me to my last point. The primary way to call all of
* these methods is exactly what I did for that last one there. 
* Simply use dot notation after a string's name, then slap on
* those closed parenthesis. Or use them to pass in the string 
* that way, they're both possible. You do you. 
*/

