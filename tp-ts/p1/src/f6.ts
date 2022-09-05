//dans la syntaxe d'un generic on met souvent la lettre T
//car Type (ici variable) commence par T
class ProduitV2<T>{
    constructor(public ref : T ,
                public label : string = "?",
                public prix : number = 0.0){
    }
}
  
 let pa =  new ProduitV2<number>(1,"cahier",3.6);
 console.log("pa="+JSON.stringify(pa));

 let pb =  new ProduitV2<string>("r234","cahier",3.6);
 console.log("pb="+JSON.stringify(pb));