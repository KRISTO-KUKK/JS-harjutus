Mida õppisin?

React on tegelikult lihtsalt teek kasutajaliidese ehitamiseks, aga Next.js on terve raamistik selle ümber. Next annab sulle automaatse ruutimise (failide põhjal), serveripoolse renderduse (SSR/SSG, et leht laeks kiiremini ja Google leiaks paremini üles) ja saad samas projektis otse backendi koodi ka kirjutada.

Sest App Routeris on komponendid vaikimisi serveripoolsed. Loenduril on aga vaja interaktiivsust – ehk useState olekut ja onClick vajutust. Need asjad saavad töötada ainult brauseris, nii et 'use client' ütlebki Nextile, et yo, saada see osa koodist brauserisse täitmiseks.

See jookseb puhtalt serveris (Node.js peal). Brauserisse ei jõua sellest koodist tippugi, brauser teeb lihtsalt sinna päringu ja saab vastuse kätte.

Mõlemad on tegelikult backend marsruudid. Nad võtavad HTTP päringuid vastu (GET, POST jms), teevad serveris oma loogika ära ja viskavad JSON vastuse tagasi. Vahe on peamiselt selles, et Nextis määrab marsruudi kaustapuu struktuur, mitte app.get() koodis.

Sest kõike, mis brauserisse saadetakse, saab igaüks DevToolsiga (Inspect element) otse vaadata. Kui paned oma API võtmed või andmebaasi paroolid kliendi poolele, on need praktiliselt avalikud ja keegi võib su teenuseid kurjasti ära kasutada või andmed pange panna. Serveris on need turvaliselt peidus.