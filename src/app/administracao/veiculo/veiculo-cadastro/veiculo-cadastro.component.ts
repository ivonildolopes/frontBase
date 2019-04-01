import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { VeiculoService } from '../veiculo.service';

@Component({
  selector: 'app-veiculo-cadastro',
  templateUrl: './veiculo-cadastro.component.html',
  styleUrls: ['./veiculo-cadastro.component.scss']
})
export class VeiculoCadastroComponent implements OnInit {

  veiculoForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private service: VeiculoService) { }

  ngOnInit() {
    this.inicializaForm();
  }

  inicializaForm() {
    this.veiculoForm = this.formBuilder.group({
      placa: this.formBuilder.control(''),
      modelo: this.formBuilder.control(''),
      anoModelo: this.formBuilder.control(''),
      anoFabricacao: this.formBuilder.control(''),
      cor: this.formBuilder.control(''),
      renavam: this.formBuilder.control(''),
      chassi: this.formBuilder.control(''),
      observacao: this.formBuilder.control(''),
      isVendido: this.formBuilder.control(false)
    })
  }

  salvar() {
    const veiculo = this.veiculoForm.getRawValue();

    this.service.salvar(veiculo).subscribe(res => {
         console.log(res.status);
        //  this.notificationService.info(['Arquivo enviado com sucesso!'], 'Upload de Arquivo');
        this.inicializaForm();
    });
  }

  limpar() {
    this.inicializaForm()
  }

}
