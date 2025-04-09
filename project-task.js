/*
===========================================
🔁 Function Refactoring Activity
===========================================

🎯 Objective:
Students will identify repetitive or poorly organized code in a given script
and refactor it by creating programmer-defined functions.

This activity reinforces:
- Writing functions with no, single, and multiple parameters
- Using return statements effectively
- Improving code reusability and modularity

---
🧭 Instructions:

1️⃣ Analyze the provided script, which performs a series of repetitive tasks.

2️⃣ Identify sections of code that can be improved using functions.

3️⃣ Write reusable functions with appropriate parameters and return statements.

4️⃣ Refactor the original code to use your new functions.

5️⃣ Test the refactored script to ensure it produces the same output as the original.

---

// ============================================
// ❌ Original Code (Before Refactoring)
// ============================================

// Script 1 - Greeting multiple users
console.log("Welcome, Alice!");
console.log("Welcome, Bob!");
console.log("Welcome, Charlie!");

// Script 2 - Sum calculation
let num1 = 5, num2 = 10;
let sum = num1 + num2;
console.log("The sum of 5 and 10 is " + sum);

// Script 3 - Product calculation
let product = num1 * num2;
console.log("The product of 5 and 10 is " + product);

// Script 4 - Print names from a list
let names = ["Alice", "Bob", "Charlie"];
console.log("Names in the list:");
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

/*
===========================================
🛠️ Steps for Refactoring
===========================================

🔹 Break Down Tasks into Functions:
   - Identify repetitive patterns (e.g., greetings, calculations, list printing)
   - Define separate functions for each task

🔹 Write Functions with Parameters and Return Values:
   - Parameterize functions for flexibility (e.g., pass in name, numbers, arrays)
   - Use return statements where necessary

🔹 Refactor the Original Code:
   - Replace repeated code with meaningful function calls
   - Keep your code clean, readable, and easy to maintain
*/

// ✅ Your refactored code goes below this line!


let names = ["Alice", "Bob", "Charlie"];
let num1 = 5, num2 = 10;
let sum = num1 + num2;

//Script 1 - greetings
function greet(name) {  //function to greet a person
   console.log(`Welcome, ${name}!`);
}
for (each of names) {   //loop to greet each name
   greet(each);
}

//Script 2 - Sum calculation
function add(a, b) {  //function to add two numbers
   return a + b;
}
function printSum (a, b) {  //function to print the sum to the console
   console.log (`The sum of ${a} and ${b} is ${add(a, b)}.`);
}
printSum(num1, num2);

//Script 3
// function to multiply 2 numbers
function multiply(num1,num2) {
   return num1 * num2;
}
function printProduct (a, b) { //function to print the product of two numbers
   console.log (`The product of ${a} and ${b} is ${multiply(a,b)}.`);
}
printProduct(num1, num2);  //prints product of num1 and num2


//Script 4
function printNames (nameArray) {   // function to print a list of names
   console.log ("Names in the list: ");
      for (each of nameArray) {   //loops through an array of names
         console.log(each)[i];
      }
printNames (names);  //prints names
}