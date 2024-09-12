// Multiples of 3: Fizz
// Multiples of 5: Buzz
// Multiples of 3 and 5: FizzBuzz
// Print every other number that
// doesn't match the above statements
// from 1 to 100

//set parameters, establish starting number, increase count until it reaches 100
for (let i = 1; i <= 100; i++) {
//if number is divisible by both 3 and also 5, display "Fizzbuzz"
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");	
  }
// else if number is divisble by 5, then display "Buzz"
  else if (i % 5 == 0) {
	  console.log("Buzz");
	  
  }
// else if number is divisble by 3, then display "Fizz"
  else if (i % 3 == 0) {
	  console.log("Fizz");
	  
  } 
// else if number is not divisible by 3 and also 5, then print number as usual
  else if (i % 3 !== 0 && i % 5 !== 0) {
	  (console.log (i));
  }
}