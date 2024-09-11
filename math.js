function add(x, y) {
  const firstNumber = x;
  const secondNumber = y;
  const total = firstNumber + secondNumber;
  return total;
}

add(2, 5);

function subtract(x, y) {
  const firstnumber = x;
  const secondNumber = y;
  const total = firstnumber - secondNumber;
  return total;
}

subtract(10, 9);

function multiply(x, y) {
  const firstnumber = x;
  const secondnumber = y;
  const total = firstnumber * secondnumber;
  return total;
}

function divide(x, y) {
  const firstnumber = x;
  const secondnumber = y;
  const total = firstnumber / secondnumber;
  return total;
}

const subtractionResultOne = subtract(add(subtract(200, 1), subtract(3, 1)), 1);
const subtractionResultTwo = subtract(99, 9);
const multiplicationResult = multiply(5, 5);
const divisionResult = divide(20, 10);
const divisionResultOne = divide(20, 20);
const divisionResultTwo = divide(20, 20);
const multiplicationResultTwo = multiply(5, 25);

const mathResults = [
  subtractionResultOne, // 200
  subtractionResultTwo, // 90
  multiplicationResult, // 25
  divisionResult,
  divisionResultOne,
  divisionResultTwo,
  multiplicationResultTwo,
];

mathResults.forEach(function printer(calculation) {
  console.log(`${calculation}\n;`);
});

// console.log(
//   `${subtractionResultOne}\n;\n${subtractionResultTwo}\n;\n${multiplicationResult}\n;\n${divisionResult}`,
// );

