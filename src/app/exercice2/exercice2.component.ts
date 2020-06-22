import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  public valeur: string;

  @ViewChild("inputElement") inputElement: ElementRef;

  constructor() { }

  ngOnInit() {

  }

  inputChanged(): void {
    this.valeur = this.inputElement.nativeElement.value;
  }

}
