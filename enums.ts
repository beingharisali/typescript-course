enum Days {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
const today: Days = Days.Tuesday;
console.log(`Today is ${Days[today]}`);
