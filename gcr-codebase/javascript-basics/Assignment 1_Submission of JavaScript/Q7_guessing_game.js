// Q7. Smart Guessing Game (Number Range)

const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 25; // test value

console.log("Secret Number (for testing): " + secretNumber);
console.log("Your Guess: " + userGuess);

if (userGuess === secretNumber) {
  console.log("Correct guess!");
} else {
  if (Math.abs(userGuess - secretNumber) <= 3) {
    console.log("Very close!");
  } else {
    if (userGuess > secretNumber) {
      console.log("Too high");
    } else {
      console.log("Too low");
    }
  }
}