// "use strict";

/*
// What is the output ?
var arr = ["J", "S"];
arr.length = 0;
alert(arr[1]);

// 1- S
// 2- J
// 3- undefined

// Answer 3

console.log(typeof arr);
*/

/*
// What is the output of this code ?

var c = 1;
alert(c * 2 * 5);

// answer = 10
11111



// What is the output of this code?

var x = 1;
if (x == 2) {
  alert("a");
} else {
  alert("b");
}

//  1- b
//  2- a
//  3- cool
//  4- Error

// answer = 1


// How many times will the followning for loop run?

for (var i = 1; i <= 5; i++) {
  i = f(i);
}

function f(x) {
  return x + 3;
}

// answer = 2


// What is the output of this code:

var a = 2;
var b = 2;
var c = 3;
var d = (c % b) - a;
alert(((a * b) % c) + d);

// answer 0


// What is the output of this code:
var y = 3;
var x = 5 % y;
alert(y);

// answer 3



// What is the output of this code:
var a = 5;
b = 6 / 3 + 2;
var z = 4 * 6;
a *= a;
var x = z == --a ? b : z;

document.write(x);

// answer: 4


// 8- Fill the blank to print all the values in the list

var x = [1, 2, 3, 4];

for (var y in x) {
  document.write(x[y]);
}


// 9- What is the output of this code
var a = 0.1;
var b = 0.2;
var c = 10;

var d = (a + b) * c === a * c + b * c ? 1 : 0;
alert(d);

// answer = 0


// 10- What is the output of this code
var x = 3;
var arr = [1, 2, 3, 4];
if (x < arr.length) {
  console.log(true);
} else {
  console.log(false);
}

// answer = true


// 11- What is the output of this code
var age = "15";
var message =
  age < "year" ? true : age < "year" ? false : true;

alert(message);

// answer = true


// 12- What is the output of this code
var a = 0;
a++;
alert(--a + a);

// answer = 0


// 13- What is the output of this code
var arr = ["", ""];
alert(arr.length);

// answer = 2




// 14-What will be alerted
alert(Math.ceil(7.0001));

// answer = 8


// 15- What is the output of this code
for (var x = 1; x > 0; x++) {
  if (x > 7) {
    alert(x);
    break;
  }
}

// answer = 8


// 16- What is the output of this code
var x = 3,
  y = true,
  z = false;

var a, b, c;
function worker(a, c, b = 2) {
  a = b * c;
  b = b / 3;
  if (x && y && z) {
    return a + b + c;
  }
  return x + "3";
}

result = worker(8, 3);
console.log(result);

// 1- true
// 2- 33
// 3- false
// 4- 3

// answer = 2


// 17- is the following code valid
var arr = [1, 2, 3];
arr[0].push(4);
console.log(arr);

// answer= false


// 18- What is the output of this code

var count = 0;

for (var x = 0; x < 5; x++) {
  count++;
  x++;
}
document.write(count);

// answer = 3


// 19- What is the output of this code
let a = { x: 20, y: 45, z: 60 }.x;
let b = { a: 10 }.a + a;
console.log(b);

// answer = 30


// 20- What is the output of this code
var arr = [];
arr[0] = arr.length;
arr[1] = arr.length + 1;
var x = arr.length + arr[1];

// answer=4

// 21- What is the output of this code
var a = 22;
a %= 5;
a *= 6;
a += 7;
console.log(a);

// Answer = 19

// 22- What is the output of this code
var a = 5;
b = 6 / 3 + 2;
var z = 4 * 6;
a *= a;
var x = z == --a ? b : z;

console.log(x);

// answer = 4


// 23- What is the output of this code
var str = "code";
var res = "";

for (var i = str.length - 1; i >= 0; i--) {
  res += str[i];
}
console.log(res);

// Answer: edoc


// 24- What is the output of this code
var a = 0;
for (b = 1; b <= 5; b += a) {
  console.log("b", b);
  a++;
}

// Answer=124


// 25-Are the three outputs of the following code are equal to each other?
var n = 5;
var t = "5";
console.log(n * t);
console.log(t * n);
console.log(t * t);

// Answer=yes

// 26-Are the three outputs of the following code are equal to each other?
var s = 2;
for (i = 4; i < 6; i++) {
  if (i == 4) {
    continue;
  }
  s += i;
}
console.log(s);

// Answer=7

// 27- Fill in the blank to find the type of the variable x
x = function my() {};
console.log(typeof x);

// 28- What is the output of this code
var a = 3;
if (a == 2 || a >= 3) {
  console.log(a);
} else {
  console.log(++a);
}

// Answer= 3

// 29- What is the output of this code
console.log(5 % 0);

// Answer=NaN

// 30- What is the output of this code
var a = {
  name: "foo",
  age: 12,
};
var b = a;
b.name = "bar";
console.log(b.name);

// Answer: bar

// 31- What is the output of this code
function zoom(str) {
  var a = [2, 8, 18, 26, 35, 56];
  return a[3];
}
console.log(zoom(4));

// Answer = 26


// 32- Fill in the blank to fill arr1 with arr2 elements

var arr1 = new Array();
var arr2 = [1, 3, 4, 7];

for (x = 0; x < arr2.length; x++) {
  arr1[x] = arr2[x];
}

console.log(arr1);


// 33- What is the output of this code

var x = "turtle";
var y = 42;
if (typeof x == "number") {
  console.log(21);
} else {
  console.log(y / "2");
}

// Answer = 21


// 34- What is the output of this code
console.log(2 + true + 3 + false);

// 1- undefined
// 2- 6
// 3- NaN
// 4- 5

// answer = 2(6)

// 35- Fill in the blank to output 3
var a = 9; //The blank here
var b = 5;
b++;
console.log(a - b);


// 36- fill in the blank to define the person object constructor,
// creat an object and output its name

function Person(name) {
  this.name = name;
}

var obj = new Person("John");
console.log(obj.name);


// 37- What is the output of this code
var a = 0;
for (var i = 7; i > 0; i--) {
  do {
    ++a;
  } while (a < 0);
}

console.log(a);

// answer = 7


// 38- How many of the following will print false
console.log(typeof function () {} === "function");
console.log(typeof class C {} === "function");
console.log(typeof Math.sin === "function");

// 1
// 2
// 3
// 4

// answer = 0

// 39- What is the output of this code

console.log(typeof typeof 3.14);

// string
// number
// object
// undefined

// answer = string

// 40- What is the output of this code
var arr = [2, 3, 8, 5, 9];
var i,
  j = 2;

for (i = 0; i + j < arr.length; i++) {
  arr[i + j] = arr[i];
}
console.log(arr);

// answer = 2


// 41- What is the output of this code
console.log(NaN !== NaN);

// answer = true

// 42- What is the method used to remove
//a particular element from an array?

// delete()
// slice()
// drop()
// splice()

// Answer = splice()

// 43- What is the output of this code
var foo = function foo() {
  console.log(foo === foo);
};
foo();

// true
// error
// false

// answer = true


// 44- What is the output of this code
var x = Math.pow(Math.floor(Math.PI), 3);
console.log(x);

// answer=27

// 45- What is the output of this code
var x = "35.4 trending up";
var converted = parseInt(x);
console.log(converted);

// answer = 35


// 46- What will be the output?
var x = new Array(4).toString();
console.log(x);

// Answer: ,,,


// 47- What is the output of this code

var a = 3;
var b = 2;
var z = ++b;
z = z + a;
console.log(z);

// Answer: 6


// 48- What is the output of this code
let arr = [1, 2, 3, 3];
let func = (a, b, c) => a + b + c;
console.log(func(...arr));

// Answer = 6

// 49- What is the output of this code
var people = ["h", "a", "p", "p", "y"];
function smaller() {
  for (var i = 0; i <= 4; i++) {
    people.shift();
  }
}
smaller();
console.log(people.length);

// 0
// 1
// 2
// y

// Answer = 0

// 50- Which choice is the largest number
// Among the options?
Math.abs(16);
Math.exp(16);
Math.sqrt(16);
2017;

// answer = Math.exp(16);



// 51- What is the output of this code
const arr = Number(200, 200);
if (arr[0] == 200 || arr[1] == 200) {
  console.log(arr.push(2.0, 200));
} else if (arr === 200) {
  console.log(arr.toString(arr.length));
} else {
  console.log(arr.push(200, 2.0));
}

// 200
// No output
// 2

// answer=200


// 52- What is the output of this code
var x = 1,
  y = 1,
  z = 1;
do {
  z = x + y;
} while (++x <= 1 && y++ >= 1);
z += x + y;
console.log(z);

// Answer = 5


// 53- What is the output of this code
function solution(x, y, d) {
  let distance = y - x;
  if (distance % d === 0) {
    return distance / d;
  } else {
    return Math.ceil(distance / d);
  }
}
console.log(solution(10, 30, 5));

// Answer = 4

// 54- What is the output of this code

var friends = [
  ["Ram", "Shyam"],
  ["Harry", "Ron"],
  ["Johnny", "Peter"],
];

console.log(friends[2][0]);

// answer = Johnny

// 55- What is the output of this code
var str = "hello ";
var res = str.valueOf();
var st1 = "world";
var res1 = str.valueOf();
console.log(res.concat(res1));

// Answer = hello world

// 56- What is the output of this code
var a1 = 1,
  a2 = 2,
  a3 = 3;

var as = [a1, a2, a3];
as[0] += a3 - a2;
console.log(a1);

// 2
// -1
// 1
// 0

// answer = 1

// 57- What is the output of this code
(function (x) {
  return (function (y) {
    alert(x);
  })(0);
})("x");

// answer = x

// 58- What is the output of this code
var a = 25;
var b = Math.sqrt(a) - 1;
var c = Math.pow(++b, 2) % 5;
console.log(c);

// Answer = 0


// 59 - How many times will the word "Hi" will be printed
var t = "Hi";
var x = 0;
do {
  document.write(t);
  x++;
} while (x < 1);

// 2
// none
// 1

// answer = 1


// 60- What is the output of this code
let a, b;
[a, b = 6] = [2];

console.log(a + b);

// 6
// 2
// 8
// 10

// Answer = 8

// 61- How many times will the following for loop run?

for (var i = 1; i < 4; i++) {
  i = f(i);
}

function f(x) {
  return x + 2;
}

// answer = 1

// 62- What will be alerted
var a = 1;
if (a == true) {
  alert(a);
}

// 0
// 1
// a
// true
// nothing

// Answer = 1


// 63- What is the output of this code
var y = 0;
for (var x = 2; x <= 6; x++) {
  if (x > 4) {
    y += 2;
  }
  y++;
}

console.log(y);

// answer = 9


// 64- What is the output of this code
console.log((NaN - 2) * (4 / 2));

// Answer = NaN

// 65- What is the output of this code
var x = "2";
if (x + 2 == 4) {
  console.log(x + 5);
} else {
  console.log(x + 4);
}

// Answer =24


// 66- What will be alerted
function abc(a) {
  return (
    (function (y) {
      return y + 1;
    })(++a) + a
  );
}

alert(abc(2));

// Anwser = 7

// 67- What will be the output of this code
let set = new Set([1, 2, 4, 2, 59, 9, 4, 9, 1]);
console.log(set.size);

// answer = 5

// 68- What will be the output of this code
var a = [3, 8, 5];
for (var j = 0; j < 3; j++) {
  a[j] += j;
}
console.log(a[2]);

// Answer = 7

// 69- What will be the output of this code
var b = "c";
var c = "b";
var a = b;

if (null === 0) alert("b");
if (null > 0) alert("a");
if (null >= 0) alert(a);

// bc
// b
// a
// c

// answer = c

// 70- What will be the output of this code
var a = 3 * 2;
var b = a % 4;
var c = a - b;
alert((c -= 3));

// answer = 1

// 71- What will be the output of this code
function add() {
  return 2 + 3;
}
console.log(typeof add());

// Answer = number

// 72- fill in the blank to output 8

var a = 6;
var b = 3;
b--;
alert(a + b);

// Answer = 6

// 73- What is the last output number
for (i = 0; i <= 10; i++) {
  console.log(i);
}

// 9
// 10
// 8
// 11

// Answer = 10

// 74- What will be the output of this code
var a = 1;
function b() {
  a = 10;
  console.log(a);
  return a;
}

a = b();
console.log(a);

// undefined undefined
// 10 1
// 1 10
// 10 10

// answer =  10 10

// 75- What will be the output of this code
var x = 100 / "app";
alert(x);

// NaN
// error
// 33.333
// 33

// Answer = NaN

// 76- What will be the output of this code
var x,
  y = 0;

function change() {
  for (x = 5; x <= 10; x++) {
    ++y;
  }
}
alert(y);

// Answer = 0

// 77- What will be the output of this code
var x = 20 + 30 + 10 + "5";
console.log(x);

// 65
// 2030105
// 605

// answer  = 605

// 78- What will be the output of this code
let a, b, c;
a = 1;
b = 5;
c = 7;

if (++b + a > b++) {
  console.log(b - 4);
} else {
  console.log(c - b);
}

// answer = 3

// 79- What will be the output of this code
function x(a, b = 5, c = 5, d = 10) {
  return a + b - d;
}

console.log(x(30, 20));

// Answer = 40

// 80- What will be the output of this code
function calc(j, p) {
  j *= ++p;
  return j + p;
  j -= p;
}
alert(calc(2, 2));

// Answer = 9

// 81- What will be the output of this code
console.log(8 * null);

// Answer = 0

// 82- What will be the output of this code
var x = "Volvo" + 16 + 4;
alert(x);

// Answer = Volvo164

// 83- What will be the output of this code

var fruits = ["banana", "orange", "apple", "mango"];
var x = fruits.push("kiwi");
console.log(x);

// kiwi
// 5
// undefined
// 4

// answer = 5


// 84- What will be alerted
function prod(a, b, c = 3) {
  x = a * b * c;
  return x;
}

let result = prod(8, 3, 5);
alert(result);

// Answer = 120


// 85- What will be the output of this code
function person(name, age, color) {
  this.name = name;
  this.age = age;
  this.favColor = color;
}

var p = new person("Susi", 18, "blue");
console.log(p.favColor);

// Answer = blue

// 86- What will be the output of this code
var x = true;
if (x === true) {
  alert(true);
} else {
  alert(false);
}

// Answer = true

// 87- What will be the output of this code
var a = [1, 2, 3, 4, 5];
var b = [1, 2, 3, 4, 5];
var c = a.splice() == b.slice();
console.log(c);

// Answer = false

// 88- What will be the output of this code
class A {
  constructor(m) {
    console.log(`${m}`);
  }
}
class B extends A {
  constructor(m) {
    super(m);
  }
}
let a = new B("hello");

// hello
// undefined
// null

// Answer = hello

// 89- What will be the output of this code
function txt(x) {
  var str = "JavaScript is cool!";
  return str.replace("JavaScript", x);
}

document.write(txt("SoloLearn"));

// SoloLearn is cool!
// SoloLearn
// String
// JavaScript is cool

// Answer = SoloLearn is cool!

// 90- What will be the output of this code
function func(y) {
  var x = 20;
  return x - y;
}

document.write(func(4));

// Answer = 16

// 91- How many item will be pushed to the arry res?
var str = "I love JS!";
j = 0;
res = [];
while ((j = str.indexOf(" ", j + 1)) > 0) {
  res.push(j + 1);
}

// Answer = 2

// 92- What is the output of this code?
console.log("Solorlearn".indexOf("o"));

// Answer = 1

// 93- What is the output of this code?
const say = (name) => {
  return name + 6;
};
console.log(typeof say("6"));

// Answer = String

// 94- What is the output of this code?
var a = 3;
var b = 2;
x = (++b + --a) % 5;
document.write(x);

// Answer = 0

// 95- What is the output of this code?
if (1 != "1") {
  document.write(1);
} else {
  document.write(0);
}

// Answer = 0

// 96- What is the output of this code?
var x = new Array(4).toString();
document.write(x);

// "[,,,}"
// ,,,
// []
// error

// Answer = ,,,

// 97- What is the output of this code?
(function () {
  alert(typeof arguments);
})();

// object
// array
// undefined
// argumrts

// Answer = object

// 98- What is the output of this code?
var count = 0;
for (var x = 0; x < 5; x++) {
  count++;
  x++;
}

document.write(count);

// Answer= 3

// 99- fill in the blank to define a valid switch statement
var day = 1;
switch (day) {
  case 1:
    document.write("Monday");
    break;
  case 2:
    document.write("Tuesday");
    break;
}

// 100- WHat is the output of this code
var a, b;
a = typeof c;
var c = function () {
  return 20;
};
console.log(a == b);

// false
// true
// TypeError

// Answer = false

// 101- WHat is the output of this code
function tripleSum(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}

console.log(tripleSum(1)(2)(3));

// Answer =6

// 102- What will be alerted?
var a = 1;
var b = 2;
var c = 3;
a += b - ++c;
alert(++a);

// Answer= 0

// 103- WHat is the output of this code
var x = 15 + 5 + "sololearn";
console.log(x);

// 20sololearn
// 155sololearn
// 110sololearn
// 29

// Answer = 20sololearn

// 104- WHat is the output of this code
var studnets = ["John", "David"];
alert(studnets[1].length);

// Answer = 5

// 105- WHat is the output of this code
var a = (function (val) {
  return "Solo" + val;
})("Learn");

console.log(a);

// learnSolo
// SoloLearn
// SoloSolo
// undefined

// Answer = SoloLearn

// 106- WHat is the output of this code
function f(f) {
  return "" + f;
}
function g(g) {
  return eval(g);
}

alert(g(f(3 * 2 + 5)));

// Answer = 11

// 107- Define a function that return the square of its parameters

function sqr(x) {
  return x * x;
}

// 108- What will be alerted
alert("1" - 1 == 0);

// true
// TypeError
// false
// undefined

// answer = true

// 109- What is the output of the following code
(function (x) {
  return (function (y) {
    alert(x);
  })(2);
})(1);

// Answer = 1


// 110- What is the output of the following code
var arr = [10, 14, 17];
arr.foo = "Hello world";
for (var i in arr) {
  console.log(i);
}

// 0 1 2 3
// 0 1 2 foo
// 10 14 17
// 10 14 17 foo

// Answer = 0 1 2 foo

// 111- What is the output of the following code
var x = 1;
if (x > 3) {
  x += 2;
} else {
  x += 4;
}

alert(x);

// Answer = 5

// 112- What is the output of the following code
var x = 0;
var a = [3, 4];
a[x] = ++x;
document.write(a[0]);

// Answer = 1

// 113- What is the output of the following code
var sub = "Eng";
switch (sub) {
  case "Eng":
    document.write(1);
  case "Es":
    document.write(2);
}

// Answer = 12

// 114- What will be alerted
var t = 2;
var e = 8;
var x = e % t;
alert(x);

// Answer = 0

// 115- What is the output of the following code
function x(a, b = 1, c = 3) {
  return a + b + c;
}
document.write(x(2, 4));

// Answer = 9

// 116- What is the output of the following code
const sum = (a, b) => a + b;
alert(sum(8, 5));

// 13
// 85
// undefined
// Error

// Answer = 13


// 117- Is the following code valid?
let arr = ["a", "b", "c"];
let [a1, b1] = arr;
console.log(b1);

// True
// false

// Answer = true

// 118- What is the output of the following code
const a = [1, 2, 3];
const b = [1, 2, 3];
const c = "1, 2, 3";

console.log(a == c, a == b);

// false flase
// false true
// true true
// true flase

// Answer = false false

// 119- What is the output of the following code
var myPc = {
  make: "HP",
  collor: "Gray",
};
var anotherObj = myPc;
anotherObj.make = "apple";
console.log(myPc.make);

// Answer = apple

// 120- What is the output of the following code
var courses = ["Html", "CSS", "JS"];
courses[6] = "NODE JS";
console.log(courses.length);

// Answer = 7

// 121- What is the output of the following code
var c1 = ["Html", "Css"];
var c2 = ["Js", "C++"];
var c3 = ["Java", "python"];
var c4 = ["kotlin", "ruby", "Spider cva"];
var courses = c1.concat(c2[0], c3[1], c4[2]);
console.log(courses);

// ["HTML", "CSS", "js", "python", "Spider cva"]
// ["HTML", "CSS", "c++", "java", "ruby"]
// ["HTML", "CSS", "js", "python", "kotlin"]
// ["HTML", "js", "java", "kotlin", "ruby"]

// answer = ["HTML", "CSS", "js", "python", "Spider cva"]

// 122- What is the output of the following code
let foo = new Set([0, "3", 2, 4, 3]);
console.log(foo.size);

// 5
// 2
// 8
// 10

// Answer = 5


// 123- What is the output of the following code
var apples = "23",
  oranges = "7";
alert(+apples + +oranges);

// Answer = 30


// 124- What is the output of the following code
for (var i = 5; i < 9; i++) {
  console.log(9 - i);
}

// Answer 4321

// 125- What is the output of the following code
function x(a, b = 5, c = 6, d = 10) {
  return a + b - d;
}

document.write(x(30, 20));

// Answer = 40

// 126- What is the output of the following code
var a = "2" + "8";
var b = a.replace("2", "3");
alert(b);

// Answer = 38

// 127- What is the output of the following code
var arr = [1, 2, 3, 4];
arr[arr[1]] = 5;
alert(arr);

// 1,2,5,4
// 1,2,3,4
// 1,5,3,4

// Answer = 1, 2, 5, 4

// 128- What is the output of the following code
console.log("sololearn\n".length);

// Answer = 10

// 129- What is the output of the following code
var x = 67;
var b = "x++";
alert(b);

// Answer = x++

// 130- What is the output of the following code
var x = "20";
alert(x * 1 + 20);

// 40
// 2020
// NaA
// Infinity

// Answer = 40

// 131- What is the output of the following code
var x = 0;
var arr = [4, 9, 2];
arr[x] = ++x - 1;

document.write(arr[x]);

// 9
// 0
// 1

// Answer = 9

// 132- What is the output of the following code

var a = typeof constructor == "object";
var b = typeof constructor == "function";
var c = typeof constructor == "undefined";

console.log(a, b, c);

// false true flase
// false false false
// false false true
// true false false

// answer = false true flase

// 133- What is the output of the following code
var str = "To locate where is 'locate'";
var pos = str.indexOf("locate");
console.log(pos);

// Answer = 3

// 134- What is the output of the following code
var e = [];
e["Yes"] = 7;
console.log(e["Yes"]);
e[null] = 8;
console.log(e[null]);
e[true] = 3;
console.log(e[true]);
e[false] = 2;
console.log(e[false]);

// 7 1 3 1
// Error
// 7 8 3 2
// 7 1 1 0

// Answer = 7 8 3 2

// 135- What is the output of the following code
var a = ["a1", "a2"];
var b = ["b1", "b2"];
var c = ["c1", "c2"];
var my_array = c.concat(b).concat(a);
console.log(my_array[3]);

// Answer = b2

// 136- What is the output of the following code
var a = 7;
var b = 5;
a = a - 1;
document.write(3 * (a - b) + 1);

// Answer =4

// 137- What is the output of the following code
var a = 10;
var b = 11;
var c;
if (!(a++ >= 10 || b++ >= 11)) {
  c = a + b;
  alert(a + "" + c);
} else {
  alert(a + "" + b);
}

// 1011
// 1123
// 1111
// 1112

// Answer = 1111

// 138- What is the output of the following code
var car = {
  make: "Mercedes",
  year: "2015",
  color: "white",
};
document.write(car.color[3]);

// Answer= t

// 139- What will be alerted:
function c(a, b, c) {
  a = true;
  b = true;
  c = a || b ? "x" : "y";
  alert(c);
}

c();

// Answer = x


// 140- What is the output of the following code
alert(typeof typeof 3.14);

// string
// number
// object
// undefined

// Answer = string

// 141- What is the output of the following code
try {
  let date = (x) => console.log(x);
  date(2018);
} catch (error) {
  console.log("2019");
}

// 2018
// 2019
// Error
// No output

// Answer = 2018

// 142- What is the output of the following code
var first = function (a, b) {
  return a + b;
};
var second = first.bind(null, "learn");
console.log(second("solo"));

// Error
// sololearn
// learnsolo
// undefined

// Answer = learnsolo

// 143- What is the output of the following code
var x = true;
if (x === true) {
  alert(true);
} else {
  alert(false);
}

// true
// false

// Answer = true

// 144- What is the output of the following code
var a = "I love coding";
a = a[7] + a[3] + a[a.length - 5] + a[2];
alert(a);

// Answer = cool

// 145- What is the output of the following code
var x = 1;
for (var i = 0; i < 3; i++) {
  x *= i;
}

alert(x);

// Answer = 0

// 146- What is the output of the following code
let arr = [2, 4, 6];
let map = arr.map((i) => i * 2);

console.log(map);

// [4,8,16]
// [2,4,8]
// [14]

// Answer = [4,8,16]

// 147- What is the output of the following code
var strings = Math.E;

if (typeof strings == "object") console.log("true");
else console.log("false");

// Answer = false

// 148- What is the output of the following code
var arr = ["red", "blue", "green"];
alert(!!arr.indexOf("green"));

// true
// false
// not true
// not false

// Answer = true

// 149- What is the output of the following code
console.log(typeof int a = 5);

// 5
// Error
// undefined
// number

// Answer = Error

// 150- What is the output of the following code
var x = 1;
x = +1;
alert(x);

// Answer = 1

// 151- What is the output of the following code
var x = (y = 3);
n = [1, 2, 3].fill(0, x, y);
console.log(n[0] * 2);

// 2,4,6
// 2
// 0
// 1,2,3

// Answer = 2

// 152- What is the output of the following code
var a = "javascript";
b = a.split(" ");
console.log(typeof b);

// String
// object

// Answer = object

// 153- What is the output of the following code
var name1 = "Sarah";
var name2 = "Friedrich";
alert(name1.length + name2.length);

// 59
// SarahFriedrich
// 14
// FriedrichSarah

// Answer =14


// 154- What is the output of the following code
var a = Number("1") - 1 === 0;
alert(a);

// true
// false
// 0
// 1

// Answer = true

// 155- What is the output of the following code
if (+"15" === 15) {
  document.write("true");
} else if ("15" === 15) {
  document.write("false");
} else {
  document.write("Sololearn");
}

// false
// true
// sololearn
// syntaxError

// Answer = true

// 156- What is the output of the following code
let cityHouse = { doors: 2, windows: 8, color: "white" };
let myHouse = Object.create(cityHouse);
myHouse.windows = --cityHouse.windows;

document.write(myHouse.windows);

// Answer = 7

// 157- What is the output of the following code
var x = 3;
function s(i) {
  alert(++i + x);
}
s(3);

// Answer  = 7

// 158 in HTMl file
// 159- What will the following code alert

function f(a, b) {
  return Math.sqrt(a * a + b * b);
}
var x = 3;
var y = 4;
var z = f(x, y);
alert(z);

// Answer = 5

// 160- What is the output of the following code
var a = 3.1415926535;
var b = Math.ceil(a);

console.log(b);

// Answer = 4

// 161- What is the output of the following code

if (1 != "1") {
  document.write(1);
} else {
  document.write(0);
}

// Answer = 0

// 162- What will be alerted
var a, b, c, d;
b = a;
c = a + b;
d = c - a;
alert(d == b);

// false
// NaN
// undefined
// true

// Answer = false


// 163- What is the output of the following code
function zz(x, z, a, b) {
  x = [9, 64, 20];
  z = 50;
  a = x[0] + 1;
  b = x[2] - 2;
  return z - a + b;
}

document.write(zz());

// Answer = 58

// 164- What is the output of the following code
var b = "c";
var c = "b";
var a = b;
if (null === 0) {
  alert("b");
}
if (null > 0) {
  alert("a");
}
if (null >= 0) {
  alert(a);
}

// bc
// b
// a
// c

// Answer = c


// 165- Which of the option won't output 0:
let x1 = NaN / Infinity;
let x2 = 1 / Infinity;
let x3 = 0 / Infinity;
let x4 = -1 / Infinity;

// Answer = x1

// 166- What is the output of the following code
console.log("2" >= "12");

// true
// false
// None of the options
// NaN

// Answer = false

// 167- What is the output of the following code
var a = 120;
console.log(Math.floor(Math.sqrt(a)));

// Answer = 10

// 168- What is the output of the following code
document.write(8 * null);

// NaN
// null
// 0
// undefined

// Answer = 0

// 169- What is the output of the following code
x = 1;
b = ++x;
alert(x);

// Answer = 2


// 170- What is the output of the following code
var pizza = ["m", "d", "f", "f"];
var a = pizza.indexOf("f");
a += pizza.indexOf("m") + 4;
document.write(a);

// Answer = 6


// 171: What is the value of
// variable elem in this code?

var elem = (1, 2, 3, 4, 6, 5);

// Answer = 5 the last element




// 172- What is the output of this code
x = 1;
x = ++x;
x = --x;
alert(x);

// Answer = 1

// 173- What is the output of this code
for (var i = 0; i < 3; i++) document.write(i);
for (var i = 0; i < 3; ++i) document.write(i);

// Answer = 012012

// 174- IS the following code valid?
(function (x) {
  int x;
  return x;
})(1);

// Answer = false

// 175- What will be alerted
alert("1" - 1 == 0);

// Answer = true

// 176- What is the output
Promise.resolve().then(() => console.log(1));
setTimeout(() => console.log(2), 0);
console.log(3);

// Answer = 312

// 177- Is the following code valid
var myString1 = "I am learning ";
var myString2 = "javaScript with sololearn";
console.log(myString1.append(myString2));

// Answer = false

// 178- What is the output of this code:
var x = 4;
var y = 5;
let str = `${x} + ${y} = 8`;
console.log(str);

// Answer = 4 + 5 = 8

// 179- What is the output of this code:
var count = 0;
for (var i = 0; i <= 6; i++) {
  if (i == 3) {
    i = 5;
    continue;
  }
  count++;
}
document.write(count);

// Answer = 4

// 180- What will be alerted:
var a, b, c, d;
b = a;
c = a + b;
d = c + a;
alert(d == b);

// Answer = false

// 181 in html
// 182- What is the output of this code
function multi(x = 10, y = 2) {
  return x / y;
}
document.write(multi(30));

// Answer = 15

// 183- Fill in the blank to output Bob 3 times

var str = "Bob";
var x = 0;
do {
  document.write(str);
  x++;
} while (x < 3);


// 184- What is the output
var x = 1;
for (; x < 6; x += 2) {
  x = x * x;
}
document.write(x);

// Answer = 11

// 185- What is the output
alert("nine" < "seven");

// Answer = true

// 186- What is the output
var sum = 0;
for (var i = 1; i <= 5; i++) {
  if (i == 1) continue;
  if (i > 3) break;

  sum += i;
}

document.write(sum);

// Answer = 5

// 187- What is the output
console.log("abab".replace(/a/, "c"));

// Answer = cbcb

// 188- What is the output
var p = new Proxy(
  {},
  {
    get: function (obj, val) {
      console.log(val);
    },
  }
);
p[7];

//Answer = 7

// 189- What is the output
var a = true;
var b = false;
var c = (a && b) || a || b;
document.write(c);

// Answer = true

// 190- What is the output
var a = true;
var b = false;
if (a && b) alert("a");
else alert("b");

// Answer = b

// 191- What is the output
var car = { type: "toyota", color: "white" };

alert(car.type + car.color.length);

// Answer = toyota5

// 192- What is the output
let pokemon = {
  health: 100,
  incrsHealth(k = 2) {
    this.health += k;
  },
};

pokemon.incrsHealth(10);
pokemon.incrsHealth();
console.log(pokemon.health);

// Answer = 112

// 193- What is the output
var f = function g() {
  return 23;
};

alert(typeof g());

// Answer = Error

// 194- What is the output
function func(x) {
  return function (y) {
    return function (z) {
      return x * y + z;
    };
  };
}

console.log(func(3)(2)(3));

// Answer = 9

// 195- What is the output
var i = 0;
do {
  i++;
} while (i < 5);

document.write(i);

// Answer = 5

// 196- What is the output
let obj = ["app", "bal", "cat"];
let [a, b, c] = obj;
console.log(a);

// Answer = app

// 197- What is the output
var A;
var a = 20;
document.write(A);

// Answer = undefined


// 198: what is the output of this loop

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}

// Answer = 333


// 199: What is the output of this code
var i = 0;
var x = i;
for (i = 1; i < 2; i++) {
  console.log(i);
  console.log(x);
}

// Answer = 10

// 200: What is the output of this code
function a(a, b) {
  return a + b;
}

function b(c, d) {
  return c * d;
}

function c(e, f) {
  return e % f;
}

console.log(a(10, 40) - b(2, 5) + c(60, 6));

// Answer = 40


// 201: What is the output of this code
var a = 3;
var b = 2;

z = (++b + --a) % 5;
document.write(z);

// Answer = 0

// 202: What is the output of this code
var a = 2;
var b = 2;
a = a + b;
b = a + b;

alert(b);

// Answer = 6

// 203: What is the output of this code
var i;
for (i = 0; i < 10; i++) {
  if (i % 2 == 1) document.write(i + " ");
}

// Answer = all the odd digits

// 204: What is the output of this code
var str = '\'\';
document.write(str);

// Answer = Error

// 205: What is the output of this code
var x = 2;
var y = Math.sqrt(Math.pow(x, 4), 2);

document.write(y);

// Answer = 4

// 206: What is the output of this code
var count = 6,
  sum = 0;

while (count > 0) {
  sum += 3;
  count -= 1;
  if (count == 3) {
    count = 0;
  }
}

document.write(sum);

// Answer = 9

// 207: What is the output of this code
var x = true;
var y = false;
var z = !(x == y);
var s;

if (x !== z ? (s = true) : (s = false));

document.write(s);

// true
// false

// Answer = false
// 208: What is the output of this code

var x = "2*2";
var y = 4;
var z = eval(x + y);
console.log(z);

// Answer = 48

// 209: What is the output of this code
var count = 6,
sum = 0;

while (count > 0) {
  sum += 3;
  count -= 1;
  if (count == 3) {
    count = 0;
  }
}

console.log(sum);

// Answer = 9


// 210: What is the output of this code
var j;

if (j === null) alert(0);
else if (j == null) alert(1);
else alert(1 + 2);

// Answer = 1


// 211: What is the output of this code
var my_set = new Set([NaN, undefined, , null]);
console.log(my_set.size);

// Answer = 3

// 212: What will be alerted
var a = "7";
var b = "9";

alert(a + (b % 7));

// Answer = 72
// 213: What is the output of this code

var a = 2;
var b = 2;
a = a + b;
b = a + b;

alert(b);

// Answer = 6


// 214: What is the output of this code
var x;
function confuse() {
  x = 2;
  if (5 % 5) {
    x = 4;
    alert(x);
  } else {
    alert(x);
  }
}

confuse();

// Answer = 2

// 215: What will be alerted
function ca(x, y, z) {
  z = x.charAt(2) === y.charAt(2);
  alert(z);
}

ca("LINUX", "WINDOWS");

// false
// true

// Answer = true


// 216: What will be the output of this code
function x(y) {
  y++;
  y = y + 2;
  ++y;
  y = y % 3;
  return y;
}

document.write(x(3));

// Answer = 1


// 217: What will be the output of this code
var numbers = [44, 55, 66, 12, 67, 89];
console.log(numbers[numbers.length]);

// Answer = undefined


// 218: What will be the output of this code
class enemy {
  constructor(height, strength) {
    this.height = height;
    this.strength = strength;
  }
}

let chris = new enemy(100, 50);
let { prop1, prop2 } = chris;
console.log(prop1 + prop2);

// Answer = NaN

// 219: What will be the output of this code
var x = 10;
var y = 4;
if (x < 15) {
  alert(4 * (x % y) - 2);
} else {
  alert(5 - y);
}

// Answer = 6


// 220: What will be the output of this code
var str = "i love sololearn!";
var x = -5;
document.write(str.slice(--x));

// Answer = learn!
// 221: What will be the output of this code
var man = {
  height: "1.8m",
  color: "brown",
  age: "41",
};

var property = Object.getOwnPropertyNames(man);
console.log(property);

// Answer = ["height", "color", "age"]

// 222: What will be the output of this code
var x = 9;
var y = 4;
if (x > 8) {
  y = x;
}
alert(y);

// Answer = 9

// 223: What will be the output of this code
alert(false ? true : false);

// Answer =false


// 224: What will be the output of this code
var a = 4;
alert(a % 5);

// Answer = 4

// 225: What will be the output of this code
var score = [12, 7, 14];
var getMax = Math.max(...score);
console.log(getMax);

// Answer = 14


// 226: What will be the output of this code
var a = "4";
var b = parseInt(a, 10);
var c = "8";
var d = parseInt(c, 10);
var e = document.write(b + d);

// Answer = 12

// 227: What will be the output of this code
function f(p) {
  return p.x / p.y;
}
alert(f({ y: 2, x: 8 }));

// Answer = 4

// 228: What will be the output of this code
var x = "2";

if (x + 2 == 4) {
  document.write(x + 5);
} else {
  document.write(x + 4);
}

// Answer = 24

// 229: What will be the output of this code
function A() {
  this.x = 50;
  this.y = 30;
  this.b = function () {
    this.z = this.x % this.y;
    return this.z;
  };
}

a = new A();
alert(a.b());

// Answer = 20

// 230: What will be the output of this code
var a = 2;
var b = 3;
var c = 5;
var d = a + b;
var e = ++b;
var x = c % 2;
alert((d % e) - x);

// Answer  = 0


// 231: What will be the output of this code
var y = 0;
for (var x = 2; x <= 6; x++) {
  if (x > 4) {
    y += 2;
  }
  y++;
}
document.write(y);

// Answer = 9

// 232: What will be the output of this code
var arr = [4, 8, 2];
for (var i = 0; i < 3; i++) {
  arr[0] += arr[i];
}

document.write(arr[0]);

// Answer = 18

// 233: What will be the output of this code
var a = 1;
function f(a = 2) {
  return a;
}
a = f(a);
alert(a);

// Answer = 1


// 234: What will be the output of this code
var x = "what";
y = x.split("").reverse().join("");
alert(y);

// Answer = tahw

// 235: What will be the output of this code
var str = "Hello world!";
alert(str[7] + str[6]);

// Answer =  ow

// 236: What will be the output of this code
const cars = {
  Tesla: 3,
  Buggati: 4,
  Ferrari: 0,
};
const values = Object.values(cars);
console.log(++values[0]);

// Answer = 4

// 237: What will be the output of this code
var x = { age: 24 };
var y = x;
var z = { age: 24 };

console.log(y !== (x !== z));

// Answer = true


// 238: fill in the blank to swap the variable
var num1 = 5,
num2 = 10;
[num1, num2] = [num2, num1];


// 239: What will be the output of this code
var foo = 1;
var bar = function () {
  console.log(foo);
  var foo = 2;
};
bar();

// Answer = undefined


// 240: What will be the output of this code
var a = 1;
var b = 2;
var d = "8";
var c = d + (a = b + 1) - d;
alert(c);

// Answer = 75



// 241: What will be the output of this code
var a = 1;
var b = 2;
var d = "8";
var c = d + (a = b + 1) - d;

alert(c);

// Answer = 75

// 242: What will be the output of this code
alert(typeof null && typeof undefined);

// Answer = undefined

// 243: What will be the output of this code
var s1 = "sololearn";
var s2 = "solo" + "learn";
alert(s1 == s2);

// Answer = true

// 244: What will be the output of this code
var hello = 1;
if (hello != 1) {
  alert("Good");
} else if (hello <= 2) {
  alert("Well");
} else if (hello == 1) {
  alert("Fine");
}

//Well
// Good
// Fine

// Answer = Well

// 245: What will be the output of this code
var x, y, z;
x = 5;
y = 6;
function test() {
  return x * y * z;
}

document.write(test());

// 0
// NaN
// 30
// error

// Answer = NaN


// 246: What will be alerted
alert("N" > "B" || "1" === 1 || "E" < "Z");

// Answer = true


// 247: What will be the output of this code
var x = 3;
var y = 4;
alert(x - x || y - x ? "a" : "b");

// Answer = a

// 248: What will be the output of this code
var combn = ["baa", "aba", "aab"];
combn.sort();
console.log(combn[0]);

// Answer = baa

// 249- Code1 and Code2 will give the same result

// Code 1
for (x = 1; x < 4; x++) {
  document.write(x);
}

// Code2
y = 1;
while (y < 4) {
  y++;
  document.write(y);
}

// Answer = false


// 250: What will be the output of this code
var y = 3;
var x = 5 % y;
alert(y);

// Answer = 3


// 251: What will be the output of this code
let a = "() => 42";
console.log(typeof eval(a)());

// Error
// number
// function
// string

// Answer = number


// 252: What will be the output of this code
function Car(color) {
  this.color = color || "red";
}
var myCar = new Car();
console.log(myCar.color);

// red
// undefined

// Answer = red


// 253: What will be the output of this code
var arr = [1, 2, 3, 4, 5];
var five = function (e) {
  return e % 6 == 0;
};

check = arr.some(five);
console.log(check);

// true
// 2.3
// false
// Error

// Answer = false

// 254: What will be the output of this code
var x = 2016;
x = x % 100;
alert(x);

// 20.16
// 0.16
// 1600
// 16

// answer = 16

// 255: What will be the output of this code
if (!undefined) console.log("22");
else console.log("33");

// Answer:22

// 256: What will be the output of this code
var x = 10;
var y = x % 4;
var z = y / 2;
var c = x * z;
alert(x);

// 2
// 1
// 0
// 10

// answer = 10


// 257- is the output of this code "Undefined"
var sent = "Im the best in JS";
function mS(t, r) {
  return sent.substring(t, r);
}

alert(sent[mS(7, 11)]);
// Answer = yes


// 258- is the following code valid:
alert("AB"CD"")

// Answer = No

// 259- is the following code valid:
var a = 1 == "1"?return 1:return 0;
alert(a)

// 1
// 0
// Error

// Answer = error

// 260- What is the output of this code:
let set = new Set([1, 2, 3, 4, 3, 2, 1]);
set.delete(2);
console.log(set.size);

// 6
// 5
// 3
// 4

// Answer = 3

// 261- What is the output of this code:
var num = (5.489).toFixed(2);
console.log(num);

// Answer = 5.49


// 262- What is the output of this code:
var a = 22;
a %= 5;
a *= 6;
a += 7;

alert(a);

// answer = 19

// 263- What is the output of this code:
var a = {
  a: 3,
  b: function () {
    return this.a + 2;
  },
  c: function () {
    return this.b() + 6;
  },
};

alert(a.c());

// Answer = 11




// 264- fill in the blanks to output
//"I like programming in sololearn"

var a = "like ";
var b = "programming ";
var c = "I ";
var d = "Sololearn";
var e = "on ";

document.write(c + a + b + e + d);

// 265: Which is a single line comment:
// 1- <!-- -->
// 2- //
// 3- %%
// 4- /*

// Answer //


// 266: What is the output of this code?
var a = 100;
var b = (a / 10) % 10;
document.write(b);

// 1- 1
// 2- Error
// 3- infinity
// 4-0

// Answer = 0

// 267: What is the output of this code?
var a = 5;
var b = 6;
if (b < a) {
  alert(a % b);
} else {
  alert(b % a);
}

// Answer = 1

// 268: What is the output of this code?
let cities = ["madrid", "rio", "newyork"];
let [city1, city2, city3] = cities;
let info = `i love ${city2}`;

console.log(info);

// 1- i love newyourk
// 2- i lobve rio
// 3- `i love ${city2}`
// 4- i love madrid

// answer = i love rio

// 269: What is the output of this code?
// I think they need to rephrase this question

(function (x) {
  delete x;
  return x;
})(1);

// 1- undefined
// 2- Error
// 3- null
// 4- 1

// Answer = 1

// 270: What is the output of this code?
function add(n1, n2) {
  var sum = n1 + n2;
  return;
}

function add1(n1, n2) {
  var sum = n1 + n2;
}

add(2, 3);
add1(2, 3);
console.log(add() === add1());
console.log(add === add1);

// 1- false false
// 2- false true
// 3- true false
// 4- true true

// answer = true false
// 271: What is the output of this code?
var a = null == undefined;
var b = null === undefined;
var c = a + b;
alert(c);

// Answer = 1

// 272: What is the output of this code?
var x, y, Z;
x = 4;
y = 10;
z = ((y % x) * 5) % 2;
alert(z);

// 1- 0
// 2- 8
// 3- 12

// answer = 0
// 273: What is the output of this code?
var num = 300;
if (num === 300) {
  document.write("num");
} else {
  document.write("num--");
}

// Answer = num
// 274: What is the output of this code?
var a = "123" === 123;
var b = "123" == 123;
console.log(a !== b);

// 1- False
// 2- True
// 3- true
// 4- false

// answer = true
// 275: What is the output of this code?
var nb = [8, 9, 24, 35, 40, 54];
alert(nb[1] + nb[5]);

// 1- 48
// 2- 6
// 3- 63
// 840 

// Answer = 63

// 276: What will be alerted?
var a = null;
var b = 5;
var c = a + b;
alert(c);

// 1- 5
// 2- error 
// 3- 10
// 4- 1505

// Answer = 5

// 277: What is the output of this code?
var foo = 1;
var bar = function () {
  console.log(foo);
  var foo = 2;
};
bar();

// 1- undefined
// 2- error
// 3- 2
// 4- 1

// Answer = undefined
// 278: What is the output of this code?
alert(8 * null);

// 1 - error
// 2- 8
// 3- null
// 4 - 0

// Answer = 0
// 279: What is the output of this code?
var hello = 1
if(hello != 1){
  alert("Good")
}else if(hello<=1){
  alert("Well")
}else if(hello == 1){
  alert("Fine")
}

// 1- Well
// 2- Good
// 3- Fine

// answer = Well
// 280: What is the output of this code?
y = 10;
z = 7;
x = ++y + (z % 5);
alert(x);

// 1- 15
// 2- 14
// 3-13
// 4- 16

// answer= 13
// 281: What is the output of this code?
var a = !(1 || 0) && (true || (null && "sololearn"));
alert(a);

// 1- true
// 2- false
// 3- undefined

// Answer = false
// 282: What is the output of this code?
let arr = [1, 1, 5, 5, 6, 7, 6];
let map = new Map([arr, arr]);
console.log(map);
console.log(map.size);

// Answer = 1
// 283: What is the output of this code?
var str = "abc";
var arr = [1, 2, 3];
str.length = 2;
arr.length = 2;
console.log(str.length + arr.length);

// Answer = 5
// 284: What is the output of this code?
var x = 2;
for (var i = 0; i < 4; i++) {
  x += 2;
}
document.write(x);

// Answer = 10

// 285: What will be alerted?
function myFunc(str) {
  var p = /\d+/g;
  var res = str.match(p);
  return res;
}

alert(myFunc("I have 28 years"));

// 1- 28
// 2- I have 28 years
// 3 - I have years
// none of the following

// Answer = 28

// 286: What is the output of this code?
var a = 2;
function set() {
  var a = 5;
}
document.write(a);

// Answer = 2
// 287: What is the output of this code?
var a = 4;
alert(a % 5);

// Answer = 4

// 288: Is the output of the code 10?
var num = Math.floor(Math.random() + 10);
console.log(num);

// 1- true
// 2- false


// 289: What is the output of this code?
var a = "javascript";
b = a.split(" ");
console.log(typeof b);

// 1- string
// 2- object

// Answer = object


// 290: What is the output of this code?
var arr = [2,3,4]
var lit = `${...arr}`
console.log(lit[0]);

// 1- Error
// 2- 2
// 3- ${...arr}

// Answer = Error
// 291: What is the output of this code?
function x() {
  console.log(new.target ? 1 : 0);
}
new x();
x();

// 1 - 1 1
// 2- 1 0
// 3- 0 0
// 4 - 0 1

// Answer = 1 0


// 292: fill in the blank to output "ok"

alert(false ? func : "ok");

// 293: What will be alerted
const x = 15;
for (let x = 0; x <= 10; x += 2) {
  y = x;
}
alert(y);

// answer = 10 and in strict mode error

// 294: choose the ones that will output
// false when alerted:

// 1- Boolean(flase);
// 2- Boolean("false");
// 3- Boolean(0);
// 4 -Boolean(undefined);

// Answer = 1,3,4


// 295: What is the output of this code:
var arr = [];
arr.push(30);
arr.push(9);
arr.push(2);
alert((arr[0] % arr[1]) % arr[2]);

// Answer = 1

// 296: What is the output of this code:
function add() {
  return 2 + 3;
}

console.log(typeof add);

// Answer = function

// 297: What is the output of this code:
var a = 6;
var b = 3;
var z = (a * ++b) / b;
document.write(z);

// Answer = 6

// 298: What is the output of this code:
let a;
let b = null;
let c = 4;
let d = "five";
let e = a || b || c || d;
alert(e);

// null
// 4
// undefined
// five

// Answer = 4

// 299: What is the output of this code:
var x = function (x) {
  this.x = 4;
  alert(x);
};

x(5);

// Answer = 5
*/
// 300: What is the output of this code:
let a = 0,
  b = 2;
console.log(a++ && ++b);

// 0
// 1
// 3
// 2

// Answer = 0
