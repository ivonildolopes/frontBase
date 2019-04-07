import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { EntradaSaidaService } from '../entrada-saida.service';
import { CPF, TELEFONE, CEP, DATE } from '@mask';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../../cliente/cliente.service';

@Component({
  selector: 'app-entrada-saida-cadastro',
  templateUrl: './entrada-saida-cadastro.component.html',
  styleUrls: ['./entrada-saida-cadastro.component.scss']
})
export class EntradaSaidaCadastroComponent implements OnInit {

  entradaSaidaForm: FormGroup;
  maskCPF = CPF;
  maskCEP = CEP;
  maskTel = TELEFONE;
  maskDate = DATE;

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

  constructor(private formBuilder: FormBuilder,
    private service: EntradaSaidaService
    , private router: Router
    , private route: ActivatedRoute
    , private clienteService: ClienteService) { }

  ngOnInit() {
    this.inicializaForm();

    this.service.populaListas().subscribe(res => {
      this.comboList = res.data;
      this.listVeiculos = this.comboList.veiculos;
      this.listClientes = this.comboList.clientes;

      console.log(this.listVeiculos);
    })

    this.route.params
      .subscribe(params => {
        this.id = params['id'];

        if (!this.id) { return; }
        // this.service.clienteById(this.id).subscribe(res => {
        //   const cliente = res.data;

        //   this.clienteForm.patchValue({
        //     nome: cliente.nome,
        //     cpf: cliente.cpf,
        //     rg: cliente.rg,
        //     endereco: cliente.endereco,
        //     cep: cliente.cep,
        //     email: cliente.email,
        //     dataNascimento: cliente.dataNascimento,
        //     telefone: cliente.telefone,
        //   });
        // });
      });
  }

  inicializaForm() {
    this.entradaSaidaForm = this.formBuilder.group({
      tipo: this.formBuilder.control(''),
      veiculo: this.formBuilder.control(''),
      cliente: this.formBuilder.control(''),
      valor: this.formBuilder.control(''),
      data: this.formBuilder.control(''),
    });
  }


  salvar() {
    let entradaSaida = this.entradaSaidaForm.getRawValue();

    if(entradaSaida.cliente == '' ) {
      entradaSaida.cliente = null;
    }

     if (!this.id) {
      this.service.salvar(entradaSaida).subscribe(res => {
        console.log(res.status);
        this.inicializaForm();
      });
    } else {
      // this.service.update(this.id, entradaSaida).subscribe(res => {
      //   console.log(res.status);
      //   this.router.navigate(['cliente/consulta']);
      // });
    }
  }

  limpar() {
    this.inicializaForm();
  }

  getCliente(entradaSaida) {
    const cliente: any = {
      nome: '',
      cpf: '123.456.789-11',
      rg: '',
      endereco: '',
      telefone: '',
      email: ''
    }


    this.clienteService.consultaByParams(cliente).subscribe(res => {
      entradaSaida.cliente = res.data[0];
    });


  }

}
