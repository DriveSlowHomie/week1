/*
let doSomething = function(){
  console.log('hi')
}
*/



/*
function printwarning(message = "something horrible"){
  console.warn(message);
}

printwarning('eeeks!');

printwarning();
*/



/*
function calculateTax(money:number, tax:number = 0.08){
  let total = money * tax;
  return total;
}

let result1 = calculateTax(12.44);

let result2 = calculateTax(12.44, 0.09);

console.log(result1 + " " + result2);
*/



/*
let btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  alert('hi')
});

let func1 = (a,b) => a+b;

let func2 = (a,b) => {
  return a + b;
};

let result = func2(2,3);
*/



/*
let product1:any = {
  price: 2.33,
  name: "Milk"
};

let product2:any = {};

product2['someProp'] = "purple";
product2.someProp = 'purple'

product1.SomeNewProp = "blue";

product1.price = 344.55;

console.log(product1.price);
*/



/*
let product1 = {
  price: 2.33,
  name: "Milk",
  calculateTax: function() {
    return this.price = 0.08;
  }
};

console.log(product1.calculateTax());
*/



/*
//sparse array, 2 objects in
let products = [];

products[0] = 'tesla';

products[500] = 'cheese';

//501
console.log(products.length);

for (let key in products) {
  console.log(key);
}
*/



/*
let products = [
  "tesla",
  "apples",
  "peanuts"
];

//Popular Way
for (let i=0; i <products.length; i++) {
  console.log(products[i]);
}

//New Way
for (let product of products) {
  console.log(product);
}

//for next == index

//for..in == get all of the keys in a collection

//for..of == display the keys
*/



/*
let genres = [
   { name: 'SciFi', movies: ['Star Wars', 'Ex Machina'] },
   { name: 'Action', movies: ['Die Hard'] },
   { name: 'Drama', movies: ['The Godfather', 'Braveheart'] }
];

//My Solution
for (let genre of genres) {
  console.log("genre", genre);
  }

//Another Way
for(let genre1 of genres){
   console.log(genre1.name);
  for(let movie1 of genre1.movies){
     console.log("-"+ movie1);
   }
 }
*/



/*
let products = [
  {name: 'Tesla', price: 230000},
  {name: 'BMW', price: 230000},
  {name: 'Honda', price: 12}
];


//Short way
let expensiveProducts = products.filter(function(p) {
  return p.price > 15.00;
});

//Long way
let expensiveProducts2 = [];
for (let product of products) {
  if (product.price > 15) {
    expensiveProducts2.push(product);
  }
}

console.dir(expensiveProducts)
*/

/*
let message1 = 'hello world';

let message2 = "hello world";

let message3 = `hello world`;


let message4 = 'hello world ${message3}!';
*/



/*
let reverse = (str:string) => str.split('').reverse().join('');
let myString = "What is the airspeed velocity of an unladen swallow?";

console.log(`${myString} reversed is: ${reverse(myString)}`);
*/



/*
let img = <HTMLImageElement>document.getElementById('tesla');

img.src = "http://i.cdn.turner.com/adultswim/big/video/auto-erotic-assimilation/rickandmorty_ep203_003_t8syes_1.jpg"
*/


let form = <HTMLInputElement>document.getElementById("myForm");
form.addEventListener('submit', function(e){
  e.preventDefault();
  let inputField = <HTMLInputElement>document.getElementById("name");

  let myName = inputField.value;
  let myNameResult = <HTMLInputElement>document.getElementById("name-result");
  myNameResult.innerHTML = myName;
});
