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

// Strings Part - 2

// String Methods - 2

// To change the case of the string to lower
console.log(car1.toLowerCase());

// To change the case of the string to upper
console.log(car1.toUpperCase());

// To change the case of the string to upper directly in the string
console.log("jOhNson".toUpperCase());

// First capitalization in the Word

const passenger = "jOhNson";
const passengerLower = passenger.toLowerCase();
console.log(passengerLower);
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing Emails

const actualEmail = "hello@example.com";
const loginEmail = " Hello@Example.Com";
const loginLower = loginEmail.toLowerCase();
console.log(loginLower);

const trimLoginLower = loginLower.trim(); // This will trim the blank space in the string
console.log(trimLoginLower);

const trimLoginEmail = loginEmail.toLowerCase().trim();
console.log(trimLoginEmail);

// Comparing actualEmail with the trimLoginEmail
console.log(actualEmail === trimLoginEmail); // Result - True

// Replacing

const priceGB = "288,97#";
const priceUS = priceGB.replace("#", "$").replace(",", ".");
console.log(priceUS);

const sentence = "Hello Jacob, welcome to this page Jacob";

// To replace only the first Jacob word in the sentence
const sentence1 = sentence.replace("Jacob", "Martin");
console.log(sentence1);

// To replace all the Jacob word in the sentence using regular function
const sentence2 = sentence.replace(/Jacob/g, "Martin");
console.log(sentence2);

// To replace all the Jacob word in the sentence using replaceAll Method
const sentence3 = sentence.replaceAll("Jacob", "Maxwell");
console.log(sentence3);

// Booleans

// includes method
const car4 = "Ford Mustang";
console.log(car4.includes("Ford")); // Result - True
console.log(car4.includes("Mustang")); // Result - True
console.log(car4.includes("mustang")); // Result - False (due to case sensitive)

// startsWith & endsWith method
console.log(car4.startsWith("F")); // Result - True
console.log(car4.startsWith("Ford")); // Result - True
console.log(car4.startsWith("f")); // Result - False (due to case sensitive)
console.log(car4.startsWith("Audi")); // Result - False
console.log(car4.endsWith("Mustang")); // Result - True
console.log(car4.endsWith("g")); // Result - True
console.log(car4.endsWith("tang")); // Result - True
console.log(car4.endsWith("M")); // Result - False

car4.startsWith("Ford") && car4.endsWith("Mustang")
  ? console.log("This car exists")
  : console.log("This car does not exitst");

// Function to check whether a passenger can borad a train with his luggage

const checkLuggage = (items) => {
  const luggage = items.toLowerCase();
  luggage.includes("knife") || luggage.includes("gun")
    ? console.log("You are not allowed to board")
    : console.log("Welcome");
};

checkLuggage("I have a knife, a book and a gun for safety");
checkLuggage("I have a food, book and some clothes");
