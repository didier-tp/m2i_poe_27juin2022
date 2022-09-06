"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prodApiRouter = void 0;
const express_1 = __importDefault(require("express"));
const prod_dao_1 = __importDefault(require("./prod-dao"));
exports.prodApiRouter = express_1.default.Router();
// http://localhost:8282/api-prod/produit    
exports.prodApiRouter.get('/api-prod/produit', function (req, res, next) {
    prod_dao_1.default.get_produits_by_WhereClause("WHERE prix >= 0", (err, rowsOfProduit) => {
        if (err != null) {
            res.status(500).send({ err: err });
        }
        else
            res.send(rowsOfProduit);
    });
});
// http://localhost:8282/api-prod/produit/1 ou ...   
exports.prodApiRouter.get('/api-prod/produit/:id', function (req, res, next) {
    let idProd = Number(req.params.id);
    /*
    //ancienne version sans Promise et avec callback:
    prodDao.get_produit_by_id(idProd ,
        (err:any,produit:any)=>{
            if(err!=null){
                res.status(500).send({ err : err});
            }
            else res.send(produit);
        });
    */
    prod_dao_1.default.get_produit_by_id_promise(idProd)
        .then((produit) => { res.send(produit); })
        .catch((err) => { res.status(500).send({ err: err }); });
});
exports.prodApiRouter.get('/api-prod/init', function (req, res, next) {
    prod_dao_1.default.init_produit_db();
    res.send({ message: "base reinitialisee avec table produit" });
});
//# sourceMappingURL=prod-api.js.map