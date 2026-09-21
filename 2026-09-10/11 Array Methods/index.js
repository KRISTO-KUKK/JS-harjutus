const products = [
    { name: "õun", price: 2 },
    { name: "piim", price: 1 },
    { name: "leib", price: 3 }
];

console.log(products.map(product => product.name));
console.log(products.filter(product => product.price > 1));
console.log(products.find(product => product.name === "piim"));
console.log(products.find(product => product.name === "juust"));
