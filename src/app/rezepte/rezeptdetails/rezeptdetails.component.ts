import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Rezepte } from '../rezepte.model';

@Component({
  selector: 'app-rezeptdetails',
  templateUrl: './rezeptdetails.component.html',
  styleUrls: ['./rezeptdetails.component.scss']
})
export class RezeptdetailsComponent implements OnInit {
  // @Output() rezepte!:Rezepte
  @Output() featureSelected= new EventEmitter<string>();
  @Input() rezepte!:Rezepte
  collapsed=true;


  constructor() { }

  ngOnInit(): void {
  }
  onSelect(feature:string){
    this.featureSelected.emit(feature)

}

}
