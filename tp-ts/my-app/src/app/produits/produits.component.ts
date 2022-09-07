import { Component, OnInit } from '@angular/core';
import { Produit } from '../common/produit';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {

  produit : Produit = new Produit(); //copie d'un produit selectionné ou bien nouveau produit à ajouter
  prodSel : Produit | null = null; //référence vers un produit sélectionné


  //tableau des produits existants et à efficher:
  tabProduits :Produit[] = [
    new Produit(1 , "cahier" , 3.5),
    new Produit(2 , "stylo" , 1.5) ,
    new Produit(3 , "classeur" , 5.5)
  ];

  cloneObject(obj : object) :object{
   return JSON.parse(JSON.stringify(obj));
  }

  onSelectionnerProduit(p: Produit){
    this.prodSel = p;
    this.produit = <Produit> this.cloneObject(p);
  }

  onAjoutProduit(){
    //this.tabProduits.push(this.produit);// v1 fonctionne pas bien , manque un clonage
    this.tabProduits.push(<Produit> this.cloneObject(this.produit));
    this.prodSel = null;
  }

  onUpdateProduit(){
    if(this.prodSel != null){
      this.prodSel = <Produit> this.cloneObject(this.produit); //à améliorer
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
