import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BasicComponent } from './basic/basic.component';
import { CalculatriceComponent } from './basic/calculatrice/calculatrice.component';
import { TvaComponent } from './basic/tva/tva.component';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProduitsComponent } from './produits/produits.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasicComponent,
    CalculatriceComponent,
    TvaComponent,
    WelcomeComponent,
    ProduitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
