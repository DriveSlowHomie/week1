/*
//promise example
// let p = new Promise((resolve, reject) => {
//   //deferred and asynchronous computations go here
//   resolve('success!');
//   reject('failure!');
// });
//
// p.then((result) => {
//   console.log(result);
// }).catch((result) => {
//   console.log(result);
// });


// this method returns products in 1 and 1/2 seconds
function getProducts() {
 return new Promise((resolve, reject) => {
   window.setTimeout(
     function() {
       if (Math.random() >= 0.5) {
         resolve(['Tesla', 'Apples', 'Oranges', 'Macbook Pro']);
       } else {
         reject('Network error!');
       }
     }, 1500
   );
 })
}

getProducts().then((result) => {
  console.log(result);
}).catch((result => {
  console.log(result);
}))
*/






//throw Errors so other coders don't misuse it
// function addIntegers(a:number, b:number) {
//   if (Math.floor(a) !==a) {
//     throw new Error('Only intergers please!')
//   }
// }
//
// addIntegers(1, 3)


//Try, Catch, Finally
// try {
// throw new Error(`Yikes! Don't do that`);
// } catch (ex){
//   console.log("Do you not understand intergers!?")
// } finally {
//   console.log("Always runs")
// }


function addWholeNumber(a:number, b:number){
  if (Math.floor(a) !== a || Math.floor(b) !== b) {
    throw new Error('Only numbers!')
  }
  if (Math.abs(a) !== a || Math.abs(b) !== b) {
    throw new Error('Only postive numbers!')
  }
  let result:number = a + b;
  return result;
}
