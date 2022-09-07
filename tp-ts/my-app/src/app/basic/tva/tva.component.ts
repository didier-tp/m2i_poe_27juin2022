import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tva',
  templateUrl: './tva.component.html',
  styleUrls: ['./tva.component.scss']
})
export class TvaComponent implements OnInit {

  tauxPossibles : number[] = [ 0 , 5 , 10 , 15 , 20];
  ht :number = 0;
  tauxTva : number =0; //en % (0 , 10, 20)
  tva : number = 0;
  ttc : number = 0;

  onCalculerTvaEtTtc(){
    this.tva = this.ht * this.tauxTva / 100;
    this.ttc = Number(this.ht) + Number(this.tva);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
