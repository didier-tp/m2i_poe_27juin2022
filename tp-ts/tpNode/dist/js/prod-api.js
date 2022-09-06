"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    return __awaiter(this, void 0, void 0, function* () {
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
        /*
        // seconde version avec Promise (mais sans async/await):
        prodDao.get_produit_by_id_promise(idProd)
        .then((produit)=>{  res.send(produit); })
        .catch((err:any)=>{ res.status(500).send({ err : err}); });
        */
        //troisième version qui appelle une fonction retournant une Promesse
        //via async/await :
        try {
            //NB: le mot clef await ne peut être utilisé qu'à l'intérieur
            //d'une fonction préfixée par le mot clef async (enn ligne 20)
            let produit = yield prod_dao_1.default.get_produit_by_id_promise(idProd);
            res.send(produit);
        }
        catch (e) {
            res.status(500).send({ err: e });
        }
    });
});
exports.prodApiRouter.get('/api-prod/init', function (req, res, next) {
    prod_dao_1.default.init_produit_db();
    res.send({ message: "base reinitialisee avec table produit" });
});
//# sourceMappingURL=prod-api.js.map