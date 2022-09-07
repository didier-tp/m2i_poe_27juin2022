import { Component, OnInit } from '@angular/core';
import { PreferenceService } from '../common/preference.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public preferenceService : PreferenceService) { 
    //injection de dépendance effectuée automatiquement 
    //sur preferenceService
  }

  ngOnInit(): void {
  }

}
