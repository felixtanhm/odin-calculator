let input1, input2, operator;
let display = document.querySelector("#display");

// Operator functions
const add = () => {
  return Number(input1) + Number(input2);
};

const subtract = () => {
  return Number(input1) - Number(input2);
};

const multiply = () => {
  return Number(input1) * Number(input2);
};

const divide = () => {
  return Number(input1) / Number(input2);
};

// Utility functions
const sign = () => {
  if (input2) {
    input2 *= -1;
    display.textContent = input2;
  } else {
    input1 *= -1;
    display.textContent = input1;
  }
};

const hundreds = () => {
  if (input2) {
    input2 /= 100;
    display.textContent = input2;
  } else {
    input1 /= 100;
    display.textContent = input1;
  }
};

const resetCalc = () => {
  input1 = "";
  input2 = "";
  operator = "";
  display.textContent = 0;
};

// Evaluation function
const evalCalc = () => {
  // Prevent division by 0
  if (input2 === 0 && operator === "/") {
    resetCalc();
    display.textContent = "👀 Don't do that";
    return;
  }
  let result;
  if (operator === "+") {
    result = add();
  } else if (operator === "-") {
    result = subtract();
  } else if (operator === "*") {
    result = multiply();
  } else if (operator === "/") {
    result = divide();
  }
  resetCalc();
  input1 = result;
  display.textContent = result;
};

// Event Handlers
const handleOperandClick = (event) => {
  let number = Number(event.target.textContent);
  input1 ? (input2 = number) : (input1 = number);
  display.textContent = number;
};

const handleOperatorClick = (event) => {
  if (input2) {
    evalCalc();
  }
  operator = event.target.value;
};

const handleUtilClick = (event) => {
  let util = event.target.value;
  if (util === "clear") resetCalc();
  else if (util === "sign") sign();
  else if (util === "hundreds") hundreds();
};

// Add event listeners to buttons
let operands = document.querySelectorAll(".operand");
operands.forEach((operand) => {
  operand.addEventListener("click", handleOperandClick);
});

let operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
  operator.addEventListener("click", handleOperatorClick);
});

let utilities = document.querySelectorAll(".util");
utilities.forEach((util) => {
  util.addEventListener("click", handleUtilClick);
});

document.querySelector("#equals").addEventListener("click", evalCalc);
document.querySelector("#decimal").addEventListener("click", evalCalc);
