import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import {Rezepte} from '../../rezepte.model'

@Component({
  selector: 'app-rezeptitem',
  templateUrl: './rezeptitem.component.html',
  styleUrls: ['./rezeptitem.component.scss']
})
export class RezeptitemComponent implements OnInit {
    @Input()
  rezepte!: Rezepte;
 @Output() rezeptSelected=new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }
  onSelect(){
    this.rezeptSelected.emit();

  }

}
