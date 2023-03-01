"use strict"
let name_prom = prompt('Как тебя зовут?', 'JavaScript')
let may_great = confirm("Можно с тобой поздороваться?");
if (may_great) {alert(`Привет ${name_prom}!`)}
else {alert(`Прощай, ${name_prom}!`)}