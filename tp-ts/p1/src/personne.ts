export class Personne{

   constructor(public prenom : string ="?" ,
               public nom :string = "?"  , 
               private _age : number = 0){
   }
   
   public get age():number {
    return this._age;
   }

   public set age(age:number){
      if(age>=0) 
          this._age = age;
      else throw "age negatif invalide";
   }


   incrementerAge():void{
    this.age++;
   }
}

/*export*/ function afficherPersonne(p : Personne){
    console.log(JSON.stringify(p));
}

//appel interne (depuis le meme fichier) d'une fonction pas exportée possible
//afficherPersonne(new Personne("jean","Bon",30));
