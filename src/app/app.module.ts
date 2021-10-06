import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';


import { RezepteComponent } from './rezepte/rezepte.component';
import { RezeptlisteComponent } from './rezepte/rezeptliste/rezeptliste.component';
import { RezeptdetailsComponent } from './rezepte/rezeptdetails/rezeptdetails.component';
import { RezeptitemComponent } from './rezepte/rezeptliste/rezeptitem/rezeptitem.component';
import { EinkauflisteComponent } from './einkaufliste/einkaufliste.component';
import { EinkauflisteEditComponent } from './einkaufliste/einkaufliste-edit/einkaufliste-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RezepteComponent,
    RezeptlisteComponent,
    RezeptdetailsComponent,
    RezeptitemComponent,
    EinkauflisteComponent,
    EinkauflisteEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
