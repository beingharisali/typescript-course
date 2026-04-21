type FirstType = {
  name: string;
  age: number;
};

type SecondType = {
  address: string;
  phone: string;
};

type CombinedType = FirstType & SecondType;
const person: CombinedType = {
  name: "John Doe",
  age: 30,
  address: "USA",
  phone: "111222333",
};
