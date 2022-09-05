import { Produit } from "./produit";
import express from "express" ;
import prodDao from './prod-dao';

export const prodApiRouter = express.Router();

// http://localhost:8282/api-prod/produit    
prodApiRouter.get('/api-prod/produit', function(req : express.Request, res : express.Response , next : express.NextFunction) {   
    prodDao.get_produits_by_WhereClause("WHERE prix >= 0" ,
        (err:any,rowsOfProduit:any)=>{
            if(err!=null){
                res.status(500).send({ err : err});
            }
            else res.send(rowsOfProduit);
        });
    
});

prodApiRouter.get('/api-prod/init', function(req : express.Request, res : express.Response , next : express.NextFunction) {   
    prodDao.init_produit_db();
    res.send({ message : "base reinitialisee avec table produit"});
});