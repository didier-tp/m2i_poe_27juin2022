"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employe = void 0;
const personne_1 = require("./personne");
//Employe heritant de Personne
class Employe extends personne_1.Personne {
    /*
    fonction : string ="?";
    salaire : number = 0;

    constructor(prenom : string = "?",
                nom : string = "?",
                age : number = 0){
        super(prenom,nom,age);
    }
    */
    constructor(prenom = "?", nom = "?", age = 0, fonction = "?", salaire = 0) {
        super(prenom, nom, age);
        this.fonction = fonction;
        this.salaire = salaire;
    }
}
exports.Employe = Employe;
//# sourceMappingURL=employe.js.map