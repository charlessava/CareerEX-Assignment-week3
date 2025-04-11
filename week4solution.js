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

