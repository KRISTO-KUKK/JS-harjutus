const age = 20;
const loggedIn = true;

console.log(age === 20);
console.log("5" === 5);
console.log(age > 18 && loggedIn);
console.log(!loggedIn);

const message = age >= 18 && loggedIn ? "Sissepääs lubatud" : "Sissepääs keelatud";
console.log(message);

if (age < 13) {
    console.log("Laps");
} else if (age < 18) {
    console.log("Noor");
} else {
    console.log("Täiskasvanu");
}

console.log(Boolean(""), Boolean(0), Boolean(null), Boolean(undefined));
