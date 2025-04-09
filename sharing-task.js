/*
===========================================
🤝 Collaborative Coding Challenge: Event Helpers
===========================================

🎯 Objective:
Students will work in small teams to collaboratively design and implement
reusable functions that solve specific tasks. This activity encourages:

- Teamwork
- Critical thinking
- Knowledge sharing
*/

// ============================================
// 🎉 Scenario:
// Your bootcamp is organizing an event to showcase projects.
// Your team will write reusable JavaScript functions to help manage the event.
// Each function must:
// - Use parameters
// - Use return statements
// - Follow the single responsibility principle
// ============================================


// ============================================
// 🧩 Task 1: Generate Attendee Badge
// ============================================
// Create a function that:
// - Takes a name and a role (e.g., "Alice", "speaker")
// - Returns a string in the format: "Name: Alice, Role: Speaker"

// Steps:
// 1. Define the function with two parameters.
// 2. Format the output string properly.
// 3. Capitalize the role if needed.
// 4. Return the result.


// ============================================
// 🧩 Task 2: Calculate Event Cost
// ============================================
// Create a function that:
// - Takes number of attendees and cost per attendee.
// - Applies a 10% discount if attendees exceed 100.
// - Returns the total cost.

// Steps:
// 1. Multiply attendees by cost.
// 2. Check if attendee count is over 100.
// 3. If so, apply a 10% discount.
// 4. Return the final total.


// ============================================
// 🧩 Task 3: Validate Email
// ============================================
// Create a function that:
// - Takes an email string as input.
// - Returns true if the email contains both "@" and "." characters.
// - Returns false otherwise.

// Steps:
// 1. Check if the string includes both "@" and ".".
// 2. Return true or false accordingly.


// ============================================
// 🧠 Collaborative Steps
// ============================================

// 📌 Design Phase:
// - Brainstorm function requirements: What inputs and outputs are needed?
// - Assign roles within your team:
//   ▸ Pseudocode Writer
//   ▸ Initial Coder
//   ▸ Testers / Debuggers

// 🛠️ Implementation Phase:
// - Write and refine your three functions as a team
// - Use return statements and ensure reusability

// 🧪 Testing Phase:
// - Each member writes test cases for each function
// - Use console.log() to test different inputs and edge cases

// 🎤 Presentation Phase:
// - Share your functions with the class
// - Explain how your team approached the design and testing process

// ✅ Bonus: Can you extend any of the functions to be more flexible or reusable?


//Task 1
let person = { name: "Alice", role: "speaker" };

function badge(person) {  //function prints a badge with the name and role of an attendee from the object
    console.log(`Name: ${person.name}  Role: ${person.role}`);
};
badge(person);  //calls the function badge to output to console


//Task 2
let stats1 = { attendance: 99, costPer: 25 };
let stats2 = { attendance: 120, costPer: 25 }
function calculateCost(stats) {  //function calculates the cost base on the information in the object
    if ((stats.attendance) > 100) {     //calculates cost with discount for more than 100
        cost = (stats.attendance * stats.costPer * .9);
    }
    else {   //calculates cost for 100 or less
        cost = (stats.attendance * stats.costPer);
    }
    console.log (`The total cost for ${stats.attendance} people is ${cost}`);  //output to console
};

calculateCost(stats1);  // calls the function to calculate the cost
calculateCost(stats2);



//Task 3
let herEmail = "jyllatham@hotmail.com";
let hisEmail = "chrisbrady@gmail"
let valid = false
function validateEmail (email) {   //function to validate email contains @ & .
    if (email.includes("@") && email.includes(".")) {
        valid = true;
        console.log (`[ ${email} ] is a VALID email.`);  //message returned if email contains @ & .
    } else {
        valid = false;
        console.log (`[ ${email} ] is NOT a vailid email.`);  //meassage returned if email does not contain @ & .
    }
}
validateEmail (herEmail);  //vaildates herEmail
validateEmail (hisEmail);  //validates hisEmail

