
import { Component, ElementRef, OnInit,ViewChild,EventEmitter,Output, Renderer2 } from '@angular/core';
import { Zutaten } from 'src/app/shared/zutaten.model';

@Component({
  selector: 'app-einkaufliste-edit',
  templateUrl: './einkaufliste-edit.component.html',
  styleUrls: ['./einkaufliste-edit.component.scss']
})
export class EinkauflisteEditComponent implements OnInit {
 @ViewChild('nameinput') nameinputRef!:ElementRef;
 @ViewChild('amountinput') amountinputRef!:ElementRef;
 @ViewChild('ul') ulElement!: ElementRef;
 @Output() zutatenHinzufügen= new EventEmitter<Zutaten>();
//  @Output() deleteRequest= new EventEmitter<Zutaten>();
 
 
  
  constructor() { }

  ngOnInit(): void {
  }

  onAdd(){
    const zutatenName=this.nameinputRef.nativeElement.value;
    const zutatenAmount=this.amountinputRef.nativeElement.value;
    const neuZutaten=new Zutaten(zutatenName,zutatenAmount);
    this.zutatenHinzufügen.emit(neuZutaten)
    return true;

  }
onLeer(){

  // this.renderer2.removeChild(this.el.nativeElement,this.ulElement.nativeElement)

  // this.ulElement.nativeElement.remove()
  const element=document.getElementById("ul");
  element!.outerHTML=""
  return alert("Nach dem leeren des Zutatenfeldes,bitte die Seite aktuellisieren mit dem ↪ oder mit STRG+R")
  // element!.innerHTML="<style> text-decoration: line-through;</style>";
 
  // element?.classList.remove("list-group-item")
  // const zutatenName=this.nameinputRef.nativeElement.value;
  // const zutatenAmount=this.amountinputRef.nativeElement.value;
  // const neuZutaten=new Zutaten(zutatenName,zutatenAmount);
  // this.deleteRequest.emit(neuZutaten)
  // this.displayNone=this.displayNone ? '':'none'

  // var wort=document.querySelector(".list-group");
// if(wort!==null){
//   wort.classList.remove(".list-group")

}



  
}



