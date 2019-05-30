import { Router, ActivatedRoute } from '@angular/router';
import { PromissoriaService } from './../promissoria.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promissoria-consulta',
  templateUrl: './promissoria-consulta.component.html',
  styleUrls: ['./promissoria-consulta.component.scss']
})
export class PromissoriaConsultaComponent implements OnInit {

  promissoriaForm: FormGroup;

  comboList: any;
  listVeiculos: any[];
  listClientes: any[];

  promissorias: any[];
  total =  0;

  constructor(private formBuilder: FormBuilder,
    private service: PromissoriaService
    , private router: Router
    , private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.inicializaForm();

    this.service.populaListas().subscribe(res => {
      this.comboList = res.data;
      this.listVeiculos = this.comboList.veiculos;
      this.listClientes = this.comboList.clientes;
    });


  }

  inicializaForm() {
    this.promissoriaForm = this.formBuilder.group({
      cliente: this.formBuilder.control(''),
      dataInicio: this.formBuilder.control(''),
      dataFim: this.formBuilder.control(''),
      valor: this.formBuilder.control(''),
    });
  }

  consultar() {
    const promissoria = this.promissoriaForm.getRawValue();

    this.service.consultaByParams(promissoria).subscribe( res => {
      this.promissorias = res.data;
      // console.log(res.data)

      this.promissorias.forEach( orcamento => {
        this.total += orcamento.valor;
      })
    });
  }

  limpar() {
    this.inicializaForm();
    this.promissorias = [];
    this.total = 0;
  }

  novo() {
    this.router.navigate(['promissoria/cadastro']);
  }

  editar(event) {

  }

  remover(event) {

  }

}
