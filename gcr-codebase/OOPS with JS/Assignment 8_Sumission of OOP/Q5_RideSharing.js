class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicleDetails) {
    super(name, rating);
    this.vehicleDetails = vehicleDetails;
  }
}

class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distance = distance;
  }

  calculateFare() {
    if (this.distance === undefined || this.distance === null) {
      throw new Error("Distance is not provided");
    }
    if (this.distance < 0) {
      throw new Error("Distance cannot be negative");
    }
    const baseFare = 50;
    const perKm = 12;
    return baseFare + this.distance * perKm;
  }
}

const driver = new Driver("Suresh", 4.8, { model: "Swift Dzire", number: "HR26AB1234" });
console.log(`Driver: ${driver.name}, Rating: ${driver.rating}, Vehicle: ${driver.vehicleDetails.model}`);

const trips = [
  new Trip("Faridabad", "Delhi", 30),
  new Trip("Delhi", "Noida", -5),
  new Trip("Noida", "Gurgaon"),
];

trips.forEach((trip) => {
  try {
    console.log(`${trip.fromLocation} -> ${trip.toLocation}: Fare = Rs.${trip.calculateFare()}`);
  } catch (error) {
    console.log(`Error for ${trip.fromLocation} -> ${trip.toLocation}: ${error.message}`);
  }
});