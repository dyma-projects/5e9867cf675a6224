import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Output() updated : EventEmitter<boolean> = new EventEmitter();
  @Input() currentValue : number;

  constructor() { }

  ngOnInit() {
  }

  update(increment : boolean): void {
    this.updated.emit(increment);
  }

}
