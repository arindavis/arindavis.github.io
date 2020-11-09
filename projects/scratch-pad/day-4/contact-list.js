// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
//make contact should return an object filled with contact info
    
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast,
    };
} 

    

function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        }, 
        addContact: function(contact){
            //will push our given contact to the end of our contacts array. 
            contacts.push(contact);
        },
        findContact: function(fullName){
        //for loop that will iterate the contacts array of objects
        
            for(var i = 0; i < contacts.length; i++){
        //, looking to see if the given full name strictly equals the first name and last name of a given contacts obect seperated by a space. 
               if(fullName === contacts[i].nameFirst + " " + contacts[i].nameLast) {
        // if it does, return that specific iteration. 
                   return contacts[i];
               } 
            } //otherwise, return undefined. 
            return undefined;
        },
        removeContact: function(contact){
        //a for loop that will iterate over our contacts array of objects
            for(var i = 0; i < contacts.length; i++){
        //right here, it is checking to see if the ID's match between our iteration and the current contact ID. 
               if(contact.id === contacts[i].id){
        //if the above results true, then remove the given contact
                   contacts.splice(i, 1);
               } 
            } 
        },
        printAllContactNames: function(){
        //creating a place to store all of our strings
            var stringOfStrings = "";
        //a for loop that will iterate over our contact array of objects
            for (let i = 0; i < contacts.length; i++) {
        //for each iteration, add the first and last name of this iteration to string of strings, seperated by a space.
                stringOfStrings += contacts[i].nameFirst + " " + contacts[i].nameLast;
        //if the iteration hasn't finished, ie for every iteration, please add a line break after our first name last name pairs.
                if(i < contacts.length - 1) {
                    stringOfStrings += "\n";
                }
            } //last but not least, return our stringOfstrings. 
            return stringOfStrings;
        } 
    }
}


// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
