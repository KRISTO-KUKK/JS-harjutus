// Repo: https://github.com/KRISTO-KUKK/JS-harjutus

// siin on lihtsalt kasutajate andmed, mida all pool kasutame
const users = [
    { id: 1, name: "Mari", age: 22, active: true },
    { id: 2, name: "Jüri", age: 17, active: false },
    { id: 3, name: "Kati", age: 31, active: true },
    { id: 4, name: "Martin", age: 19, active: false },
    { id: 5, name: "Laura", age: 26, active: true }
];

// prindib kõikide kasutajate nimed välja
users.forEach(user => console.log(user.name));

// võtame välja need kasutajad kes on aktiivsed
const activeUsers = users.filter(user => user.active);
console.log(activeUsers);

// vähemalt 18 aastased kasutajad
const adults = users.filter(user => user.age >= 18);
console.log(adults);

// teeme uue massiivi ainult nimedega
const names = users.map(user => user.name);
console.log(names);

// otsime kasutaja kelle id on 3
const userWithId3 = users.find(user => user.id === 3);
console.log(userWithId3);

// see annab vastuseks kas kasutaja on aktiivne või mitte
function getUserStatus(user) {
    return user.active ? "Aktiivne" : "Mitteaktiivne";
}

console.log(getUserStatus(users[0]));

// noole funktsioon tervituse jaoks
const getGreeting = user => `Tere, ${user.name}! Sa oled ${user.age} aastat vana.`;
console.log(getGreeting(users[0]));

// võtame esimesest kasutajast nime ja vanuse eraldi välja
const { name, age } = users[0];
console.log(name, age);

// lisame ühe uue kasutaja, algne users jääb samaks
const newUser = { id: 6, name: "Karl", age: 24, active: true };
const usersWithKarl = [...users, newUser];
console.log(usersWithKarl);
console.log(users.length, usersWithKarl.length);

// kopeerime kasutaja ja lisame talle aadressi
const userWithAddress = {
    ...users[0],
    address: { city: "Tallinn" }
};
console.log(userWithAddress.address?.city ?? "Linn puudub");
// kui aadressi ei ole siis tuleb see tekst
console.log(users[1].address?.city ?? "Linn puudub");

// näitab iga kasutaja staatust nime järel
users.forEach(user => {
    console.log(`${user.name} – ${getUserStatus(user)}`);
});

// sortimiseks teeme koopia, siis paneme vanuse järgi väiksemast suuremaks
const sortedUsers = [...users].sort((a, b) => a.age - b.age);
console.log(sortedUsers);
