# 24/09/2026 - Node.js harjutus

Seekord harjutasin Node.js-i ja tegin väikse task API. Node.js on runtime, mis lubab JavaScripti käivitada ka väljaspool brauserit. Sellel ei ole `document` objekti, sest terminalis ei ole veebilehte, mida muuta.

## Käivitamine

Kontrollisin versioone nii:

```bash
node --version
npm --version
```

Siis kaustas:

```bash
npm install
npm start
```

Terminali näidet saab eraldi proovida:

```bash
npm run hello
```

See ainult käivitab JavaScripti faili. Veebiserver tekib siis, kui Expressi rakendus kasutab `app.listen()`.

## Mida API oskab

- `GET /api/health` annab `{ "status": "ok" }`
- `GET /api/tasks` annab kõik taskid
- `GET /api/tasks?completed=true` filtreerib tehtud taskid
- `GET /api/tasks/2` otsib ühe taski id järgi
- `POST /api/tasks` lisab taski, näiteks `{ "title": "Learn Express" }`
- `PATCH /api/tasks/2` muudab `title` või `completed` väärtust
- `DELETE /api/tasks/2` kustutab taski ja vastus on 204 ilma body-ta

POST-i juures trimmin pealkirja ja kontrollin, et see ei oleks tühi. Reacti kontrollist üksi ei piisa, sest backendile võib requesti saata ka mingi muu programm.

## Tavaline viga

Query väärtused tulevad stringina. Näiteks `?completed=false` ei ole boolean `false`, vaid tekst `"false"`. Kui lihtsalt kontrollida `if (completed)`, loetakse see tõeks. Sellepärast võrdlen siin täpselt tekstiga `"true"` ja `"false"`.

## Failide mõte

`src/tasks.js` hoiab andmeid ja korduvkasutatavaid funktsioone. `src/app.js` sisaldab route'e ja ekspordib rakenduse. `src/server.js` paneb serveri päriselt kuulama. See jaotus on kasulik, sest appi saab hiljem testides importida ilma serverit eraldi käivitamata.

Andmed on praegu ainult mälus, seega serveri restartimisel lisatud taskid kaovad. Järgmine kord võiks selle JSON faili salvestada.
