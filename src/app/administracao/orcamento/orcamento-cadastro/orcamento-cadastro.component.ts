import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

import { DATE } from '@mask';
import { ActivatedRoute, Router } from '@angular/router';
import { OrcamentoService } from '../orcamento.service';

@Component({
  selector: 'app-orcamento-cadastro',
  templateUrl: './orcamento-cadastro.component.html',
  styleUrls: ['./orcamento-cadastro.component.scss']
})
export class OrcamentoCadastroComponent implements OnInit {

  orcamentoForm: FormGroup;
  maskDate = DATE;
  orcamentos =  [];

  id: number;
  startDate = new Date(1990, 0, 1);

  public mask = {
    guide: true,
    showMask: false,
    // keepCharPositions : true,
    mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
  };

  comboList: any;
  listVeiculos: any[];
  listClientes: any[];

  constructor(private formBuilder: FormBuilder
    , private route: ActivatedRoute
    , private serviceOrcamento: OrcamentoService) { }

  ngOnInit() {
    this.inicializaForm();

    this.serviceOrcamento.populaListas().subscribe(res => {
      this.comboList = res.data;
      this.listVeiculos = this.comboList.veiculos;
      // console.log(this.listVeiculos);
    });

    this.route.params
      .subscribe(params => {
        this.id = params['id'];

        if (!this.id) { return; }
      });
  }

  inicializaForm() {
    this.orcamentoForm = this.formBuilder.group({      
      veiculo: this.formBuilder.control(''),
      valor: this.formBuilder.control(''),
      data: this.formBuilder.control(''),
      descricao:this.formBuilder.control(''),
    });
  }

  salvar() {
    let orcamento = this.orcamentoForm.getRawValue();

     if (!this.id) {
      this.serviceOrcamento.salvar(orcamento).add(res => {
        // console.log(res.status);
        this.inicializaForm();
      });
    } else {
      // this.service.update(this.id, entradaSaida).subscribe(res => {
      //   console.log(res.status);
      //   this.router.navigate(['cliente/consulta']);
      // });
    }
  }

  saveAll() {

    this.serviceOrcamento.saveAll(this.orcamentos);

  }

  add (){
    this.orcamentos.push(this.orcamentoForm.getRawValue());
    this.inicializaForm();
  }

  remover(orcamento, index) { 
    this.orcamentos.splice(index, 1);
  }

  limpar() {
    this.inicializaForm();
  }

}