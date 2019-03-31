import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-veiculo-cadastro',
  templateUrl: './veiculo-cadastro.component.html',
  styleUrls: ['./veiculo-cadastro.component.scss']
})
export class VeiculoCadastroComponent implements OnInit {

  veiculoForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.veiculoForm = this.formBuilder.group({

      placa: this.formBuilder.control(''),
      isVendido: this.formBuilder.control('true')
    })
  }

}
