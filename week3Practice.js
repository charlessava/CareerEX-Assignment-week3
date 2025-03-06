// Assignment 1 Create variables to store your name, age, and nationality. Then combine them into a sentence that introduces you.

//creating a binding for my name
const myName = "Tochukwu"

//creating a binding for my myAge
var myAge = 30

//creating a binding for my country
var myNationality = "Nigeria"


//creating a binding for an introductory sence aboout me
let myIntroduction = `Hello my name is ${myName}, I am from ${myNationality} and I am ${myAge} years old, thanks`


//Displaying the myIntroduction variable as a sentence. 
console.log(myIntroduction)


// ASSIGNMENT 2:  Make a variable with your favorite quote or lyric.Change the entire text to uppercase and lowercase in separate steps.


// creating a binding for my favourite quote
var MyBestQuote = "To see the hand of God in all situations"


//logging out the 'MyBestQuote' string content as upper case
console.log(MyBestQuote.toLocaleUpperCase());


//logging out the 'MyBestQuote' string content as lower case.
console.log(MyBestQuote.toLocaleLowerCase());


// ASSIGNMENT 3: Take a word and rearrange it in reverse order, then log the reversed word.


// Creating a string binding
let Word = "Personality"

//reversing the string and logging it out
let reverseWord = Word.split("").reverse().join("");

console.log(reverseWord);


// ASSIGNMENT 4.Store the price of 3 items in 3 different variables.Calculate the total and display it with a message.

// Creating a binding for food items and getting their combined total price
var ricePrice = 4000
var tomatoesPrice = 300
var beansPrice = 3500
var totalPrice = ricePrice + tomatoesPrice + beansPrice

var expenseMessage = `Your total purchase cost #${totalPrice}, thanks for the patronage`

console.log(expenseMessage);



//Assignment 5: Find the average of 5 test scores stored in variables. Display the average with a message.

//creating the variables
var mathScore = 80;
var EnglishScore = 60;
var GovernmentScore = 85;
var physicsScore = 75;
var commerceScore = 89;

var averageScore = mathScore + EnglishScore + GovernmentScore + physicsScore + commerceScore / 2;
var averageScoreMessage = `Your average score for the 5 tests is ${averageScore}, keep pushing yourself!`
console.log(averageScoreMessage);


