// // The 'sumUp' function takes in 2 numbers, adds them up and displays the result

// function sumUp(num1 = 0, num2 = 0) {
//     let result = num1 + num2;

//     console.log(Number(result))
// };

// sumUp(4, 7);


// A function that prints the day of the week coresponding to the day's number
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Please key in numbers 1 to 7");
    }
}

getDayName(6)