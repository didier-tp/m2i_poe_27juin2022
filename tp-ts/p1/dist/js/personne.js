"use strict";
class Personne {
    constructor(prenom = "?", nom = "?", age = 0) {
        this.prenom = prenom;
        this.nom = nom;
        this.age = age;
    }
    incrementerAge() {
        this.age++;
    }
}
let p1;
p1 = new Personne("jean", "Bon", 45);
p1.incrementerAge(); //45ans vers 46ans
console.log("p1=" + JSON.stringify(p1));
let p2 = new Personne(); //avec valeurs par défaut "?" , "?" , 0
p2.incrementerAge(); //0an vers 1an
console.log("age de p2=" + p2.age);
p2.nom = "Dupond";
console.log("p2=" + JSON.stringify(p2));
