var prompt = require('sync-prompt').prompt;

var first = prompt('What is your first name?');
var last = prompt('What is your last name?');
var full = first + ' ' + last;
console.log('your full name is', full);

var color = prompt('What is your fav color?');
console.log('your fav color is ' + color + '.');

var age = prompt("What is your dog's age? ");
console.log(typeof age);
age = parseInt(age);
console.log(typeof age);

console.log("Your dog's age is", age);
var dogyear = (age*7);
console.log("Your dog's age in human years is", dogyear);


var humanAge = prompt("What is your your age? ");
humanAge = parseInt(humanAge);

if (humanAge < 21) {
  console.log("Sorry, you can't drink alcohol.");
}else {
  console.log("Feel free to drink alcohol.");
}

var unit = prompt("Is your starting temp F or C? ");
var temp = prompt("What is the current temperature number? ");
temp = parseInt(temp);

if (unit === 'C') {
  var tempF = ( temp * 9/5 ) + 32;
  console.log('The temperature is', temp, 'C and', tempF, 'F.');
}else{
  var tempC = ( temp - 32) * 5/9;
  console.log('The temperature is', temp, 'F and', tempC, 'C.');
}

console.log("Hi, I will now calculate your personal Body Mass Index (BMI).");
console.log("First, I need some information from you.");
var height = prompt("What is your height in inches? ");
height = parseInt(height);
var weight = prompt("What is your current weight in pounds?");
weight = parseInt(weight);
var bmi = (weight / (height * height)) * 703;
console.log("Your current BMI is:", bmi.toFixed(1));

