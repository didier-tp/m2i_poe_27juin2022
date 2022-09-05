import express from "express" ; //nécessite npm install -s express

var app = express();

app.get('/', function(req, res , next) {
    res.setHeader('Content-Type', 'text/html');
    res.write("<html> <body>");
    res.write('<p>welcome tpNode</p>');
    res.write('<a href="/api-prod/produit">liste produits JSON</a>');
    res.write("</body></html>");
    res.end();
    });

app.listen(8282 , function () {
    console.log("http://localhost:8282");
});

//node server.js (dans un terminal)
// et recopier http://localhost:8282