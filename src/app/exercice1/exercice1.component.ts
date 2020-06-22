import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  public compteur: number = 0;

  onCompteurUpdated(increment: boolean): void {
    this.compteur = increment ? this.compteur + 1 : this.compteur - 1;
  }

  constructor() { }

  ngOnInit() {
  }

}
