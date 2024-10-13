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

// let n: any = 12;
// console.log( n);
// n = "akash";
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

const item: Array<number> = [1, 4, 3];
item.push(8);
console.log(item);
item.pop();
console.log(item);
