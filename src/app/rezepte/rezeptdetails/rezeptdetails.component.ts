import { Component, OnInit,Input,Output } from '@angular/core';
import { Rezepte } from '../rezepte.model';

@Component({
  selector: 'app-rezeptdetails',
  templateUrl: './rezeptdetails.component.html',
  styleUrls: ['./rezeptdetails.component.scss']
})
export class RezeptdetailsComponent implements OnInit {
  // @Output() rezepte!:Rezepte
  @Input() rezepte!:Rezepte

  constructor() { }

  ngOnInit(): void {
  }

}
