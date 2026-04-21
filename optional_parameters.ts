function greetOptional(name: string, age?: number) {
  if (age !== undefined) {
    console.log(`Hello ${name}, you are ${age} years old`);
  } else {
    console.log(`Hello ${name}`);
  }
}
greetOptional("John");
greetOptional("Anna", 32);
