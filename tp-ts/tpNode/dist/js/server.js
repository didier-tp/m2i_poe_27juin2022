"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //nécessite npm install -s express (pour la partie js)
const prod_api_1 = require("./prod-api");
//nécessite également le complément pour typescript
//npm install --save-dev @types/express
//la syntaxe import ... from ... est acceptée en javascript par nodeJs
//si on ajoute "type" : "module" dans dans package.json (sinon ancienne syntaxe var express= require("express"))
//et avec "module": "ES2015" dans le fichier tsconfig.json
//OU BIEN
// pas de "type" : "module" dans  package.json
// et "module": "CommonJS" dans le fichier tsconfig.json
var app = (0, express_1.default)();
app.get('/', function (req, res, next) {
    res.setHeader('Content-Type', 'text/html');
    res.write("<html> <body>");
    res.write('<p>welcome tpNode</p>');
    res.write('<a href="/api-prod/init">(re)initDatabase</a><br/>');
    res.write('<a href="/api-prod/produit">liste produits JSON</a><br/>');
    res.write("</body></html>");
    res.end();
});
app.use(prod_api_1.prodApiRouter); //tous les .get , .post du fichier prod-api.ts
app.listen(8282, function () {
    console.log("http://localhost:8282");
});
//tsc ou bien tsc -w 
//node dist/js/server.js (dans un terminal)
// et recopier http://localhost:8282
//# sourceMappingURL=server.js.map