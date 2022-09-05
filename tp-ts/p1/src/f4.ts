function add(x:number,y:number):number{
    return x+y;
}
/*
let add2 = function (x:number,y:number):number{
    return x+y;
}
*/
let add2 = (x:number,y:number) => {  return x+y;}

console.log(add(5,6));
console.log(add2(5,6));

function enchainerCalculEtAffichage(x:number,
                                    y:number, 
                                    fonctionDeCalcul : (x:number ,y:number) => number ){
    let res :number = fonctionDeCalcul(x,y);
    console.log("res="+res);
}
/*
enchainerCalculEtAffichage(5,6, (x:number,y:number) => {let res = x+y; return res;})
enchainerCalculEtAffichage(5,6, (x,y) => {let res = x+y; return res;})
enchainerCalculEtAffichage(5,6, (x,y) => {return x+y;})
*/
enchainerCalculEtAffichage(5,6, (x,y) =>  x+y );
enchainerCalculEtAffichage(5,6, (x,y) =>  x*y );

// A faire en TP

//1. préparer une variante de la fonction enchainerCalculEtAffichage
//avec une fonction de calcul qui a un seul paramètre

function enchainerCalculSimpleEtAffichage(x:number,
                                        fonctionDeCalcul : (x:number) => number ){
let res :number = fonctionDeCalcul(x);
console.log("res="+res);
}

//2. l'appeler avec a) un calcul de type x au carre
//                  b) un calcul de type racine carree

//enchainerCalculSimpleEtAffichage(9 , (x:number) => { let res = Math.sqrt(x); return res;})
//enchainerCalculSimpleEtAffichage(9 , (x) => { return Math.sqrt(x);})
enchainerCalculSimpleEtAffichage(9 , (x) =>  Math.sqrt(x) )
//enchainerCalculSimpleEtAffichage(9 , x =>  Math.sqrt(x) )

enchainerCalculSimpleEtAffichage(9 , (x) =>  x*x )
