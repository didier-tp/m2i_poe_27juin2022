import { Personne } from "./personne";


//Employe heritant de Personne
export class Employe extends Personne{
    /*
    fonction : string ="?";
    salaire : number = 0;

    constructor(prenom : string = "?",
                nom : string = "?",
                age : number = 0){
        super(prenom,nom,age);
    }
    */

    constructor(prenom : string = "?",
                nom : string = "?",
                age : number = 0,
                public fonction : string = "?",
                public salaire :number = 0){
        super(prenom,nom,age);
    }
}

