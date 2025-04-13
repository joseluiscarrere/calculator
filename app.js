//functions representing the basic math operations of a calculator
function add(x, y) {
    return x + y
}
function subtract(x, y) {
    return x - y
}
function multiply(x, y) {
    return x * y
}
function divide(x, y) {
    return x / y
}
//variables representing operator and operands used for calculation
let firstNum;
let oprtr;
let secondNum;
let result;
//function that takes two operands and an operator and calls one of the above functions depeding on the operator
function operate(num1, op, num2) {
    if (op === "+") {
        return add(num1, num2);
    } else if (op === "-") {
        return subtract(num1, num2);
    } else if (op === "*") {
        return multiply(num1, num2);
    } else if (op === "/") {
        return divide(num1, num2);
    }
}
//JS Objects representing HTML elements in the DOM
const display = document.querySelector("#display")
const buttons = document.querySelectorAll("button")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const evaluate = document.querySelector("#evaluate")
const clear = document.querySelector("#clear")
//for of loop that iterates over all number buttons and adds an event listener which upon a user click will populate the display with a number before and after the operator button is selected **
for (let number of numbers) {
    number.addEventListener("click", (e) => {
        if (display.innerText !== "Error") {
            if (!oprtr) {
                if (!firstNum) {
                    display.innerText = ""
                }
                display.innerText += e.target.innerText
                firstNum = display.innerText
            } else if (oprtr) {
                if (!secondNum) {
                    display.innerText = ""
                }
                display.innerText += e.target.innerText
                secondNum = display.innerText
            }
        }
    }
    )
}
// for of loop that iterates over all operator buttons and adds an event listener which upon a user click will assign the value of that operator button to the oprtr variable **
for (let operator of operators) {
    operator.addEventListener("click", (e) => {
        if (firstNum) {
            if (!secondNum) {
                oprtr = e.target.innerText;
            } else if (oprtr === "/" && secondNum === "0") {
                display.innerText = "Error"
                firstNum = undefined;
                oprtr = undefined;
                secondNum = undefined;
                result = undefined;
            } else if (secondNum || result) {
                firstNum = operate(parseFloat(firstNum), oprtr, parseFloat(secondNum))
                if (firstNum % 1 !== 0) {
                    firstNum = firstNum + ""
                    const decimal = firstNum.split(".")[1]
                    if (decimal.length > 10) {
                        firstNum = parseFloat(firstNum).toFixed(10)
                        firstNum = parseFloat(firstNum)
                    }
                }
                display.innerText = firstNum
                secondNum = undefined;
                oprtr = e.target.innerText
            }
        }
    }
    )
}
//Event Listener for evaluate button which upon user click will call the operate function on the first number, operator, and second number which were input into the calculator **
evaluate.addEventListener("click", () => {
    if (firstNum && oprtr && secondNum) {
        if (oprtr === "/" && secondNum === "0") {
            display.innerText = "Error"
            firstNum = undefined;
            oprtr = undefined;
            secondNum = undefined;
            result = undefined;
        } else {
            display.innerText = ""
            result = operate(parseFloat(firstNum), oprtr, parseFloat(secondNum));
            if (result % 1 !== 0) {
                result = result + ""
                const decimal = result.split(".")[1]
                if (decimal.length > 10) {
                    result = parseFloat(result).toFixed(10)
                    result = parseFloat(result)
                }
            }
            result = result + ""
            display.innerText = result;
        }
    }
})
//Event Listener for clear button which upon user click will reset the calculator by clearing the values for all variables as well as clearing the display*
clear.addEventListener("click", () => {
    display.innerText = "0000";
    firstNum = undefined;
    oprtr = undefined;
    secondNum = undefined;
    result = undefined;
})























































// FAILED CODE


// numberCompute();
// firstNum = displayNumber;
// operatorCompute();
// operator = displayOperator;
// numberCompute();
// secondNum = displayNumber;


// function numberPopulate(e) {
//     if (display.innerText === "0000") {
//         display.innerText = "";
//     }
//     display.innerText += e.target.innerText
//     // displayNumber = display.innerText;
//     // return displayNumber;
// }


// function operatorPopulate(e) {
//     display.innerText = "";
//     display.innerText = e.target.innerText
// }




// for (let number of numbers) {
//     number.addEventListener("click", numberPopulate)
// }

// for (let operator of operators) {
//     operator.addEventListener("click", operatorPopulate)
// }









// for (let button of buttons) {
//     button.addEventListener("click", function (e) {

//         while (e.target === button.number) {
//             console.log("number")
//             while (display.innerText === "0000") {
//                 display.innerText = "";
//             }
//             const displayValue = e.target.innerText;
//             display.innerText += displayValue;
//         }
//     }
//     )
// }















