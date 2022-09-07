import { Component, OnInit } from '@angular/core';
import { Produit } from '../common/produit';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {

  tabProduits :Produit[] = [
    new Produit(1 , "cahier" , 3.5),
    new Produit(2 , "stylo" , 1.5) ,
    new Produit(3 , "classeur" , 5.5)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
