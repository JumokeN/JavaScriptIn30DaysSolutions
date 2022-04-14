//exercise 1
 let challenge = '30 Days Of JavaScript'; // 1.
console.log(challenge); // 2.
var challengeLength = challenge.length; // 3. 
console.log(challengeLength);
let upperChallenge = challenge.toUpperCase(); // 4.
let lowerChallenge = challenge.toLowerCase(); // 5.
let slice1stChallenge = challenge.substring(0, 1); // 6.
let daysOfJavaScript = challenge.substring(3); // 7.
let checkIfScriptIsContained = challenge.includes("Script"); // 8.
const challengeSplitArray = challenge.split(" "); // 9.
const challengeSplitArrayWithSpace = challenge.split(" "); // 10.
let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(','); // 11.
console.log(challenge.replace('JavaScript', 'Python')); // 12.
let lastIndex = challenge.length - 1; // 13.
console.log(challenge.charAt(lastIndex)); // t
console.log(challenge.charCodeAt(3)); // 14.
console.log(challenge.indexOf('a'));         // 15.
console.log(string.lastIndexOf('a')); //16.
let string = 'You cannot end a sentence with because because because is a conjunction'; //17
console.log(string.indexOf('because'));  //17
console.log(string.lastIndexOf('because')); //18.
let becauseString = 'You cannot end a sentence with because because because is a conjunction'
console.log(becauseString.search('because')); // 19.
let trailingString = '   30 Days Of JavaScript;   ' //20
console.log(trailingString);     
console.log(trailingString.trim(' '));
console.log(challenge.startsWith('30'));   // 21
console.log(challenge.endsWith('JavaScript')); //22
let pattern = /a/gi; //23
console.log(challenge.match(pattern));
let thirty = '30';
console.log(thirty.concat("Days", "Of", "JavaScript")); // 24
console.log(challenge.repeat(2)); //25


