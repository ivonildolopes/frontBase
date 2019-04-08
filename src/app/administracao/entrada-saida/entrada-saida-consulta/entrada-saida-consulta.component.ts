import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EntradaSaidaService } from '../entrada-saida.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from '../../cliente/cliente.service';

@Component({
  selector: 'app-entrada-saida-consulta',
  templateUrl: './entrada-saida-consulta.component.html',
  styleUrls: ['./entrada-saida-consulta.component.scss']
})
export class EntradaSaidaConsultaComponent implements OnInit {

  entradaSaidaForm: FormGroup;

  comboList: any;
  listVeiculos: any[];
  listClientes: any[];

  movimentacoes: any[];

  constructor(private formBuilder: FormBuilder,
    private service: EntradaSaidaService
    , private router: Router
    , private route: ActivatedRoute
    , private clienteService: ClienteService
    ) { }

  ngOnInit() {
    this.inicializaForm();

    this.service.populaListasConsulta().subscribe(res => {
      this.comboList = res.data;
      this.listVeiculos = this.comboList.veiculos;
      this.listClientes = this.comboList.clientes;

      // console.log(this.listVeiculos);
    });


  }

  inicializaForm() {
    this.entradaSaidaForm = this.formBuilder.group({
      tipo: this.formBuilder.control(''),
      veiculo: this.formBuilder.control(''),
      cliente: this.formBuilder.control(''),
      dataInicio: this.formBuilder.control(''),
      dataFim: this.formBuilder.control('')
    });
  }

  consultar() {
    const entradaSaida = this.entradaSaidaForm.getRawValue();

    this.service.consultaByParams(entradaSaida).subscribe( res => {
      // console.log(res.data);
      this.movimentacoes = res.data;
    });
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
