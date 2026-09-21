const user = {
    name: "Mari",
    contact: { email: "mari@example.com" },
    age: 0
};

console.log(user.name);
console.log(user["contact"].email);
user.city = "Tallinn";
user.name = "Maria";
console.log(user.city);
console.log(user.phone?.number);
console.log(user.age ?? 18);
console.log(user.age || 18);
