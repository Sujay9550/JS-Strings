"use strict";

// Strings Part - 1

// To get the individual element in the string
const car = "Lamborghini";
console.log(car[0]); // Result - L

// To get the length of the string
console.log(car.length); // Result - 11

// Strings Methods - 1

// To get the index value of a letter
console.log(car.indexOf("m")); // Result - 2

// To get the lastindex value of a letter
console.log(car.lastIndexOf("b")); // Result - 3

// To get the occurence of the word
const car1 = "Lamborghini Aventador";
console.log(car1.indexOf("Lamborghini")); // Result - 0 (as L in Lamborghini starts at index position 0)
console.log(car1.indexOf("Aventador")); // Result - 12 (as A in Aventador starts at index position 12)

// Slice Methods
const car2 = "Chevrolet Camaro";
console.log(car2.slice(4)); // Result - rolet Camaro (as index value 4 is the starting parameter)
console.log(car2.slice(10)); // Result - Camaro (as index value 10 is the starting parameter)
console.log(car2.slice(4, 9)); // Result - rolet (4 is starting parameter, 9 is the end parameter which will not be included in the result)
console.log(car2.slice(11, 15)); // Result - amar (11 is starting parameter, 15 is the end parameter which will not be included in the result)

// Slice Methods with Negative counting
const car3 = "Koenigsegg Regera";
console.log(car3.slice(-1)); // Result - a
console.log(car3.slice(-2)); // Result - ra
console.log(car3.slice(-3)); // Result - era
console.log(car3.slice(1, -1)); // Result - oenigsegg Reger
console.log(car3.slice(0, -7)); // Result - Koenigsegg
console.log(car3.slice(-6, -1)); // Result - Reger

// Example
// Create a function to check the seating arrangements in a flight whether its a middle or side seat

const checkSeatArrangement = (seat) => {
  let check = seat.slice(-1);
  if (check === "B" || check === "E") {
    console.log(`Your seat no: ${seat} is a middle one`);
  } else {
    console.log(`Your seat no: ${seat} is a side one`);
  }
};

checkSeatArrangement("22B");
checkSeatArrangement("25E");
checkSeatArrangement("28G");
