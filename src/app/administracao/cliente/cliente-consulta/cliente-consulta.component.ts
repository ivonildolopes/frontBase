import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClienteService } from '../cliente.service';
import { CPF, TELEFONE, CEP, DATE } from '@mask';

@Component({
  selector: 'app-cliente-consulta',
  templateUrl: './cliente-consulta.component.html',
  styleUrls: ['./cliente-consulta.component.scss']
})
export class ClienteConsultaComponent implements OnInit {

  data: any[];
  clienteForm: FormGroup;

  maskCPF = CPF;
  maskCEP = CEP;
  maskTel = TELEFONE;
  maskDate = DATE;

  filter: any;

  colunas: string[] = ['nome', 'rg', 'cpf', 'endereco', 'telefone'];
  // dataSource = ELEMENT_DATA;

  constructor(private formBuilder: FormBuilder,
    private service: ClienteService
    , private router: Router
    , private route: ActivatedRoute) { }

  ngOnInit() {
    this.inicializaForm();
    this.filter = this.route.snapshot.queryParamMap;
  }

  inicializaForm() {
    this.clienteForm = this.formBuilder.group({
      nome: this.formBuilder.control(''),
      cpf: this.formBuilder.control(''),
      rg: this.formBuilder.control(''),
      endereco: this.formBuilder.control(''),
      email: this.formBuilder.control(''),
      telefone: this.formBuilder.control(''),
    });
  }

  consultar() {
    // let redirect = (r) => {if(r.status == 204 || r.status == 201 || r.status == 200)this.router.navigate(['/admin/etapa'],
    // {queryParams:this.filter.params})}

    const cliente = this.clienteForm.getRawValue();

    this.service.consultaByParams(cliente).subscribe( res => {
      console.log(res.data);
      this.data = res.data;
    });
  }

  limpar() {
    this.inicializaForm();
  }

  editar(event) {
    this.router.navigate(['cliente/consulta/', event.id]);
  }

  remover(event) {

  }

  novo() {
    // console.log(this.filter);
    this.router.navigate(['cliente/cadastro']);
  }

}
