let operand1 = "",
  operand2 = "",
  currentOperator = "";
let displayRefresh = true;
let display = document.querySelector("#display");

// currentOperator functions
const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

// Utility functions
const operate = () => {
  let firstNum = Number(operand1);
  let secondNum = Number(operand2);

  if (currentOperator === "+") {
    return add(firstNum, secondNum);
  } else if (currentOperator === "-") {
    return subtract(firstNum, secondNum);
  } else if (currentOperator === "*") {
    return multiply(firstNum, secondNum);
  } else if (currentOperator === "/") {
    return divide(firstNum, secondNum);
  }
};

const roundResult = (num) => {
  return Math.round(num * 100000000) / 100000000;
};

const resetCalculator = () => {
  operand1 = "";
  operand2 = "";
  currentOperator = "";
  displayRefresh = true;
  display.textContent = "0";
};

// Evaluation function
const evaluate = () => {
  if (currentOperator === "") return;
  if (operand2 === 0 && currentOperator === "/") {
    // Prevent division by 0
    resetCalculator();
    display.textContent = "Infinity 🚀 & beyond? 👀";
    return;
  }

  operand2 = display.textContent;
  let result = operate();

  resetCalculator();
  display.textContent = roundResult(result);
};

// Event Handlers
const handleOperandClick = (event) => {
  if (displayRefresh) {
    display.textContent = event.target.textContent;
    displayRefresh = false;
  } else {
    display.textContent = display.textContent + event.target.textContent;
  }
};

const handleOperatorClick = (event) => {
  if (currentOperator !== "") evaluate();
  operand1 = display.textContent;
  currentOperator = event.target.value;
  displayRefresh = true;
};

const handleUtilClick = (event) => {
  let util = event.target.value;
  if (util === "clear") resetCalculator();
  else if (util === "sign") {
    display.textContent = Number(display.textContent) * -1;
  } else if (util === "hundreds") {
    display.textContent = Number(display.textContent) / 100;
  }
};

const handleDecimal = () => {
  if (display.textContent.includes(".")) return;
  display.textContent = display.textContent + ".";
};

// Add event listeners to buttons
let operands = document.querySelectorAll(".operand");
operands.forEach((operand) => {
  operand.addEventListener("click", handleOperandClick);
});

let currentOperators = document.querySelectorAll(".operator");
currentOperators.forEach((currentOperator) => {
  currentOperator.addEventListener("click", handleOperatorClick);
});

let utilities = document.querySelectorAll(".util");
utilities.forEach((util) => {
  util.addEventListener("click", handleUtilClick);
});

document.querySelector("#equals").addEventListener("click", evaluate);
document.querySelector("#decimal").addEventListener("click", handleDecimal);
