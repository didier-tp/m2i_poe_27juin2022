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
prodApiRouter.get('/api-prod/produit/:id', async function(req : express.Request, res : express.Response , next : express.NextFunction) {   
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
  try{
    //NB: le mot clef await ne peut être utilisé qu'à l'intérieur
    //d'une fonction préfixée par le mot clef async (en ligne 20)
     let produit = await prodDao.get_produit_by_id_promise(idProd);
     res.send(produit);
  }catch(e){
    res.status(500).send({ err : e});
  }
});

prodApiRouter.get('/api-prod/init', function(req : express.Request, res : express.Response , next : express.NextFunction) {   
    prodDao.init_produit_db();
    res.send({ message : "base reinitialisee avec table produit"});
});