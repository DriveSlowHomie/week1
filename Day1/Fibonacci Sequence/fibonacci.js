var x = 0;
var y = 1;
var z;
function fibonacci() {
    console.log(x);
    console.log(y);
    for (var i = 2; i <= 100; ++i) {
        z = x + y;
        x = y;
        y = z;
        console.log(z);
    }
}
