let x = 0;
let y = 1;
let z;

function fibonacci(){
    console.log(x);
    console.log(y);
    for (let i = 2; i <=100; ++i){
      z = x + y;
      x = y;
      y = z;
      console.log(z);
    }
}
