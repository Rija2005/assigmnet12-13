//ASSIGMENT
//CHAP 12-13
//QUESTION NO2

var num1 = parseInt(prompt("Enter the first integer:"));
var num2 = parseInt(prompt("Enter the second integer:"));


if (num1 > num2) {
    console.log( num1 +`is larger than `,num2);
} else if (num2 > num1) {
    console.log(num2,` is larger than ` , num1);
} else {
    console.log("`Both integers " +num1+ " and " + num2 + " are equal");
}
//QUESTION N03

var number = parseFloat(prompt("Enter a number:"));


if (number > 0) {
    console.log( number , `is a positive number`);
} else if (number < 0) {
    console.log( number , ` is a negative number`);
} else {
    console.log(number , ` is zero`);
}


//question n04

var inputChar = prompt("Enter a single character:");  


var lowerChar = inputChar.toLowerCase();

if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u') {
    console.log("Character" +inputChar+ " is a vowel: true");
} else {
    console.log("Character " +inputChar+ " is a vowel: false");
}


//QUESTION NO5

var correctPassword = "Password123";


var enteredPassword = prompt("Enter your password:");


if (enteredPassword === null || enteredPassword === "") {
    alert("Please enter your password");
} else {
    
    if (enteredPassword === correctPassword) {
       alert("Correct! The password you entered matches the original password.");
    } else {
        alert("Incorrect password");
    }
}
//Question n06
var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

console.log(greeting); 


//question n07

var timeInput = prompt("Enter time in 24-hour format (e.g., 1900 for 7pm):");


var time = parseInt(timeInput);


if (time >= 0 && time <= 2359) { 

    if (time >= 0 && time < 1200) {
        console.log(`${time} = ${time}am`); // Display as it is for AM times
    } else if (time >= 1200 && time < 1300) {
        console.log(`${time} = ${time - 1200}pm`); // Handle noon edge case
    } else if (time >= 1300 && time <= 2359) {
        console.log(`${time} = ${time - 1200}pm`); // Convert PM times to 12-hour format
    }

} else {
    console.log("Invalid input. Please enter a time in the range 0000 to 2359.");
}
