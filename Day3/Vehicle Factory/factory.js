var btn = document.getElementById('button');
var array = [];
var Car = (function () {
    function Car(feature1, feature2, feature3) {
        this.feature1 = feature1;
        this.feature2 = feature2;
        this.feature3 = feature3;
    }
    return Car;
}());
var Truck = (function () {
    function Truck(feature1, feature2, feature3) {
        this.feature1 = feature1;
        this.feature2 = feature2;
        this.feature3 = feature3;
    }
    return Truck;
}());
var Motorcycle = (function () {
    function Motorcycle(feature1, feature2, feature3) {
        this.feature1 = feature1;
        this.feature2 = feature2;
        this.feature3 = feature3;
    }
    return Motorcycle;
}());
var Boat = (function () {
    function Boat(feature1, feature2, feature3) {
        this.feature1 = feature1;
        this.feature2 = feature2;
        this.feature3 = feature3;
    }
    return Boat;
}());
var features = [
    new Car('Fancy lvl 1', 'Fancy lvl 2', 'Fancy lvl 3'),
    new Truck('Tow lvl 1', 'Tow lvl 2', 'Tow lvl 3'),
    new Motorcycle('Speed lvl 1', 'Speed lvl 2', 'Speed lvl 3'),
    new Boat('Power lvl 1', 'Power lvl 2', 'Power lvl 3')
];
function pick(type) {
    return type.feature1 + " " + type.feature2 + " " + type.feature3;
}
btn.addEventListener('click', function (e) {
    e.preventDefault;
    var userInput = document.getElementById('li').id;
    console.log(array);
});
