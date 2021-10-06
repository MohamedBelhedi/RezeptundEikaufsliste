import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loadedfeature='rezept'
  title = 'einkaufliste';
  onNavigate(feature:string){
    this.loadedfeature=feature;
  }
}
