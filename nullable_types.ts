let username: string | null = "Glitcher";
let age_ex: number | null = null;

function greet_user(username: string | null) {
  if (username === null) {
    console.log(`Hello, Guest`);
  } else {
    console.log(`Hello, ${username}`);
  }
}

greet_user("Glitcher");
greet_user(null);
