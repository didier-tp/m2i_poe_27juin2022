import { Component, OnInit } from '@angular/core';
import { PreferenceService } from '../common/preference.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public preferenceService : PreferenceService) { 
    //injection de dépendance effectuée automatiquement 
    //sur preferenceService
  }

  ngOnInit(): void {
  }

}
