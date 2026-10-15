// Q10. Citizen Eligibility Validator

const age = 19;
const isCitizen = true;

// "All services" is checked for age 21+ so that the
// "vote only" case (citizen aged 18-20) can actually be reached.
if (isCitizen) {
  if (age >= 21) {
    console.log("Eligible for all services.");
  } else if (age >= 18) {
    console.log("Eligible to vote only.");
  } else {
    console.log("Not eligible yet.");
  }
} else {
  if (age >= 18) {
    console.log("Only age criteria met.");
  } else {
    console.log("Not eligible yet.");
  }
}