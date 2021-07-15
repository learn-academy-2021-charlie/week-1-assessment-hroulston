// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// All problems can be solved with concepts covered in class or in the syllabus
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that takes in a number and determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

// I first need to create a function

// const boilingPoint = () =>{
// }

// That function needs to take an argument of a temperature

const boilingPoint = (temp) => {
  // Then it needs to take the argument of temp and compare it to the baseline of boiling point using relational and equality operators.
  if(temp === 212){
     // Then based on that comparison return a statement that includes the temperature given and whether that temperature was at, below or above boiling point.
    return "212 is at boiling point"
  }else if(temp > 212){
    return `${temp} is above boiling point`
  }else if( temp < 212){
    return `${temp} is below boiling point`
  }
}
console.log(boilingPoint(temp3))

// --------------------2) Create a function that takes in two arrays of numbers and returns a single array with all the values sorted least to greatest.
// Use the test variables provided below. Expected output: [-9, -7, 0, 3, 7, 8, 9, 13, 22, 36]

var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 22, 9, 13]

// Step 1. create a function

// const singleArray = () => {
// }

// This function needs to take the two arrays given and combine them into one arrays

const singleArray = (array1, array2) => {
  return array1.concat(array2)
}
console.log(singleArray(myNumbers1, myNumbers2))

// Next the function needs to sort all of the numbers that are in that single array. So I will console,log what I have above and include the .sort() method. My issue however, is I am pretty sure .sort() works to alphabetize items and we are working with numbers. So let's try it, see what happens and adjust from there.

// console.log(singleArray(myNumbers1, myNumbers2).sort())

 // And the result was the numbers were all wonky. I did some research and found the comparison function (a,b => a-b) which takes two values and subtracts the first from the second. If the answer is negative the second value is bigger and if the answer is positive the first value is bigger. As the function runs through the numbers it will move them accordingly. If I use this comparison function and pass it into the sort function it should sort the values in ascending order.

 console.log(singleArray(myNumbers1, myNumbers2).sort((a,b)=>(a-b)))

 // And bam, it worked. So ecxiting.


// --------------------3) Create a function that takes in a string of a single word and returns the string with all letters reversed.
// Use the test variables provided below. Expected output: "ovarb", "eilrahc"

var myString1 = "bravo"
var myString2 = "charlie"

// create a function

// const reverse = ()=> {
// }

// The function then needs to take a string and return the string with the letters in reverse.

// const reverse = (string)=> {
// return string.reverse()
// }
// console.log(reverse(myString1))

// I tried to pass a variable in as an argument and return that variable with .reverse() but that threw an error. I apparently need to really work on what methods work with strings and what works with arrays :/

// So, .reverse() works on arrays. It's javascript, so plain and simple in order for it to work I need an array. So, let's turn our string into an array. First I will test .split() on one of the variables (since that turns strings into arrays) to make sure I get the output I am looking for and store that in a new variable.

// var splitStr = myString1.split("")
// console.log(splitStr)

// Then I will reverse the new variable that holds the array I made and log it, just to make sure that works...
// var reverseArray = splitStr.reverse()
// console.log(reverseArray)

// Finally, I will rejoin my array back into a string
// var finalArray = reverseArray.join("")
// console.log(finalArray)

// cool, now let's see if I can shove all of that into a function and get it to output the reverse of the string passed into it.

const reverse = (string)=> {
  var splitStr = string.split("")
  var reverseArray = splitStr.reverse()
  var finalStr = reverseArray.join("")
  return finalStr
 }

 // fingers crossed...

 console.log(reverse(myString2))

 // alright, it worked!

// --------------------4) Create a function that takes in two numbers and subtracts the smaller number from the larger number.
// Use the two sets of test variables provided below. Expected output: 15, 12

var numberExample1 = 42
var numberExample2 = 27

var numberExample3 = 7
var numberExample4 = 19

// Create a function

// const subtraction = () =>{
// }

// The function needs to take in two myNumbers

// const subtraction = (num1, num2) =>{
// }

// The function needs to take those two numbers and subtract the smaller from the larger.

// if(num1 === num2){
// SO we first need to figure out which one is smaller and which is larger.We should also account for equal numbers.
//   return "numbers are equal"
// }else if(num1 < num2){
//   return num2 - num1
// }else{
// return num1 - num2
// }

// Next we add this logic into our function and run it

const subtraction = (num1, num2) =>{
  if(num1 === num2){
    return "numbers are equal"
  }else if(num1 < num2){
    return num2 - num1
  }else{
    return num1 - num2
  }
}
console.log(subtraction(numberExample3, numberExample4 ))

// --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. Inform your user if the variable passed into the subtraction function is not a number.
// Use the two sets of test variables provided below. Expected output: "Your input is not a number", 3
// Hint: There is an operator in JavaScript called typeof :)

var numberExampleRefactor1 = 42
var numberExampleRefactor2 = "hello"

var numberExampleRefactor3 = 27
var numberExampleRefactor4 = 24

// copy and paste your code from #4

const subtraction = (num1, num2) =>{
  if(num1 === num2){
    return "numbers are equal"
  }else if(num1 < num2){
    return num2 - num1
  }else if(num1 > num2){
    return num1 - num2
    // Refactor the code to inform the user if the variable passed through is not a number
  }else{
    return "Your input is not a number"
  }
}
console.log(subtraction(numberExampleRefactor3, numberExampleRefactor4))

// Well, the code above worked, but there is a hint for using typeof. So, I will try it out with type of and see what kind of code I get and if I can get it to work. I'll start with figuring out if our variable is a number or not.

// if(typeof num1 === "number"){
//   if(num1 === num2){
//       return "numbers are equal"
//     }else if(num1 < num2){
//       return num2 - num1
//     }else{
//       return num1 - num2
//     }
//   }else{
//   return"Your input is not a number"
// }

// Well, let's see if this logic can get put into the code block of the function and log the same output as above.

// const subtraction = (num1, num2) =>{
//   if(typeof num1 == "number"){
//     if(num1 === num2){
//         return "numbers are equal"
//       }else if(num1 < num2){
//         return num2 - num1
//       }else{
//         return num1 - num2
//       }
//     }else{
//     return "Your input is not a number"
//   }
// }
//  console.log(subtraction(numberExampleRefactor3, numberExampleRefactor4))

 // Well it seems like it stopped on the first line and just returned NaN. Also I realized it is only checking one variable. Silly. Let's try using the bang operator as well as the logical operator || and see what happens.

 const subtraction = (num1, num2) => {
   if(typeof num1 != "number" || typeof num2 != "number"){
     return "Your input is not a number"
      }else if(num1 === num2){
         return "numbers are equal"
      }else if(num1 < num2){
         return num2 - num1
      }else{
         return num1 - num2
       }
     }
  console.log(subtraction(numberExampleRefactor1, numberExampleRefactor2))

// Yay!!! I did have a few runs of syntatical errors because of extra {} from my copy pasting. However, I am still celebrating.
