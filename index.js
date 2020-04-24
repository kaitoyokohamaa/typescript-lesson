var hasValue = true;
var count = 10;
var float = 3.14;
var negative = -0.12;
var single = "hello";
var double = "hello";
var person = {
    name: {
        first: "Jack",
        last: "Swith"
    },
    age: 21
};
var fruits = ["Apple", "Banana", "Grape"];
var book = ["business", 1500, false];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
coffee.size = CoffeeSize.TALL;
console.log(CoffeeSize.TALL);
var anything = true;
anything = "hello ";
anything = ["hello", 33, true];
anything = {};
anything.fifififi = "fufurfhr";
var banana = "banana";
banana = anything;
var unionType = 10;
unionType = "hello";
unionType.toUpperCase();
var unionTypes = [21, "hello"];
var apple = "apple";
var clothSize = "medium";
var cloth = {
    color: "white",
    size: "medium"
};
cloth.size = "large";
var cloths = {
    color: "white",
    size: "medium"
};
function add(num1, num2) {
    return num1 + num2;
}
function sayHello() {
    console.log("hello");
    return;
}
var tmp = null;
console.log(sayHello());
var anotheradd = function add(num1, num2) {
    return num1 + num2;
};
anotheradd;
var doubleNumber = function (num) { return num * 2; };
function doubleAndHandler(num, cd) {
    var doubleNum = cd(num * 2);
    console.log(doubleNum);
}
doubleAndHandler(32, function (doubleNum) {
    return doubleNum;
});
var nuknownInput;
var anyInout;
var text;
nuknownInput = "hello";
nuknownInput = 21;
nuknownInput = true;
text = anyInout;
if (typeof nuknownInput === "string") {
    text = nuknownInput;
}
function error(message) {
    throw new Error(message);
}
console.log(error("thi is an error"));
