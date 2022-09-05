class Produit{
    constructor(public id : number = 0,
                public label : string = "?",
                public prix : number = 0.0){
    }
}

let tabProduits = [  
    new Produit(1,"cahier",3.6) ,
    new Produit(2 ,"stylo" , 2.6),
    new Produit(3,"gomme",1.6) ,
    new Produit(4 ,"classeur" , 6.6)
]

console.log(JSON.stringify(tabProduits));
//tabProduits.sort((pa,pb)=>{ return pa.prix - pb.prix});
tabProduits.sort((pa,pb)=>pa.prix - pb.prix);
console.log("apres tri selon prix croissants : " + JSON.stringify(tabProduits));
tabProduits.sort((pa,pb)=>pb.prix - pa.prix);
console.log("apres tri selon prix décroissants : " + JSON.stringify(tabProduits));
tabProduits.sort((pa,pb)=>pa.label.localeCompare(pb.label));
console.log("apres tri selon label croissants : " + JSON.stringify(tabProduits));