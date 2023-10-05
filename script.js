let input1, input2, operator;

const add = (input1, input2) => {
  return Number(input1) + Number(input2);
};

const subtract = (input1, input2) => {
  return Number(input1) - Number(input2);
};

const multiply = (input1, input2) => {
  return Number(input1) * Number(input2);
};

const divide = (input1, input2) => {
  return Number(input1) / Number(input2);
};

const evalCalc = (input1, input2, operator) => {
  if (operator === "add") {
    add(input1, input2);
  } else if (operator === "subtract") {
    subtract(input1, input2);
  } else if (operator === "multiply") {
    multiply(input1, input2);
  } else if (operator === "divide") {
    divide(input1, input2);
  }
};

const assignOperator = (value) => {
  operator = value;
};
