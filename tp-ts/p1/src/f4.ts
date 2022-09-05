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