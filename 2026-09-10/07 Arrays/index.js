const names = ["Mari", "Jaan", "Kati"];
console.log(names[0], names.length);
console.log(names.includes("Jaan"));

names.push("Oskar");
console.log(names);
console.log(names.pop());

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for (const name of names) {
    console.log(`Tere, ${name}!`);
}

for (let i = 0; i < names.length; i++) {
    if (names[i] === "Jaan") {
        break;
    }
    console.log("Enne Jaani:", names[i]);
}
