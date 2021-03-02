// two ways to create object
/*const vehicle = {
    model : 'Toyota',
    engine : 6,
    toString(){
        return `
                Vehicle Info
            Mode  : ${this.model}
            Engine: ${this.engine}
        `
    }
}

vehicle.color = 'Black'  //error property does not exot
console.log(vehicle.color)
*/

const Bus = require("./model/Bus");
const Truck = require("./model/Truck");
const ShowRoom = require("./model/ShowRoom");

let bus = new Bus('TATA' , 12 , 90);
let truck = new Truck('VOLVO' , 12 , 1500)

let vehicles = [bus, truck]

let showRoom = new ShowRoom(vehicles);
console.log(showRoom.vehicles)

let truck2 = new Truck('VOLVO' , 12 , 1500)

showRoom.addVehicles(truck2)
console.log(showRoom.vehicles)