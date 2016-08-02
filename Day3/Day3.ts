/*
//Class (3 memebers: Method, fields, and properties)
class Product {
  name: string;
  price: number;
  calculateTax() {
    return this.price * 0.08;
  }
}

//This is one way
let product1 = {
  name: 'Tesla',
  price: 780987,
  calculateTax() {
  return this.price * 0.08;
};


//But this allows you to use calculateTax by product1.calculateTax()
let product1 = new Product();
product1.name = 'Tesla';
product1.price = 780987;


let product2 = {
  name: 'Milk',
  price: 9,
  calculateTax() {
  return this.price * 0.08;
  }
};

let product3 = {
  name: 'Eggs',
  price: 2.99,
  calculateTax() {
    return this.price * 0.08;
  }
};
*/





/*
//Using constructors (Most effcient method, sets parameters)
//Publice and private
class Product {
  //name: string;
  //price: number;
  calculateTax(stateName:string) {
    return this.price * 0.08;
  }

  constructor(public name: string, private price: number = 999){
    //this.name = name;
    //this.price = price;
  }
}



//let product1 = new Product('Tesla', 8909808);
*/








/*
//abstract classes
abstract class Car {
    public model: string;
    public price: number;
}
class NewCar extends Car {
}

class UsedCar extends Car {

    public totalMiles: number;
}
class CertifiedUsedCar extends UsedCar {

    public yearsWarranty: number;
}

let carToSell = new CertifiedUsedCar

/*class NewCar {
  public model: string;
  public price: number;
}

class UsedCar {
  public model: string;
  public price: number;
  public totalMiles: number;
}

class CertifiedUsedCar {
  public model: string;
  public price: number;
  public totalMiles: number;
  public yearsWarranty: number;
}
*/






/*
interface INameable {
  name: string;
  doSomething(message:string){
  }
}

class Hammer implements INameable {
  name: string;
  weight: number;
  doSomething(bob:string){

  }
}

class Hamster implements INameable {
  name: string;
  age: number;
  doSomething(bob:string){

  }
}

class Computer {
  operatingSystem: string;
}

function printProductName(thing:INameable){
  console.log(thing.name);
}

let tuxi = new Hamster();
tuxi.name = 'Tuxi';
printProductName(tuxi);



let hammer = new Hamster();
tuxi.name = 'sledgehammer';
printProductName(hammer);

//Iheritance vs Interface
*/






/*
//Example of proper interface use
interface IProduct {
  name: string;
  price: number;
}

class Fruits implements IProduct{
  constructor(public name: string, public price: number, public color: string){

  }
}

class Telephones implements IProduct{
  constructor(public name: string, public price: number, public loudness: number){

  }
}

function showInventory(store: IProduct){
  console.log(`${store.name} ${store.price}`);
}

let inventory = [
  new Fruits ('Apple', 3.21, 'Green'),
  new Fruits ('Mango', 4.00, 'Orange'),
  new Telephones ('Cell', 10.54, 9),
  new Telephones ('Work', 15.52, 5)
];

for (let show of inventory){
  showInventory(show);
}
*/






/*
(function() {
  function doSomething() {
    console.log("something");
  }

  doSomething();


})();

function doSomething() {
  console.log("something");
}


(function(){


  function doSomething() {
    console.log("something else");
  }


  doSomething();

})
*/






/*
//NameSpace
namespace First {
  export function doSomething() {
    console.log("something");
  }

  doSomething();
}


First.doSomething();


namespace Second {
  export function doSomething() {
    console.log("something else");
  }


  doSomething(); //Auto Run!!!

}
*/






/*
namespace MathUtility {
  export class Calculator {
      addition(a:number, b:number){
      return a + b;
    }

    subtraction(a:number, b:number){
      return a - b;
    }
  }
}



namespace MyApp {
  export function Calculator(){
  let calc = new MathUtility.Calculator();
  let res = calc.addition(1, 2);
  console.log(res);
  }
}

MyApp.Calculator();
*/






/*
class Product {
  private _price: number;

  public get price() {
    return Math.floor(this._price);
  }

  public set price(value){
    if (value < 0) {
      throw new Error('Oh hell naw')
    }
    this._price;
  }
}


let product1 = new Product();
product1.price = -600.98;
*/


//A way to split your code into multiple files, all the test files
