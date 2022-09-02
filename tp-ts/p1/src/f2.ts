//let b :boolean = false;

//let b : boolean | undefined; //valeur par defaut undefined si jamais initialisée.
//console.log(b); //affiche undefined
//b = false;
//console.log(b); //affiche false

let b = false; //en affectant une valeur au même moment que la déclaration ,
               //typescript en déduit que le type de b est "boolean"
//b = "abc"; //refusé par typescript qui considère que b est un boolean
b=true;
console.log('b='+b);