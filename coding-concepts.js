// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Charlie 2021"
// console.log(cohort.length)

// a) Your answer: The asnwer will log 12
// b) Verify and explain: The answer did log 12. Strings are zero indexed and each position has an index (including positions with spaces). However, .length is NOT zero based, so the count starts at 1 and also includes spaces within that count.


// --------------------2) What will this log?

var greeting = "Hello World!"
// console.log(greeting[3])

// a) Your answer: The answer will log l
// b) Verify and explain: The answer did log l. This was because the .log called on the variable greeting and had square brackets after that call, which means it is looking for an index position. In this case it is 3. Since strings use zero based indexing we start at zero for the first position. Based on this logic, index 3 is the letter l.


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
// console.log(languages[index])

// a) Your answer:JavaScript
// b) Verify and explain: Welp, after my lovely explaination above I forgot that not only are strings zero based, but so are arrays. In this instance .log is calling on the variable languages and is specifically looking for the value that is at index 1. The variable index is assigned the number 1. So if you call on that variable you are calling on it's assignment. So when looking at the .log we are looking for languages index 1, which is "Ruby".


// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())


// a) Your answer: ["SATURDAY", "SUNDAY"]
// b) Verify and explain: TypeError weekendDays.toUpperCase is not a function. This threw me for a quick loop and then I realized when I reasearched that .toUpperCase works on strings. weekendDays is assigned an array, not a string. So it will throw an error.


// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// a) Your answer: String
// b) Verify and explain: Number. Hmmm. I am assuming it just returned the first value in dataTypes. When I did some research I read that typeof works on primitive data types and when given anything besides the 6 data types we learned plus bignit and function it will return object. When I ran the code with out .length it returned object. So I can only conclude type of will not work on the variable becuase it holds an array (which is not a primitive data type) and .length was added to throw us off into thinking it would go through the whole array.
