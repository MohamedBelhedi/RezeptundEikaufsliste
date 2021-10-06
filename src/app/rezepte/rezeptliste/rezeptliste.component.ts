import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {Rezepte} from '../rezepte.model'

@Component({
  selector: 'app-rezeptliste',
  templateUrl: './rezeptliste.component.html',
  styleUrls: ['./rezeptliste.component.scss']
})
export class RezeptlisteComponent implements OnInit {
 @Output() rezepteWasSelected= new EventEmitter<Rezepte>();
  rezepte:Rezepte[]=[
    new Rezepte('Test Rezept','das ist ein Test','./image/281128.jpg')
    // 'https://biancazapatka.com/wp-content/uploads/2019/04/mushroom-pasta-spinach-recipe-easy-best-vegan-healthy-pasta-spinat-rezept-einfach-champignons-e1555498852212-720x1008.jpg'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRezeptSelected(rezepte:Rezepte){
    this.rezepteWasSelected.emit(rezepte);


  }

}
