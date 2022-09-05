import express from "express"; //nécessite npm install -s express (pour la partie js)
//nécessite également le complément pour typescript
//npm install --save-dev @types/express
//la syntaxe import ... from ... est acceptée en javascript par nodeJs
//si on ajoute "type" : "module" dans dans package.json (sinon ancienne syntaxe var express= require("express"))
class Produit {
    constructor(id = 0, label = "?", prix = 0.0) {
        this.id = id;
        this.label = label;
        this.prix = prix;
    }
}
let tabProduits = [
    new Produit(1, "cahier", 3.6),
    new Produit(2, "stylo", 2.6),
    new Produit(3, "gomme", 1.6),
    new Produit(4, "classeur", 6.6)
];
var app = express();
app.get('/', function (req, res, next) {
    res.setHeader('Content-Type', 'text/html');
    res.write("<html> <body>");
    res.write('<p>welcome tpNode</p>');
    res.write('<a href="/api-prod/produit">liste produits JSON</a>');
    res.write("</body></html>");
    res.end();
});
// http://localhost:8282/api-prod/produit    
app.get('/api-prod/produit', function (req, res, next) {
    res.send(tabProduits); //res.send() permet de renvoyer un résultat 
    //qui est un objet javascript ou un tableau qui sera automatiquement converti en JSON
    //resultat dans navigateur: [{"id":1,"label":"cahier","prix":3.6},{"id":2,"label":"stylo","prix":2.6},{"id":3,"label":"gomme","prix":1.6},{"id":4,"label":"classeur","prix":6.6}]
});
app.listen(8282, function () {
    console.log("http://localhost:8282");
});
//tsc ou bien tsc -w 
//node dist/js/server.js (dans un terminal)
// et recopier http://localhost:8282
//# sourceMappingURL=server.js.map