
**What the heck is the event loop anyway? | Philip Roberts | JSConf EU - Kokkuvõte**

Video rääkis sellest, kuidas JavaScript koodi käivitab ja kuidas event loop töötab. JavaScript saab korraga teha ainult ühte asja ning kasutab selleks call stack'i. Kui kasutatakse näiteks setTimeout() funktsiooni, siis tegeleb sellega brauser ning pärast läheb callback järjekorda. Event loop kontrollib, millal call stack on tühi ja siis saab callback käivituda.

Videos näidati ka seda, et kui JavaScriptis mingi kood liiga kaua töötab, siis võib veebileht selleks ajaks kinni jääda, sest brauser ei saa samal ajal teiste asjadega tegeleda.

Mida uut õppisin:

Ma ei teadnud varem täpselt, kuidas event loop töötab ja mis vahe on call stack'il ja callback queue'l. Sain teada ka seda, et setTimeout(..., 0) ei tähenda, et kood käivitatakse kohe. See peab ikka ootama, kuni call stack on tühi.

Samuti oli minu jaoks uus see, et setTimeout() ei ole otseselt JavaScripti enda osa, vaid seda pakub brauser.


**Asynchrony: Under the Hood - Shelley Vohr - JSConf EU - Kokkuvõte**

Video rääkis sellest, kuidas asünkroonne JavaScript töötab ja kuidas kasutatakse event loop'i, task queue'd ja call stack'i. Näidati, kuidas funktsioonid lähevad call stack'i ja sealt eemaldatakse, kui nende töö on tehtud. Samuti räägiti callback'idest ja sellest, kuidas liiga palju callback'e võib teha koodi raskesti loetavaks.

Videos räägiti ka promise'idest. Promise võimaldab tegeleda väärtusega, mis saadakse alles tulevikus. Promise võib õnnestuda või ebaõnnestuda ning tulemusega saab edasi töötada .then() ja .catch() abil. Lisaks selgitati microtask queue'd, kuhu lähevad promise'idega seotud tegevused.

Mida uut õppisin:

Sain paremini aru, kuidas call stack töötab siis, kui üks funktsioon kutsub välja teise funktsiooni. Minu jaoks oli uus ka see, et promise'ide callback'id lähevad microtask queue'sse, mitte tavalisse task queue'sse.

Samuti sain teada, et promise'ide puhul on oluline vigade käsitlemiseks kasutada .catch(), sest muidu võib tekkinud viga jääda korralikult käsitlemata.


**Learn All the JavaScript Basics in 20 Minutes - Kokkuvõte**

Video oli JavaScripti põhitõdedest. Seal räägiti muutujatest, andmetüüpidest, operaatoritest, if-lausetest ja loogilistest operaatoritest. Lisaks näidati while ja for tsükleid ning seda, kuidas funktsioonid, parameetrid ja return töötavad.

Video teises osas räägiti massiividest ja objektidest ning sellest, kuidas massiivi elemente läbi käia. Näidati ka forEach() meetodit. Lõpus tehti lühike sissejuhatus DOM-i ehk kuidas JavaScriptiga veebilehe elementidega töötada.

Mida uut õppisin

Suurem osa teemadest oli mulle juba tuttav, aga video aitas põhitõdesid üle korrata. Sain paremini aru forEach() kasutamisest ja sellest, kuidas massiive erinevatel viisidel läbi käia.

Samuti oli kasulik üle korrata funktsioonide parameetreid ja return kasutamist. DOM-i osa andis ka parema ülevaate sellest, kuidas JavaScripti saab kasutada veebilehe sisu muutmiseks.