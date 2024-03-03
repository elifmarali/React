/* let age: number = 29;
let firstName: string = "Elif";
let lastName: string = "Marali";
let isAccepted: boolean = true;

function display(id: any, name: string, age: number) {
  console.log("id: " + id + ", name: " + name, "age:" + age);
} */
// display(2, "Elif", 33);

/* let firstNumber: number = 123; //number
let secondNumber: number = 0x37cf; //hexedecimal number
let thirdNumber: number = 0o377; // octal number
let fourthNumber: number = 0b111001; //binary number

console.log("number: " + firstNumber);
console.log("hexedecimal: " + secondNumber);
console.log("octal: " + thirdNumber);
console.log("binary: " + fourthNumber); */
/* 
let employeeFirstName: string = "Elif";
console.log(employeeFirstName);

let employeeName: string = "Elif";
let employeeDepartment: string = "Software Enginner";

let employeeDesc1: string =
  employeeName + " works in the " + employeeDepartment + " department.";

console.log(employeeDesc1);

let employeeDesc2: string = `${employeeName} works int he ${employeeDepartment} department.`;

console.log(employeeDesc2);
 */
/* 
let isPresent: boolean = true;
console.log(isPresent);
 */

//! Array

/* let nameList: string[] = ["elif", "yunus", "emre"];
let namelist2: Array<string> = ["elif", "yunus", "emre"];
let arr = [true, "Elif", 3, "Marali", false, 22];
console.log(arr);

let fruits: Array<string>;
fruits = ["banana", "apple", "orange", "grapes"];

console.log(fruits);

let ids: Array<number> = [1, 2, 33, 666];
console.log(ids);

let multipleCoice: Array<number | string> = [1, 2, "elif", "marali", 22];
console.log(multipleCoice);

let multipleCoice2: (string | number)[] = [1, 2, "elif", "marali", 33];
console.log(multipleCoice2);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
 */

//! TUPLE

/* let ids: number = 290;
let names: string = "Elif";

let instructor: [number, string] = [22, "Yunus"];
console.log(instructor);

let user: [number, string, boolean, string];
user = [12, "Elif", true, "Marali"];
console.log(user);

let employee: [number, string][] = [
  [1, "Elif"],
  [2, "Yunus"],
  [3, "Emre"],
];

console.log(employee); */

//! object data type

/* type Person = {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
};
let instructor: Person = {
  firstName: "Elif",
  lastName: "Marali",
  age: 22,
  jobTitle: "Software Engineer",
};

console.log(instructor);
console.log(instructor.firstName);
console.log(instructor.age);
 */

/* let person: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
} = {
  firstName: "Elif",
  lastName: "Marali",
  age: 22,
  jobTitle: "Software Engineer",
};
console.log(person);

console.log(person.age);
 */

//! enum
//? number enum
/* enum Media {
  newspaper,
  newsletter,
  magazine,
  book,
}

console.log(Media.magazine);
console.log(Media[3]); */

//? string enum
/* enum PrintMedia {
  newspaper = "NEWSPAPER",
  newsletter = "NEWSLATER",
  magazine = "MAGAZINE",
  book = "BOOK",
}

console.log(PrintMedia.magazine);
console.log(PrintMedia["newspaper"]);
 */

//! union type
//? union type bir deger number veya string olabilir dedigimiz yerlerde kullanilir

/* let dataUnion: string | number | boolean;
dataUnion = false;
console.log(dataUnion);
 */

//! any type
/* let someThing: any = true;
someThing = "Elif";
someThing = 22;
someThing = {
  firstName: "Elif",
  age: 11,
};

console.log(someThing);

let arr: any[] = ["Elif", 22, false];
console.log(arr);
 */

//! void type
//? void type bir fonksiyonda fonksiyon geriye deger dondurmuyorsa void kullanilir
/* 
function sayHi(): void {
  console.log("Hello");
}
sayHi();

function addition(a: number, b: number): void {
  return a + b;
}
console.log(addition(2, 3));
 */

//! never type
//? never type geriye hicbir value donmezse kullaniriz null dahil

/* function throwError(msg: string): never {
  throw new Error(msg);
}
throwError("Hata"); */

//todo never geriye hicbir ifade dondurmez direkt hata dondurur void e null ve undefined atanir never a atanmaz aradaki fark budur

/* let something: void = undefined;
let nothing: never = undefined;
console.log(something);
 */

//? type inference
/* let sayac = 0;  
console.log(typeof sayac); */

//? type assertion
/* let code: any = 123;
let empCode = <number>code;
console.log(typeof empCode);

interface Employee {
  name: string;
  code: number;
}

let employee = <Employee>{};
employee.name = "Elif";
console.log(typeof employee);
console.log(employee);
 */

//! if - else
/* var x: number = 45;
var y: number = 35;

 if (x > y) {
  console.log("x y den buyuktur");
} else if (x < y) {
  console.log("x y den kucuktur");
} else {
  console.log("x y esittir ");
} 

x > y
  ? console.log("x y den buyuktur")
  : console.log("x y den kucuktur veya esittir");
 */

//! switch - case
/* var day: number = 51;

switch (day) {
  case 0:
    console.log("Pazar");
    break;
  case 1:
    console.log("Pazartesi");
    break;
  case 2:
    console.log("Sali");
    break;
  case 3:
    console.log("Carsamba");
    break;
  case 4:
    console.log("Persembe");
    break;
  case 5:
    console.log("Cuma");
    break;
  default:
    console.log("Boyle bir gun yok");
    break;
}
 */

//! for
/* for (let i = 0; i < 10; i++) {
  console.log(i);
}

var arr = [10, 20, 30, 40, 50];
for (let i in arr) {
  console.log(arr[i]);
}

for (let item of arr) {
  console.log(item);
}

var string = "Elif Marali";
for (let item of string) {
  console.log(item);
} */

//! while

// var counter = 10;
/* while (counter < 5) {
  console.log(counter);
  counter++;
  if (counter == 3) {
    break;
  }
} */

/* do {
  console.log(counter);
  counter++;
} while (counter < 5);
 */

//! function

/* function add(a: number, b: number): number {
  return a + b;
}
var toplam = add(10, 20);
console.log(toplam);

function print(): void {
  console.log("Printing");
}
print();

function connectedFullName(
  name: string,
  surname: string,
  age: number = 25
): string {
  return `Hello everyone. I'm ${name} ${surname}. I'm ${age} years old`;
}
console.log(connectedFullName("Elif", "Marali", 21)); */

//! optional parameters
/* function multiply(a: number, b: number, c?: number): number {
  if (typeof c !== "undefined") {
    return a * b * c;
  } else {
    return a * b;
  }
}
console.log(multiply(10, 2));
console.log(multiply(10, 2, 5)); */

//! arrow functions

/* let carpim = (a: number, b: number): number => {
  return a * b;
};
console.log(carpim(2, 3));

let println = (): void => {
  console.log("Hello");
};

println();
 */

//! funtion overloading
/* let add = (a: number, b: number): number => {
  return a + b;
};

console.log(add(2, 3)); */
/* function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: any, b: any): any {
  return a + b;
}

console.log(add("Elif", " Marali"));
console.log(add(2, 3)); */

//! Rest Parameters

/* function toplam(sayHi: string, ...numbers: number[]) {
  console.log(sayHi);

  var total = 0;
  numbers.forEach((item) => (total += item));
  return total;
}

console.log(toplam("Hi", 10, 20, 30));

function birlestir(message: string, ...names: string[]) {
  console.log(message, " ", names.join(","));
}
birlestir("Merhaba", "Elif", "Tolga");
 */

//! Class
//! access modifiers (public , private , protected)
//! readonly
//! Inheritance
/* class Person {
  readonly id: number;
  firstName: string;
  lastName: string;

  constructor(id: number, firstName: string, lastName: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Employee extends Person {
  constructor(id: number, firstName: string, lastName: string) {
    super(id, firstName, lastName);
  }
}

let employee = new Employee(29, "Elif", "Marali");
console.log(employee);
console.log(employee.getFullName()); */

/* let personInfo = new Person(43, "Elif", "Marali");
// personInfo.id = 5;
console.log(personInfo);
console.log(personInfo.getFullName());
console.log(personInfo.id); */

//! Static Methods - Properties
/* class Circle {
  static pi: number = 3.14;
  a: number = 5;

  static calculateArea(r: number) {
    return r * this.pi * this.pi;
  }
  constructor() {
    this.a++;
    Circle.pi++;
  }
}

var data = new Circle();
var data2 = new Circle();

console.log(Circle.pi);

console.log(data.a);
console.log(data2.a);
console.log(Circle.calculateArea(5)); */

//! Abstract Class
/* abstract class Department {
  constructor(public name: string) {}
  abstract printMeeting(): void;

  printName(): void {
    console.log("Name is: " + this.name);
  }

  abstract generateReport(): void;
}

class AccountingDepartment extends Department {
  constructor() {
    super("Accounting and Auditing");
  }
  printMeeting(): void {
    console.log("The Accounting Department meets each Monday at 10.00am");
  }
  generateReport(): void {
    console.log("Generating accounting reports...");
  }
}
let department: Department;
department = new AccountingDepartment();
// let department = new AccountingDepartment();
department.printMeeting();
department.printName();
department.generateReport();
 */

//! interface nedir nasil kullanilir
//? TypeScript'deki interface, temelinde bir tip tanımından başka birşey değildir.
//? class ve function'lar nesnelerin davranışlarını tanımlarken, interface'ler nesnelerin tiplerini
//? tanımlar şeklinde düşünebiliriz.

/* interface Person {
  readonly firstName: string;
  lastName: string;
  middleName?: string; // optional parameters
}
function getFullName(person: Person) {
  if (person.middleName) {
    return `${person.firstName} ${person.middleName} ${person.lastName}`;
  } else {
    return `${person.firstName} ${person.lastName}`;
  }
}

let person: Person = {
  firstName: "Elif",
  middleName: "2ELif",
  lastName: "Marali",
};
//readonly oldugunda deger daha sonrasinda degistirilemez
// person.firstName = "3Elif";
console.log(getFullName(person));
 */

//! interface funtion type
/* interface StringFormat {
  (str: string, isUpper: boolean);
}

let format: StringFormat;

format = function (str: string, isUpper: boolean) {
  return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};

console.log(format("Elif Marali", true));
 */

//! interface extend etme
/* interface IPerson {
  name: string;
  gender: string;
}

interface IEmployee extends IPerson {
  empNumber: number;
}

interface IDepartment extends IPerson {
  empDepartment: string;
}

let employee: IEmployee = {
  name: "Elif",
  gender: "Female",
  empNumber: 2529,
};

let employeeWorker: IDepartment = {
  empDepartment: "Software Engineer",
  name: "Elif",
  gender: "Female",
};

console.log(employee);
console.log(employeeWorker); */

//! bir classa interface implemente etme

/* interface IPerson {
  name: string;
  gender: string;
}

//class ile implemente isleminde extendsin yani sira interface icindeki paramaetreler tekrar yazilmalidir
class Employee implements IPerson {
  empNumber: number;
  name: string;
  gender: string;
  constructor(empNumber: number, name: string, gender: string) {
    this.empNumber = empNumber;
    this.name = name;
    this.gender = gender;
  }
}

let employee = new Employee(25, "Elif", "Female");
console.log(employee);
 */

//! Type intersection
//interfaceleri birlestirip icerisindeki propertyleri kullanmaak istedigimizde kullaniriz
// & ile interfaceleri birlestiririz
/* 
interface BussinessPartner {
  name: string;
  credit: number;
}

interface Identity {
  id: number;
  name: string;
}

interface Contact {
  email: string;
  phone: string;
}

type Employee = Identity & Contact;

let person1: Employee = {
  id: 3,
  name: "Elif",
  email: "elif@gmail.com",
  phone: "013122342",
};
console.log(person1);

type Employee2 = BussinessPartner & Contact;
let person2: Employee2 = {
  name: "Elif",
  credit: 2,
  email: "elif@gmail.com",
  phone: "01312",
};
console.log(person2); */

//! type guard
