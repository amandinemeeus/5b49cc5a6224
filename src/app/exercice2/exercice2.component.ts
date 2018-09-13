import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {

  @ViewChild('value') public el: ElementRef;

  public valeur: string;

  print() {
    this.valeur = this.el.nativeElement.value;
  }

  constructor() { }

  ngOnInit() {
  }

}
