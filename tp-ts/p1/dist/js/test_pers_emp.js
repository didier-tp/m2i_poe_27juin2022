"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const personne_1 = require("./personne");
const employe_1 = require("./employe");
let e1;
e1 = new employe_1.Employe("axelle", "Aire", 25); //ou bien e1 = new Employe("axelle" , "Aire" , 25 , "developpeur" , 2500);
e1.fonction = "developpeur";
e1.salaire = 2500;
console.log("e1=" + JSON.stringify(e1));
//affiche e1={"prenom":"axelle","nom":"Aire","_age":25,"fonction":"developpeur","salaire":2500}
let p1;
p1 = new personne_1.Personne("jean", "Bon", 45);
p1.incrementerAge(); //45ans vers 46ans
console.log("p1=" + JSON.stringify(p1));
try {
    p1.age = -5; // ça appelle automatiquement set age(-5)
}
catch (ex) {
    console.log("exception attendue=" + ex);
}
p1.age = 35; // ça appelle automatiquement set age(35)
console.log("p1=" + JSON.stringify(p1));
let p2 = new personne_1.Personne(); //avec valeurs par défaut "?" , "?" , 0
p2.incrementerAge(); //0an vers 1an
console.log("age de p2=" + p2.age);
p2.nom = "Dupond";
console.log("p2=" + JSON.stringify(p2));
