function add(x, y) {
    const firstNumber = x;
    const secondNumber = y;
    const total = firstNumber + secondNumber;
    return total;
}

add(2, 5)

function subtract(x, y) {
    const firstnumber = x;
    const secondNumber = y;
    const total = firstnumber - secondNumber;
    return total;
}

subtract(10,9)

function multiply (x, y) {
	const firstnumber = x;
	const secondnumber = y;
	const total = firstnumber * secondnumber;
	return total;
}

function divide (x, y) {
	const firstnumber = x;
	const secondnumber = y;
	const total = firstnumber / secondnumber;
	return total;
}

console.log(
    subtract(
        add(
            subtract(200,1),
            subtract(3,1)
        ), 1
    )
)
console.log(
subtract(99,9)
)
console.log(
multiply(5,5)
)
console.log(
divide(20,10)
)