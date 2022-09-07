
import express from "express" ; //nécessite npm install -s express (pour la partie js)
import { prodApiRouter } from "./prod-api";
                            //nécessite également le complément pour typescript
                            //npm install --save-dev @types/express
//la syntaxe import ... from ... est acceptée en javascript par nodeJs
//si on ajoute "type" : "module" dans dans package.json (sinon ancienne syntaxe var express= require("express"))
//et avec "module": "ES2015" dans le fichier tsconfig.json

//OU BIEN
// pas de "type" : "module" dans  package.json
// et "module": "CommonJS" dans le fichier tsconfig.json


var app = express();

// CORS enabled with express/node-js :
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    //ou avec "www.xyz.com" à la place de "*" en production

    res.header("Access-Control-Allow-Methods",
               "POST, GET, PUT, DELETE, OPTIONS"); 
    //default: GET 

    res.header("Access-Control-Allow-Headers",
               "Origin, X-Requested-With, Content-Type, Accept");

    next();
});


//les routes en /html/... seront gérées par express par
//de simples renvois des fichiers statiques du répertoire "./html"
//app.use('/html', express.static(__dirname+"/html"));
app.use('/html', express.static("html"));

app.get('/', function(req : express.Request, res : express.Response , next : express.NextFunction) {
    res.setHeader('Content-Type', 'text/html');
    res.write("<html> <body>");
    res.write('<p>welcome tpNode</p>');
    res.write('<a href="/api-prod/init">(re)initDatabase</a><br/>');
    res.write('<a href="/api-prod/produit">liste produits JSON</a><br/>');
    res.write('<a href="/api-prod/produit/1">produit 1 JSON</a><br/>');
    res.write('<a href="/html/ajax_produits.html">produits via ajax</a><br/>');
    res.write("</body></html>");
    res.end();
    });

app.use(prodApiRouter); //tous les .get , .post du fichier prod-api.ts


app.listen(8282 , function () {
    console.log("http://localhost:8282");
});

//tsc ou bien tsc -w 
//node dist/js/server.js (dans un terminal)
// et recopier http://localhost:8282