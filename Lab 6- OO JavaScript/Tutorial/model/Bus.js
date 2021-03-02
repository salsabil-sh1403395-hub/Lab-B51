const Vehicle = require("./Vehicle");

class Bus extends Vehicle {
    constructor(model, engine, noOfPassengers) {
        super(model, engine)
        this.noOfPassengers = noOfPassengers;
    }

    toString() {
        return `
        ${super.toString()}
            Passengers : ${this.noOfPassengers}
        `
    }
}

module.exports = Bus;