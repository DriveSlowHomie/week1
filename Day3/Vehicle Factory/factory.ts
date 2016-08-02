
let btn = document.getElementById('button');
let array = [];


//Set up an interface
interface IVehicles {
  feature1: string;
  feature2: string;
  feature3: string;
}


//class for each type
class Car implements IVehicles {
  constructor(public feature1: string, public feature2: string, public feature3: string){
  }
}

class Truck implements IVehicles {
  constructor(public feature1: string, public feature2: string, public feature3: string){
  }
}

class Motorcycle implements IVehicles {
  constructor(public feature1: string, public feature2: string, public feature3: string){
  }
}

class Boat implements IVehicles {
  constructor(public feature1: string, public feature2: string, public feature3: string){
  }
}

//Set an array with values for each class
let features = [
  new Car ('Fancy lvl 1', 'Fancy lvl 2', 'Fancy lvl 3'),
  new Truck ('Tow lvl 1', 'Tow lvl 2', 'Tow lvl 3'),
  new Motorcycle ('Speed lvl 1', 'Speed lvl 2', 'Speed lvl 3'),
  new Boat ('Power lvl 1', 'Power lvl 2', 'Power lvl 3')
];

//uhhhhhhh....
function pick (type: IVehicles){
  return `${type.feature1} ${type.feature2} ${type.feature3}`;
}


//Want to set so when user picks a 1st drop down option, you display the correct list for 2nd drop down


//function to push selected drop down values to the array


//press button to grab picked values and set to array
btn.addEventListener('click', (e) => {
  e.preventDefault;
  let userInput = document.getElementById('li').id
  //function to push selected value to array
  console.log(array);
})


// This is an application where users can order a vehicle and customize it to their liking.
// Users should be able to pick a vehicle type they would like to order. (i.e. Car, Truck, Motorcycle, Boat, etc...)
// Each vehicle type should have different properties. (i.e. Truck may have a towing capacity property.  Boat may have number of engines property, etc..)
// All vehicle type should inherit from the vehicle class. (Utilize OOP as much as possible).
// Once the user has picked a customized vehicle, it should save it in the array.
// Application must be somewhat presentable.
