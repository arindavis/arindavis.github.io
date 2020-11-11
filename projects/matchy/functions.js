/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search (array, animalName) {
        for(var i = 0; i < array.length; i++) {
        //looping through our array, starting at 0 and ending at 
            if(array[i]["name"].toUpperCase() === animalName.toUpperCase()) {
            //if the name in our array object is strictly equal to our animal name
                return array[i];
            //return that name 
        } 
    } return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace (animals, name, replacement) {
        for(var i = 0; i < animals.length; i++) {
        //looping through our array, starting at 0 and ending at 
            if(animals[i]["name"].toUpperCase() === name.toUpperCase()) {
            //take away that indexed object and supplement our replacement
            animals.splice(animals[i], 1, replacement);
        } 
    } 
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove (animals, name) {
        for(var i = 0; i < animals.length; i++) {
        //looping through our array, starting at 0 and ending at 
            if(animals[i]["name"].toUpperCase() === name.toUpperCase()) {
            //take away that indexed object 
            animals.splice(animals[i], 1);
        }
    } 
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal) {
    //if our objects name, name length, species and species length are not equal to zero
    if ((animal.name && animal.name.length !== 0) && (animal.species && animal.species.length !== 0)) {
    //then iterate through our array
        for (let i = 0; i < animals.length; i++) {
        //and if this name matches with any of the other names in our array of objects
            if (animals[i]['name'].toLowerCase() === animal['name'].toLowerCase()) {
            //stop everything and return nothing
                return;
            }
        }
    //push animal onto our animals array
        animals.push(animal);
    }
} 


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
