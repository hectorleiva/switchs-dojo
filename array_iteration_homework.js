const message = [1, "Hey", false, 2, "Switch", true];

let finalMessage = "";

// For-loop iteration of an array
// for (let i = 0; i < message.length; i++) {
//   finalMessage = finalMessage + " " + message[i];
// }

// ForEach iteration of an array
// message.forEach(function (string) {
//   console.log("word: ", string);
//   console.log("word.length: ", string.length);
//   finalMessage = finalMessage + " " + string.length;
// });

// Filter iteration of an array
// const result = message.filter(function (word) {
//   if (word != "Hey") {
//     return true;
//   }
// });

// Filter the "message" array 3 different times.
// 1) I want only the strings to appear in a new array
// 2) I want only the booleans to appear in a new array
// 3) I want only the numbers to appear in a new array
//
// Example: const stringsOnlyArray = message.filter(() => .........)
//          const booleansOnlyArray = message.filter(() => ........)
//          ....
//          console.log(stringsOnlyArray);
//          console.log(booleansOnlyArray);

console.log(finalMessage);
