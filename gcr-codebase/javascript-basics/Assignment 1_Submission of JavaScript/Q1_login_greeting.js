// Q1. Personalized Login Greeting

const userName = "Vanshika";
const currentHour = new Date().getHours(); // 0 - 23

let greeting;

if (currentHour < 12) {
  greeting = `Good Morning ${userName}!`;
} else if (currentHour <= 17) {
  greeting = `Good Afternoon ${userName}!`;
} else {
  greeting = `Good Evening ${userName}!`;
}

console.log(greeting);