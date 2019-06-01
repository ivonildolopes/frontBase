import { Router } from '@angular/router';
import { PromissoriaService } from './../promissoria.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../shared/notification/notification.service';

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
  totalPendente =  0;
  totalPago = 0;

  promissoriasPagas: any[];
  promissoriasPendentes: any[];

  constructor(private formBuilder: FormBuilder,
    private service: PromissoriaService
    , private router: Router
    , private notificationService: NotificationService
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
    this.totalPendente =  0;
    this.totalPago = 0;

    const promissoria = this.promissoriaForm.getRawValue();

    this.service.consultaByParams(promissoria).subscribe( res => {
      this.promissorias = res.data;
     
        this.promissoriasPendentes = this.promissorias.filter((promissoria) => {
          return !promissoria.isPago;
        });

        this.promissoriasPendentes.forEach( promissoria => {
          this.totalPendente += promissoria.valor;
        });

        // this.calculaTotais(this.promissoriasPendentes, this.promissorias, this.totalPendente);

        this.promissoriasPagas = this.promissorias.filter((promissoria) => {
          return promissoria.isPago;
        });

        this.promissoriasPagas.forEach( promissoria => {
          this.totalPago += promissoria.valor;
        }); 
        // this.calculaTotais(this.promissoriasPagas, this.promissorias, this.totalPago);
      
    });
  }

  calculaTotais(promissorias: any[], promissoriasConsulta: any[], total) {
    promissorias = promissoriasConsulta.filter((promissoria) => {
       !promissoria.isPago;
    });

    promissorias.forEach( promissoria => {
      total += promissoria.valor;
    });
  }

  limpar() {
    this.inicializaForm();
    this.promissorias = [];
    this.totalPendente = 0;
  }

  novo() {
    this.router.navigate(['promissoria/cadastro']);
  }

  quitarPromissoria(event) {
    this.service.quitarPromissoria(event.idPromissoria).subscribe(res =>{
      this.notificationService.send(res);
      this.consultar();
    });
  }

  remover(event) {

  }

}
