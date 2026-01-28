/*
 * Prime numbers are natural numbers greater than 1 that have no positive divisors other than 1 and
 * themselves. For instance, 2 can only be divided evenly by 1 and 29,
 * making it a prime number. Other common examples include 29 3, 5, 7, 11, and 13.
 */

//? Prompt the user to enter a number

let userNumber = prompt("Enter a number of your choosing: ");

//? let's keep track if the number provided is prime
let isPrime = true;

if (userNumber <= 1) {
  isPrime = false;
} else if (userNumber == 2) {
  isPrime = true;
} else if (userNumber % 2 === 0) {
  isPrime = false;
} else {
  for (let i = 3; i <= Math.sqrt(userNumber); i += 2) {
    if (userNumber % i === 0) {
      isPrime = false;
      break;
    }
  }
}

//? to print the result to the user
if (isPrime) {
  alert(`${userNumber} is a prime number.`);
} else {
  alert(`${userNumber} is not a prime number.`);
}
