class Vehicle {
    //constructor
    constructor(model, engine) {
        this.model = model;
        this.engine = engine;
    }

    //methods
    toString() {
        return `
                Vehicle Info
            Mode  : ${this.model}
            Engine: ${this.engine}
        `
    }
}

module.exports = Vehicle;