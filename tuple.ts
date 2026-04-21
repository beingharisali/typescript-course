// defining a tuple type
let article: readonly [number, string, boolean] = [11, "Title One", true];

// assigning a new tuple value to article variable
article = [12, "Title One", true];

// trying to push a new element into a tuple (will result in error)
// article.push("New");
console.log(article);

// destructuring the tuple into individual element
const [id, title, published] = article;
console.log(id);
console.log(title);
console.log(published);
