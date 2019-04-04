import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ClienteService } from '../cliente.service';
import { CPF, TELEFONE, CEP, DATE } from '@mask';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.scss']
})
export class ClienteCadastroComponent implements OnInit {

  clienteForm: FormGroup;
  maskCPF = CPF;
  maskCEP = CEP;
  maskTel = TELEFONE;
  maskDate = DATE;

  id: number;

  constructor(private formBuilder: FormBuilder,
    private service: ClienteService
    , private router: Router
    , private route: ActivatedRoute) { }

  ngOnInit() {
    this.inicializaForm();

    this.route.params
      .subscribe(params => {
        this.id = params['id'];

        if (!this.id) { return; }
        this.service.clienteById(this.id).subscribe(res => {
          const cliente = res.data;

          this.clienteForm.patchValue({
            nome: cliente.nome,
            cpf: cliente.cpf,
            rg: cliente.rg,
            endereco: cliente.endereco,
            email: cliente.email,
            dataNascimento: cliente.dataNascimento,
            telefone: cliente.telefone,
          });
        });
      });
  }

  inicializaForm() {
    this.clienteForm = this.formBuilder.group({
      nome: this.formBuilder.control(''),
      cpf: this.formBuilder.control(''),
      rg: this.formBuilder.control(''),
      cep: this.formBuilder.control(''),
      endereco: this.formBuilder.control(''),
      email: this.formBuilder.control(''),
      dataNascimento: this.formBuilder.control(''),
      telefone: this.formBuilder.control(''),
    });
  }

  salvar() {
    const cliente = this.clienteForm.getRawValue();

    if (!this.id) {
      this.service.salvar(cliente).subscribe(res => {
        console.log(res.status);
        this.inicializaForm();
      });
    } else {
      this.service.update(this.id, cliente).subscribe(res => {
        console.log(res.status);
        this.router.navigate(['cliente/consulta']);
      });
    }
  }

  limpar() {
    this.inicializaForm();
  }

}
