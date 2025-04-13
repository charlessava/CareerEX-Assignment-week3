//this code calculates the answer of 2 to the power of
function indexCalculator(number, index) {
    counter = 0;
    beginner = number;
    while (counter <= index - 1) {
        number = number * beginner
        counter++;
    }
    console.log(`the answer to ${beginner} raised to the power of ${index} is ${number / beginner}`)
};

indexCalculator(0, 2)