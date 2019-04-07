import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-simples',
  templateUrl: './select-simples.component.html',
  styleUrls: ['./select-simples.component.scss']
})
export class SelectSimplesComponent implements OnInit {

  @Input() form: FormGroup;
  // @Input() required: Boolean;
  // @Input() place: string;
  // @Input() valor: any;
  @Input() controlName:string
  @Output() changeOption: EventEmitter<any> = new EventEmitter();
  @Input() objetos: Object[];

  @Output() id: EventEmitter<number> = new EventEmitter();
  @Output() objeto: EventEmitter<any> = new EventEmitter();

  constructor() { }

  public ngOnInit() {

  }

  changeSelect(event) {
    this.changeOption.emit(event);
  }

  passaId(event) {
    this.id.emit(event);
  }

  passaObjeto(event) {
    this.objeto.emit(event);
  }

}
