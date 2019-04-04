import { ActivatedRoute, Router } from '@angular/router';
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

  filter: any;

  constructor(private formBuilder: FormBuilder,
    private service: VeiculoService
    , private router: Router
    , private route: ActivatedRoute) { }

  ngOnInit() {
    this.inicializaForm();
    this.filter = this.route.snapshot.queryParamMap;
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
    // let redirect = (r) => {if(r.status == 204 || r.status == 201 || r.status == 200)this.router.navigate(['/admin/etapa'], {queryParams:this.filter.params})}

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
    this.router.navigate(['veiculo/consulta/', event.id]);
  }

  remover(event) {

  }

  novo() {
    // console.log(this.filter);
    this.router.navigate(['veiculo/cadastro']);
  }

}
