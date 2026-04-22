interface PersonEx2 {
  name: string;
  age: number;
  greet(msg: string): void;
}
const Sarah: PersonEx2 = {
  name: "Sarah",
  age: 29,
  greet(msg: string) {
    console.log(`${this.name} says ${msg}`);
  },
};

Sarah.greet("How are you?");
