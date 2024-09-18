// Manager wants us to figure out what the fib number is at step 100
// The fib sequence starts with 0 + 1 = 1
// every sequence after that is the last number + sum of the number added together
// e.g: 1 + 0 = 1
//          1 + 1 = 2
//              1 + 2 = 3
//                  2 + 3 = 5
//                      3 + 5 = 8
//      F(n) = F(n-1) + F(n-2)

function fibonacci(number_limit) {
  let a = 1;
  let b = 0;
  let temp;

  while (number_limit >= 0) {
    temp = a; // temp = 1    | temp = 1    | temp = 2    | temp = 3
    a = a + b; // a = (1 + 0)  | a = (1 + 1) | a = (2 + 1) | a = (3 + 2)
    b = temp; // b = 1         | b = 1       | b = 2       | b = 3
    number_limit--; // number_limit = 99
  }

  return b;
}

console.log(fibonacci(5));
