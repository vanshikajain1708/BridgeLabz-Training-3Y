class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName;
    this.seatNo = seatNo;
    this.price = price;
  }
}

MovieTicket.prototype.printTicket = function () {
  console.log(`Movie: ${this.movieName} | Seat: ${this.seatNo} | Price: Rs.${this.price}`);
};

class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, convenienceFee) {
    super(movieName, seatNo, price);
    this.convenienceFee = convenienceFee;
  }

  getTotalAmount() {
    return this.price + this.convenienceFee;
  }
}

const ticket1 = new OnlineTicket("Inception", "A12", 300, 30);
const ticket2 = new OnlineTicket("Interstellar", "B07", 350, 40);

// printTicket() is found via prototype chain
ticket1.printTicket();
console.log("Total Amount:", ticket1.getTotalAmount());
ticket2.printTicket();
console.log("Total Amount:", ticket2.getTotalAmount());

console.log(ticket1.hasOwnProperty("printTicket"));
console.log(Object.getPrototypeOf(OnlineTicket.prototype) === MovieTicket.prototype);