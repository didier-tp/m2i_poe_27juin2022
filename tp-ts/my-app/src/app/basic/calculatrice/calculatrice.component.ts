import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.scss']
})
export class CalculatriceComponent implements OnInit {

  a :number = 0;
  b :number = 0;
  res :number =0;

  onCalculer(op:string){
    switch(op){
      case "+":
        this.res= Number(this.a) + Number(this.b); break;
      case "-":
          this.res= this.a - this.b; break;
      case "*":
            this.res= this.a * this.b; break;
      default :
            this.res=0;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
