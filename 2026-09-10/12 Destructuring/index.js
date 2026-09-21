const colors = ["punane", "sinine"];
const [first, second] = colors;
const moreColors = [...colors, "roheline"];

const user = { name: "Mari", age: 20 };
const { name, age } = user;
const olderUser = { ...user, age: 21 };
user.age = 21;
const shallowCopy = { ...user };

console.log(first, second);
console.log(moreColors);
console.log(name, age);
console.log(olderUser);
console.log(shallowCopy);
