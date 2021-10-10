import { Component, OnInit } from '@angular/core';
import { Zutaten } from '../shared/zutaten.model';

@Component({
  selector: 'app-einkaufliste',
  templateUrl: './einkaufliste.component.html',
  styleUrls: ['./einkaufliste.component.scss']
})
export class EinkauflisteComponent implements OnInit {
  zutaten: Zutaten[]=[
    // new Zutaten('Apfel',5),
    // new Zutaten('Tomaten',7),
    // new Zutaten('Äpfel',7),
  ];


  constructor() { }

  ngOnInit(): void {
  }
  onZutatenAdded(zutaten:Zutaten){
   this.zutaten.push(zutaten); 
  }

  // onLeer(){

  //   // this.renderer2.removeChild(this.el.nativeElement,this.ulElement.nativeElement)
  
  //   // this.ulElement.nativeElement.remove()
  //   const element=document.getElementById("ul");
  //   element!.innerHTML="<style> text-decoration: line-through;</style>";
  //   return element}

  

}
