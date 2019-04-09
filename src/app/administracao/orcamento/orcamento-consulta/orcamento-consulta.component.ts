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

  movimentacoes: any[];

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
      data: this.formBuilder.control(''),
      valor: this.formBuilder.control(''),
    });
  }

  consultar() {
    const entradaSaida = this.orcamentoForm.getRawValue();

    // this.service.consultaByParams(entradaSaida).subscribe( res => {      
    //   this.movimentacoes = res.data;
    // });
  }

  limpar() {
    this.inicializaForm();
    this.movimentacoes = [];
  }

  novo() {
    this.router.navigate(['entradaSaida/cadastro']);
  }

  editar(event) {

  }

  remover(event) {

  }

}
