// install typescript
// check installed or not by (tsc -v)
// tsc --init(to use typescript)

// _____________________________Annotation ______________________________________

// String

// let myName: string = "Akash";
// console.log(myName);

// // Number

// const num: number = 33;
// console.log(num);

// //boolean

// const bool: boolean = true;
// console.log(bool);
// _______________________________inferring__________________________________________

// let m = "Akash";
// // m = 12; ---->> Type 'number' is not assignable to type 'string'(same for other also )
// console.log(typeof m);

// ____________________________________Any____________________________________________

// let n: any = 12; store anything
// console.log( n);
// n = "akash";  not give error
// console.log(n);
// _______________________________Function parameter___________________________________

// function add(n: number) {
//   return n ;
// }
// console.log(add(4));

// Arrow function_____________________________

// const mul = (x: number, y: number) => x * y;
// const res = mul(2, 3);
// console.log(res);

// default parameter___________________________

// function greet(person: string = "akash") {
//   return `good morning ${person}.`;
// }
// console.log(greet("arjun"));
// console.log(greet());

// return annotation____________________________

// function add(a: number, b: number): number {
//   return a + b;
// }
// console.log(add(3, 5));

// arrow function____________

// const double =(a: number): number => a * a;
// console.log(double(3));

// void return type________________

// function mssg(msg: string): void {
//   console.log(`hello this message ${msg}`);
// }
// mssg("from the calling function ");

// __________________________________________Never keyword__________________________________________

// function thError(s: string): never {

//   throw new Error(s);
// }
// ___________________________________________Arrays type___________________________________________

// square[]notatation

// const num: number[] = [1, 2, 3, 4];
// num.push(7);
// console.log(num);

// angle bracket notation <>

// const item: Array<number> = [1, 4, 3];
// item.push(8);
// console.log(item);
// item.pop();
// console.log(item);
// ______________________________________multi dimensional array______________________________________

// const mulDi: number[][] = [
//   [1, 2, 3],
//   [4, 6, 7, 8],
// ];

// console.log(mulDi);
// _______________________________________Objects_______________________________________

// const person: { fn: string; ln: string; age: number } = {
//   fn: "Akash",
//   ln: "deep",
//   age: 22,
// };
// console.log(`Name ${person.fn}${person.ln} and age is ${person.age}`);

// function person(): { fn: string; ln: string; age: number } {
//   return {
//     fn: "akash",
//     ln: "deep",
//     age: 22,
//   };
// }

// console.log(person());
// ______________________________________________type alias______________________________________________

// type person = {
//   name: string;
//   age: number;
//   readonly location: string; //for read only we cant change value of this
//   email?: string; //its optional when we add ? sign (we can add or ignore this)
// };
// const p: person = {
//   name: "akash",
//   age: 22,
//   email: "akash@gmail.com",
//   location: "india",
// };
// p.name = "akashdeep"; can change
// p.location = "usa"; gives error

// const info = (p: person) => {
//   return `Name of person is ${p.name} and the age is ${p.age} and he is from ${p.location}`;
// };

// console.log(info({ name: "Akash", location: "india", age: 22 }));

// function info(p: person) {
//   return `Name: ${p.name} \nAge: ${p.age} \nlocation: ${p.location}`;
// }

// console.log(info({ name: "akash", age: 22, location: "india" }));

// function info(p: person) {
//   return `Name: ${p.name} \nAge: ${p.age} \nlocation: ${p.location} \n`;
// }

// console.log(
//   info({ name: "akash", age: 22, location: "india" })
// );

//_____________________________________________intersection type_____________________________________________

type UInfo = {
  name: string;
  age: number;
  loc: string;
};
type AccDetail = {
  acNum: number;
  email: string;
  pass: string;
};

type UserDet = UInfo & AccDetail; //two types we connected

const us: UserDet = {
  name: "akash",
  age: 22,
  loc: "india",
  acNum: 1234567,
  email: "aka@gm.com",
  pass: "asdfgre123456",
};

console.log(us);
console.log(
  `name ${us.name}\naccNumber:${us.acNum} \nlocation:${us.loc} \nemail:${us.email}`
);
