let input1, input2, operator;

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
  input2 ? (input2 *= -1) : (input1 *= -1);
};

const hundreds = () => {
  input2 ? (input2 /= 100) : (input1 /= 100);
};

const resetCalc = () => {
  input1 = "";
  input2 = "";
  operator = "";
};

// Evaluation function
const evalCalc = () => {
  let result;
  if (operator === "+") {
    result = add(input1, input2);
  } else if (operator === "-") {
    result = subtract(input1, input2);
  } else if (operator === "*") {
    result = multiply(input1, input2);
  } else if (operator === "/") {
    result = divide(input1, input2);
  }
  resetCalc();
  input1 = result;
};

// Event Handlers
const handleOperandClick = (event) => {
  let number = Number(event.target.textContent);
  input1 ? (input2 = number) : (input1 = number);
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
