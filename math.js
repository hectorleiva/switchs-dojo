function add(x, y) {
    const firstNumber = x;
    const secondNumber = y;
    const total = firstNumber + secondNumber;
    return total;
}

add(2, 5)

function subtract(x, y){
    const firstnumber = x;
    const secondNumber = y;
    const total = firstnumber - secondNumber;
    return total;
}

subtract(10,9)
console.log(
    subtract(
        add(
            subtract(200,1),
            subtract(3,1)
        ), 1
    )
)
subtract(99,9)