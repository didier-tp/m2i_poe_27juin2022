"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
class Personne {
    constructor(prenom = "?", nom = "?", _age = 0) {
        this.prenom = prenom;
        this.nom = nom;
        this._age = _age;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        if (age >= 0)
            this._age = age;
        else
            throw "age negatif invalide";
    }
    incrementerAge() {
        this.age++;
    }
}
exports.Personne = Personne;
/*export*/ function afficherPersonne(p) {
    console.log(JSON.stringify(p));
}
//appel interne (depuis le meme fichier) d'une fonction pas exportée possible
//afficherPersonne(new Personne("jean","Bon",30));
//# sourceMappingURL=personne.js.map