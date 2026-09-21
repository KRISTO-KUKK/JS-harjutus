# Muutujad: `const`, `let` ja `var`

## Mis need on?

Muutuja hoiab programmis väärtust, näiteks kasutaja nime, vanust või punktisummat. Nii saab sama väärtust hiljem kasutada või vajadusel muuta.

## Süntaks

```js
const name = "Mari";
let age = 20;
var city = "Tallinn";
```

- `const`, `let` ja `var` alustavad muutuja loomist.
- `name`, `age` ja `city` on muutujate nimed.
- `=` annab muutujale väärtuse.
- `;` lõpetab käsu.

`const` sobib siis, kui muutujale ei anta hiljem uut väärtust. `let` sobib siis, kui väärtus võib muutuda. `var` esineb peamiselt vanemas JavaScripti koodis; uues koodis kasutatakse tavaliselt `const` ja `let`.

## Deklareerimine, väärtuse andmine ja muutmine

```js
let score;
score = 10;
score = 15;
```

Esimene rida loob muutuja, teine annab sellele väärtuse ja kolmas muudab väärtuse. Lõpuks on `score` väärtus `15`.

## Ploki skoobiala

Loogelised sulud `{ }` loovad ploki. `let` ja `const` on kättesaadavad ainult selle ploki sees.

```js
if (true) {
    let message = "Tere";
    console.log(message);
}

console.log(typeof message);
```

Väljund on:

```text
Tere
undefined
```

`message` on olemas ainult `if`-ploki sees. `var` ei ole ploki skoobialaga, mistõttu võib see olla nähtav ka pärast plokki. See on üks põhjus, miks uut koodi kirjutades eelistatakse `let` ja `const`.

## Kogu näite väljund

Käivita:

```text
node index.js
```

Tulemus:

```text
Nimi: Mari
Vanus: 21
Linn: Tallinn
Punktid: 15
Tere tulemast JavaScripti tundi!
Plokist väljas: undefined
var on plokist väljas nähtav
```

Väljund kasutab muutujatesse salvestatud väärtusi. `age` ja `score` näitavad viimati määratud väärtust.

## Tavaline algaja viga

`const` muutujale ei saa uut väärtust anda.

Vale:

```js
const age = 20;
age = 21;
```

Parandus:

```js
let age = 20;
age = 21;
```

## Kasutus rakenduses

`const` abil võib hoida kasutaja nime. `let` abil võib hoida ostukorvi toodete arvu, sest see saab ostmise ajal muutuda.

## Ennusta väljund

```js
let points = 1;

if (true) {
    let points = 2;
    console.log(points);
}

console.log(points);
```

Vastus: kõigepealt `2` ja seejärel `1`, sest ploki sees olev `points` on eraldi muutuja.
