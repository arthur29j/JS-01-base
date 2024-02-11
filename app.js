/* Acceptable variable names

// let $ = 'test';
// let $num = 100;
// let num$ = 10000;

// let _ = 'test';
// let _num = 69;
// let num_ = 6969;

// let my_name = 'Elena'; // not recommended
// let myName = 'Josh';   // recommended
*/

/* Restricted

// let 42num = 1;
// let my-name = 'Ethan';
// let const = 1;
*/

/* Console output and alerts

// alert(firstName) // Display an alert
// console.log('Test: ', num) // Console output
*/



/* -------- Constants -------- */
// Input fields
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')

// Output field
const resultElement = document.getElementById('result')

// Plus and minus buttons
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const mulBtn = document.getElementById('multiplication')
const divisionBtn = document.getElementById('division')

// Calculate button
const submitBtn = document.getElementById('submit')



/* -------- Variables -------- */
let action = '+'
// let cleanTheField = true



/* -------- Functions -------- */
// Clearing input1 field on click
// input1.onclick = function () {
//     if (cleanTheField) {
//         input1.value = ''

//         // Only if another input field is empty, cleanTheField is making false
//         if (input2.value == '') {
//             cleanTheField = false
//         }
//     }
// }

// Clearing input2 field on click
// input2.onclick = function () {
//     if (cleanTheField) {
//         input2.value = ''

//         // Only if another input field is empty, cleanTheField is making false
//         if (input1.value == '') {
//             cleanTheField = false
//         }
//     }
// }

// Plus button
plusBtn.onclick = function () {
    action = '+'
}

// Minus button
minusBtn.onclick = function () {
    action = '-'

}

// Multiplication button
mulBtn.onclick = function () {
    action = '*'

}

// Division button
divisionBtn.onclick = function () {
    action = '/'

}

// Defining output color
function printResult(result) {
    if (result > 0) {
        resultElement.style.color = 'green'
    } else if (result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'blue'
    }

    resultElement.textContent = result
}

// Computing numbers
function computeNumbers (inp1, inp2, actionChar) {
    const number1 = Number(inp1.value)
    const number2 = Number(inp2.value)

    if (actionChar === '+') {
        return number1 + number2
    } else if (actionChar === '-') {
        return number1 - number2
    } else if (actionChar === '*') {
        return number1 * number2
    } else if (actionChar === '/') {
        return number1 / number2
    }
}

// Submit button
submitBtn.onclick = function() {
    const calculation = computeNumbers(input1, input2, action)

    printResult(calculation)

    // If the calculating was succesful, clearing input fields on click is again acceptable
    // cleanTheField = true
}