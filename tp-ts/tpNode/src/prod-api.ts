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

// http://localhost:8282/api-prod/produit/1 ou ...   
prodApiRouter.get('/api-prod/produit/:id', function(req : express.Request, res : express.Response , next : express.NextFunction) {   
    let idProd = Number(req.params.id); 
    prodDao.get_produit_by_id(idProd ,
        (err:any,produit:any)=>{
            if(err!=null){
                res.status(500).send({ err : err});
            }
            else res.send(produit);
        });
    
});

prodApiRouter.get('/api-prod/init', function(req : express.Request, res : express.Response , next : express.NextFunction) {   
    prodDao.init_produit_db();
    res.send({ message : "base reinitialisee avec table produit"});
});