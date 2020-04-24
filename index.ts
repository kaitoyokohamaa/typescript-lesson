let hasValue: boolean = true;
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
let single: string = "hello";
let double: string = `hello`;

const person = {
  name: {
    first: "Jack",
    last: "Swith"
  },
  age: 21
};

const fruits: string[] = ["Apple", "Banana", "Grape"];

const book: [string, number, boolean] = ["business", 1500, false];

enum CoffeeSize {
  SHORT,
  TALL,
  GRANDE,
  VENTI
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL
};

coffee.size = CoffeeSize.TALL;

console.log(CoffeeSize.TALL);

let anything: any = true;
anything = "hello ";
anything = ["hello", 33, true];
anything = {};
anything.fifififi = "fufurfhr";
let banana = "banana";
banana = anything;

let unionType: number | string = 10;
unionType = "hello";
unionType.toUpperCase();
let unionTypes: (number | string)[] = [21, "hello"];

const apple = "apple";

type ClothSize = "small" | "medium" | "large";
let clothSize: ClothSize = "medium";
const cloth: {
  color: string;
  size: ClothSize;
} = {
  color: "white",
  size: "medium"
};

cloth.size = "large";

const cloths: {
  color: string;
  size: "small" | "medium" | "large";
} = {
  color: "white",
  size: "medium"
};

function add(num1: number, num2: number) {
  return num1 + num2;
}

function sayHello(): void {
  console.log("hello");
  return;
}
let tmp: undefined = null;

console.log(sayHello());

const anotheradd: (n1: number, n2: number) => number = function add(
  num1: number,
  num2: number
) {
  return num1 + num2;
};
anotheradd;

const doubleNumber: (num: number) => number = (num) => num * 2;

function doubleAndHandler(num: number, cd: (num: number) => void): void {
  const doubleNum = cd(num * 2);

  console.log(doubleNum);
}

doubleAndHandler(32, (doubleNum) => {
  return doubleNum;
});

let nuknownInput: unknown;
let anyInout: any;
let text: string;
nuknownInput = "hello";
nuknownInput = 21;
nuknownInput = true;

text = anyInout;

if (typeof nuknownInput === "string") {
  text = nuknownInput;
}

function error(message: string) {
  throw new Error(message);
}

console.log(error("thi is an error"));
