import { Router, ActivatedRoute } from '@angular/router';
import { OrcamentoService } from './../orcamento.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orcamento-consulta',
  templateUrl: './orcamento-consulta.component.html',
  styleUrls: ['./orcamento-consulta.component.scss']
})
export class OrcamentoConsultaComponent implements OnInit {

  orcamentoForm: FormGroup;

  comboList: any;
  listVeiculos: any[];
  listClientes: any[];

  orcamentos: any[];
  total =  0;

  constructor(private formBuilder: FormBuilder,
    private service: OrcamentoService
    , private router: Router
    , private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.inicializaForm();

    this.service.populaListasConsulta().subscribe(res => {
      this.comboList = res.data;
      this.listVeiculos = this.comboList.veiculos;
    });


  }

  inicializaForm() {
    this.orcamentoForm = this.formBuilder.group({
      veiculo: this.formBuilder.control(''),
      dataInicio: this.formBuilder.control(''),
      dataFim: this.formBuilder.control(''),
      valor: this.formBuilder.control(''),
    });
  }

  consultar() {
    const orcamento = this.orcamentoForm.getRawValue();

    this.service.consultaByParams(orcamento).subscribe( res => {
      this.orcamentos = res.data;
      // console.log(res.data)

      this.orcamentos.forEach( orcamento => {
        this.total += orcamento.valor;
      })
    });
  }

  limpar() {
    this.inicializaForm();
    this.orcamentos = [];
    this.total = 0;
  }

  novo() {
    this.router.navigate(['orcamento/cadastro']);
  }

  editar(event) {

  }

  remover(event) {

  }

}
