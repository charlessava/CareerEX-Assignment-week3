// a function that checks the voting eligibility of individual based on age

function eligibilityChecker(age) {
    // validate data type
    if (typeof age !== "number" || isNaN(age)) {
        throw new Error("invalid input:Please input a number")
    }
    // validate acceptable age
    if (age < 0 || age > 120) {
        throw new Error(`Unacceptable voting age: Please ${age} is not societally eligible to vote`)
    }
    const year = age >= 18 ? "You are eligible to vote" : "Not eligible"
    return year;
}

try {
    const age = 7
    eligibilityChecker(age)
} catch (error) {
    console.error(error.message)

}