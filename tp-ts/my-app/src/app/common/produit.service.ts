import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from './produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(public http : HttpClient) {
    //http (de type HttpClient) est injecté ici
    //pour pouvoir appeler via http/ajax des WS REST
   }

   getProduits$() : Observable<Produit[]>{
      //Attention depuis angular qui fonctionne en dev sur http://localhost:4200
      //on ne peut appeler des WS REST ailleurs (http://localhost:8282 ou ...)
      //que le serveur comporte des autorisations CORS
      let urlWs = "http://localhost:8282/api-prod/produit";
      return this.http.get<Produit[]>(urlWs);
   }

   //....
}
