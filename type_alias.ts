type MyString = string;
let my_name: MyString = "John";
type MyStringOrNumber = string | number;
let my_value: MyStringOrNumber = 10;

// object example

type Employee = {
  name: string;
  age: number;
  email?: string;
};

const alice: Employee = {
  name: "Alice",
  age: 40,
  email: "alice@gmail.com",
};

const bob: Employee = {
  name: "Bob",
  age: 30,
};
console.log(alice);
console.log(bob);
