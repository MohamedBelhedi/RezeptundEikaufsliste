import { Component, OnInit,Input } from '@angular/core';
import {Rezepte} from './rezepte.model'

@Component({
  selector: 'app-rezepte',
  templateUrl: './rezepte.component.html',
  styleUrls: ['./rezepte.component.scss']
})
export class RezepteComponent implements OnInit {
  selectedRezepte!:Rezepte;


  constructor() { }

  ngOnInit(): void {
   
  }

  
}
