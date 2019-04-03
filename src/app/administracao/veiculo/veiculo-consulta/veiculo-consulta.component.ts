import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../veiculo.service';
import { CPF, CNPJ, TELEFONE, CEP, ANO, PLACA } from "@mask";
import { Cor } from '../veiculo.model';

@Component({
  selector: 'app-veiculo-consulta',
  templateUrl: './veiculo-consulta.component.html',
  styleUrls: ['./veiculo-consulta.component.scss']
})
export class VeiculoConsultaComponent implements OnInit {

  data: any[];
  veiculoForm: FormGroup;
  cores = Cor.getCores();
  mask = PLACA;
  maskAno = ANO;
  maskCPF = CPF;
  maskCNPJ = CNPJ;
  maskCEP = CEP;
  maskFax = TELEFONE;

  constructor(private formBuilder: FormBuilder,
    private service: VeiculoService,
    private route: ActivatedRoute) { }

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
      isVendido: this.formBuilder.control('')
    });
  }

  consultar() {


    const veiculo = this.veiculoForm.getRawValue();

    this.service.consultaByParams(veiculo).subscribe( res => {
      console.log(res.data);
      this.data = res.data;
    });
  }

  limpar() {
    this.inicializaForm();
  }

  editar(event) {

  }

  remover(event) {

  }

  novo() {

  }

}
