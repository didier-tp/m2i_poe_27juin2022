"use strict";
let tab1;
tab1 = [6, 2, 8];
//tab1 = [ 6 , 2 , 8 , "abc"] ; //refusé
console.log("longueur de tab1=" + tab1.length);
tab1.push(12); //ajoute la valeur 12 en fin de tableau
//console.log("tab1="+tab1);
console.log("tab1 au format JSON=" + JSON.stringify(tab1));
//déclarer et intialiser un tableau de string
//tabJours avec des valeurs "lundi" , "mardi" , ....
let tabJours;
tabJours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi"];
tabJours.push("samedi");
tabJours.push("dimanche");
//construire un autre tableau tabJoursMaj à partir du tableau tabJours
//avec des valeurs de "LUNDI" , ...
let tabJoursMaj = []; //tableau vide au tout début
/*
for(let i=0;i<tabJours.length;i++){
    tabJoursMaj.push(tabJours[i].toUpperCase());
}
*/
for (let i in tabJours) {
    tabJoursMaj.push(tabJours[i].toUpperCase());
}
/*
for(let jour of tabJours){
    tabJoursMaj.push(jour.toUpperCase());
}
*/
//afficher tabJoursMaj
console.log("tabJoursMaj au format JSON=" + JSON.stringify(tabJoursMaj));
//# sourceMappingURL=f3.js.map