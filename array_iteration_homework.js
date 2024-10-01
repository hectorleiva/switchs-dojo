//const message = [1, "Hey", false, 2, "Switch", true];

//let finalMessage = "";

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

const message = [`Aww Yeah`,`Bugatti`,3,5,true,false,7,8,false,`Hooray`,true]
const stringsOnlyArray = message.filter((word) => word.length >0 );
const booleansOnlyArray = message.filter((boolean) =>boolean <=1 );
const numbersonlyArray = message.filter((number) =>number >=2);
console.log(stringsOnlyArray,'\n',booleansOnlyArray,'\n',numbersonlyArray);
