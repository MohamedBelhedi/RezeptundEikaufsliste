import { Component, ElementRef, OnInit,ViewChild,EventEmitter,Output } from '@angular/core';
import { Zutaten } from 'src/app/shared/zutaten.model';

@Component({
  selector: 'app-einkaufliste-edit',
  templateUrl: './einkaufliste-edit.component.html',
  styleUrls: ['./einkaufliste-edit.component.scss']
})
export class EinkauflisteEditComponent implements OnInit {
 @ViewChild('nameinput') nameinputRef!:ElementRef;
 @ViewChild('amountinput') amountinputRef!:ElementRef;
 @Output() zutatenHinzufügen= new EventEmitter<Zutaten>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onAdd(){
    const zutatenName=this.nameinputRef.nativeElement.value;
    const zutatenAmount=this.amountinputRef.nativeElement.value;
    const neuZutaten=new Zutaten(zutatenName,zutatenAmount);
    this.zutatenHinzufügen.emit(neuZutaten)
    return false;

  }


}
