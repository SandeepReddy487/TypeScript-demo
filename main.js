var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Number
var first = 12;
console.log(first);
var second = 0x37cf;
console.log(second);
// string
var name = "Sandeep Reddy";
console.log(name);
// Boolean
var number = true;
console.log(number);
// Array
var arr;
arr = [1, 2, 3, 4];
console.log("Array[0]:" + arr[0]);
console.log("Array[1]:" + arr[1]);
console.log(arr[2]);
// String
var uname = new String("Hello Vinod Kumar");
console.log(uname);
var Tuple = [101, "Sandeep Reddy", 7, "Divya"];
console.log(Tuple);
var greeter = "hey hi";
// var  
var times = 5;
if (times > 3) {
    var greeter = "Say Hello Typescript";
}
console.log(greeter);
// Function
function display() {
    console.log('Santhosh Reddy');
}
display();
var myAdd = function (x, y) {
    return x + y;
};
console.log(myAdd(5, 3));
function sum(a) {
    var b = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        b[_i - 1] = arguments[_i];
    }
    var result = a;
    for (var i = 0; i < b.length; i++) {
        result += b[i];
    }
    return result;
}
var result1 = sum(3, 5);
var result2 = sum(3, 5, 7, 9);
console.log(result1 + "\n" + result2);
// Arrow Function
var Sum = function (a, b) { return a + b; };
console.log("sum" + sum(5, 15, 25, 33, 44));
// Inheritance
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.eat = function () {
        console.log("Eating");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("Barking");
    };
    return Dog;
}(Animal));
var BabyDog = /** @class */ (function (_super) {
    __extends(BabyDog, _super);
    function BabyDog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BabyDog.prototype.weep = function () {
        console.log("Weeping");
    };
    return BabyDog;
}(Dog));
var obj = new BabyDog();
obj.eat();
obj.bark();
obj.weep();
var empObject = {};
empObject.name = "Sandeep";
empObject.age = 24;
empObject.gender = "Male";
empObject.empCode = 43;
console.log("Name: " + empObject.name);
console.log("Employee Code: " + empObject.empCode);
// Overloading
function add(a, b) {
    return a + b;
}
console.log("Addition: " + add("Hello ", "Typescript"));
console.log("Addition: " + add(30, 20));
