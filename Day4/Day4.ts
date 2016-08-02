/*
//The ficklesness of this

let counter = {

    _count:0,

    addCount() {
      this._count ++;
      console.log(this._count);
    }
}

counter.addCount();

window.setInterval(() => {counter.addCount()}, 1000);
*/






/*
class Timer {

  public totalSeconds = 0;

  public start() {
    let that = this;
    window.setInterval(function(){
      that.totalSeconds ++;
      console.log(that.totalSeconds);
    }, 1000);
  }
}

let timer1 = new Timer();
timer1.start();
*/






/*
//Lab 1
class WeatherService {
   public weatherData;

   public getWeather(callback) {
       let that = this;
       let url = `http://api.openweathermap.org/data/2.5/weather?API=&APPID=d43debb0b9a3919fef3f0f689e82583e&q=${this.city}`;
       let request = new XMLHttpRequest();
       request.addEventListener('load', function() {
           // parse weather data from Ajax call
           that.weatherData = JSON.parse(request.responseText);
           // invoke callback to notify that we are done
           callback();
       })
       request.open('GET', url);
       request.send();
   }

   constructor(private city: string) { }
}

// create instance of weather service for Seattle
let service = new WeatherService('Seattle');

// invoke the service to get weather data for Seattle
service.getWeather(() => {
   console.log(service.weatherData);
});
*/






/*
//Closure (IMPORTANT FOR INTERVIEW QUESTIONS)
//An expression (usually a function) that can have free variables
//together with an environment that binds those variables
//("closes" the expressiong)
//"lexical scope (global, local, or block scopes)"

//Playing with a in different scopes
// let a = 1;
//
// function doSomething(){
//   console.log(a);
// }
//
// function doSomethingElse(){
//   let a = 2;
//   doSomething();
// }
//
//
// doSomethingElse();
//
// console.log(a);


//Example of Closure
function createFunction() {
  let a = 1;
  return () => {
    a++;
    console.log(a);
  }
}

let doSomething = createFunction();

doSomething();
doSomething();
doSomething();
*/






/*
//Curry function
function generate(customerName) {
  return function (productName) {
    console.log(`Dead ${customerName}, thank you for your positive review of out ${productName}`)
  }
}

let bobTemplateEmail = generate('Bob');
bobTemplateEmail('Coffee Maker');
bobTemplateEmail('Toaster');

let sallyTempleteEmail = generate('Sally');
sallyTempleteEmail('Coffee Maker');
sallyTempleteEmail('Toaster');
*/
