// QUESTION 1: Write a function that takes a student’s score and logs "Passed" if it’s 180 and above, else logs "Failed". (JAMB - style)
// ANSWER
// Here's the basic solution as requested. I also added a more robust version that includes input validation and error handling.

function checkScore(score) {
    if (score >= 180) {
        console.log("Passed");
    } else {
        console.log("Failed");
    }
}

// Example usage:
checkScore(200); // Output: Passed
checkScore(150); // Output: Failed

// This function checks a student's score and logs whether they passed or failed (JAMB-style)
function checkJambScore(score) {
    // validate input
    if (typeof score !== "number" || isNaN(score)) {
        throw new Error("Invalid input: input a valid number");
    }

    // check if score is outside valid JAMB range (0–400)
    if (score < 0 || score > 400) {
        throw new Error("Invalid number range: input a value from 0 to 400");
    }

    const result = score >= 180 ? "Passed" : "Failed";
    console.log(result);
}

// Example usage
try {
    const score = 300;
    checkJambScore(score); // Output: Passed
} catch (error) {
    console.error(error.message);
}

checkJambScore(350)

// QUESTION 2  Write a function that accepts an age and returns "You are eligible to vote" if the age is 18 or above, otherwise "Not eligible".
// ANSWER
// Here's the basic solution as requested. I also added a more robust version that includes input validation and error handling.


function checkVotingEligibility(age) {
    if (age >= 18) {
        return "You are eligible to vote";
    } else {
        return "Not eligible";
    }
}

// Example usage:
console.log(checkVotingEligibility(20)); // Output: You are eligible to vote
console.log(checkVotingEligibility(16)); // Output: Not eligible


// more robust solution to question 2

// A function that checks the voting eligibility of an individual based on age
function votingEligibilityChecker(age) {
    // Validate data type
    if (typeof age !== "number" || isNaN(age)) {
        throw new Error("Invalid input: Please input a number");
    }

    // Validate acceptable age
    if (age < 0 || age > 120) {
        throw new Error(`Unacceptable voting age: ${age} is not a valid human age`);
    }

    const message = age >= 18 ? "You are eligible to vote" : "Not eligible";
    return message;
}

// Example usage with try-catch
try {
    const age = 7;
    const result = votingEligibilityChecker(age);
    console.log(result); // Output: Not eligible
} catch (error) {
    console.error(error.message);
}


// QUESTION 3Write a function that takes a name and score, then returns: "Excellent" if score >= 90
// "Good" if score >= 75  "Average" if score >= 50  "Fail" otherwise

// ANSWER:  
function gradeStudent(name, score) {
    if (score >= 90) {
        return "Excellent";

    } else if (score >= 75) {
        return "Good";
    } else if (score >= 50) {
        return "Average";
    } else {
        return "Fail";
    }
}

// Example usage:
console.log(gradeStudent("John", 85)); // Output: Good

// A MORE ROBUST SOLUTION:

function gradeStudent(name, score) {
    // Validate input
    if (typeof name !== "string" || name.trim() === "") {
        throw new Error("Invalid name: Please enter a valid name");
    }
    if (typeof score !== "number" || isNaN(score)) {
        throw new Error("Invalid score: Please enter a numeric value");
    }

    // Determine grade
    if (score >= 90) {
        return `${name}: Excellent`;
    } else if (score >= 75) {
        return `${name}: Good`;
    } else if (score >= 50) {
        return `${name}: Average`;
    } else {
        return `${name}: Fail`;
    }
}

// Example usage:
console.log(gradeStudent("John", 92)); // Output: John: Excellent
console.log(gradeStudent("Mary", 76)); // Output: Mary: Good
console.log(gradeStudent("Paul", 58)); // Output: Paul: Average
console.log(gradeStudent("Jane", 35)); // Output: Jane: Fail

// QUESTION 4Write a function that takes two boolean values: hasID and isAbove18. Return "Access granted" only if both are true.

// SOLUTION
function checkAccess(hasID, isAbove18) {
    if (hasID && isAbove18) {
        return "Access granted";
    } else {
        return "Access denied";
    }
}

// Example usage:
console.log(checkAccess(true, true));   // Output: Access granted
console.log(checkAccess(true, false));  // Output: Access denied

// QUESTION 5:Use a for loop to go through an array of student scores.For each score, print "Pass" if it’s above 50 or "Fail" if it’s 50 or below.

function checkScores(scores) {
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > 50) {
            console.log("Pass");
        } else {
            console.log("Fail");
        }
    }
}

// Example usage:
const studentScores = [45, 78, 56, 23, 91];
checkScores(studentScores);
// Output:
// Fail
// Pass
// Pass
// Fail
// Pass

// QUESTION 6:Write an arrow function that returns "Yes" if a student passed both Math and English (score ≥ 50), else "No".
// ANSWER

const checkPass = (mathScore, englishScore) => (mathScore >= 50 && englishScore >= 50) ? "Yes" : "No";

// Example usage:
console.log(checkPass(60, 70)); // Output: Yes
console.log(checkPass(40, 60)); // Output: No


// QUESTION 7: Create a function that checks if a user has either an email or a phone number before signing up.
// ANSWER
function checkUserDetails(email, phoneNumber) {
    if (email || phoneNumber) {
        return "Signup successful";
    } else {
        return "Signup failed: Email or phone number is required";
    }
}

// Example usage:
console.log(checkUserDetails("user@example.com", "")); // Output: Signup successful
console.log(checkUserDetails("", "123-456-7890"));     // Output: Signup successful
console.log(checkUserDetails("", ""));                 // Output: Signup failed: Email or phone number is required

// QUESTION 8: Write a function that takes username and password.If either one is empty, return "Invalid input" using the || operator.
//ANSWER

function validateLogin(username, password) {
    if (!username || !password) {
        return "Invalid input";
    } else {
        return "Login successful";
    }
}

// Example usage:
console.log(validateLogin("user123", "password123")); // Output: Login successful
console.log(validateLogin("", "password123"));        // Output: Invalid input
console.log(validateLogin("user123", ""));            // Output: Invalid input


// QUSTION 9: Write a function that accepts hours worked. If hours ≥ 40, return "Full-time", else "Part-time" using a ternary operator.
// ANSWER:

function checkEmploymentStatus(hoursWorked) {
    return hoursWorked >= 40 ? "Full-time" : "Part-time";
}

// Example usage:
console.log(checkEmploymentStatus(45)); // Output: Full-time
console.log(checkEmploymentStatus(30)); // Output: Part-time

// QUESTION 10: Write an arrow function that takes two numbers and returns the larger one.
//ANSWER

const getLargerNumber = (num1, num2) => (num1 > num2 ? num1 : num2);

// Example usage:
console.log(getLargerNumber(10, 20)); // Output: 20
console.log(getLargerNumber(30, 15)); // Output: 30



