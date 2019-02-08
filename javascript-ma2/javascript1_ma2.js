//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance
function hungryPerson(){
    this.person = "Christian";
}
hungryPerson.prototype.stomachSound = function () {
    console.log("My name is " + this.person + " and my stomach says RRR RRR RRR!");
}

var firstPerson = new hungryPerson();
firstPerson.stomachSound();
//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers.slice(5));

//3. Delete the last number in the array that you created above.
numbers.pop();
console.log(numbers);

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 
/*Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.
*/
var fruit = /strawberry/gi;
var fruits = /strawberries/gi;
var changeFruit = 'Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.';
var newFruit = changeFruit.replace(fruit, 'banana');
var newFruits = newFruit.replace(fruits, 'bananas');
console.log(newFruits);



//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.
var clubs = ["Manchester", "Chelsea", "Tottenham", "Arsenal" ];
console.log(clubs);
 function removeClubs (){
     clubs = [];
     clubs.push("BMW", "Marcedes", "Volvo", "Ferrari");
     console.log(clubs);
 }

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.
var person = [
    {name: "chris"},
    {name: "john"},
    {name: "jessy"}
]
 var personName = person.filter(function(personName){
     return (personName.name === "jessy");
 })
 console.log(personName);

//7. Create a simple function that logs the date.

console.log(new Date());