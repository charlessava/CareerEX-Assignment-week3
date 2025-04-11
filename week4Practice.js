// // The 'sumUp' function takes in 2 numbers, adds them up and displays the result

// function sumUp(num1 = 0, num2 = 0) {
//     let result = num1 + num2;

//     console.log(Number(result))
// };

// sumUp(4, 7);


// A function that prints the day of the week coresponding to the day's number
// function getDayName(dayNumber) {
//     switch (dayNumber) {
//         case 1:
//             console.log("Monday");
//             break;
//         case 2:
//             console.log("Tuesday");
//             break;
//         case 3:
//             console.log("Wednesday");
//             break;
//         case 4:
//             console.log("Thursday");
//             break;
//         case 5:
//             console.log("Friday");
//             break;
//         case 6:
//             console.log("Saturday");
//             break;
//         case 7:
//             console.log("Sunday");
//             break;
//         default:
//             console.log("Please key in numbers 1 to 7");
//     }
// }

// getDayName(6)

//this function grades students score from A to f
function gradeStudent(score) {
    // validate input
    if (typeof score !== "number" || isNaN(score)) {
        throw new Error("invalid input: input a valid number");
    }
    // check if score is outside range
    if (score < 0 || score > 400) {
        throw new Error("INVALID NUMBER RANGE:INPUT A VALUE FROM 0 TO 100");
    }
    const grade = score >= 180 ? "passed" : "failed";
    return grade

    try {
        const score = 300;
        const grade = gradeStudent(score);
        console.log(`Score $`)
    } catch (error) {
        console.error(error.message);
    }





//     let score = ;
//     switch (score) {
//         case score >= 90, score <= 100:
//             score = "A";
//             break;
//         case score >= 80, score <= 89:
//             score = "B";
//             break;
//         case score >= 70, score <= 79:
//             score = "C";
//             break;
//         case score >= 60, score <= 69:
//             score = "D";
//             break;
//         case score >= 50, score <= 59:
//             score = "E";
//             break;
//         case score <= 49 || score >= 0:
//             score = "F";
//             break;
//         default:
//             prompt("input value between 0 to 100");
//             break;
//     }
//     console.log(score)
// }

