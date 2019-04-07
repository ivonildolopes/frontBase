import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { VeiculoService } from '../veiculo.service';
import { CPF, TELEFONE, CEP, ANO, PLACA } from '@mask';
import { ActivatedRoute, Router } from '@angular/router';
import { Cor } from '../veiculo.model';


@Component({
  selector: 'app-veiculo-cadastro',
  templateUrl: './veiculo-cadastro.component.html',
  styleUrls: ['./veiculo-cadastro.component.scss']
})
export class VeiculoCadastroComponent implements OnInit {

  veiculoForm: FormGroup;
  mask = PLACA;
  maskAno = ANO;
  maskCPF = CPF;
  maskCEP = CEP;
  maskFax = TELEFONE;

  id: number;


  cores = Cor.getCores();
  constructor(private formBuilder: FormBuilder,
    private service: VeiculoService
    , private router: Router
    , private route: ActivatedRoute) { }

  ngOnInit() {
    this.inicializaForm();

    this.route.params
      .subscribe(params => {
        this.id = params['id'];

        if (!this.id) { return; }
        this.service.veiculoById(this.id).subscribe(res => {
          const veiculo = res.data;

          this.veiculoForm.patchValue({
            placa: veiculo.placa,
            renavam: veiculo.renavam,
            chassi: veiculo.chassi,
            modelo: veiculo.modelo,
            anoModelo: veiculo.anoModelo,
            anoFabricacao: veiculo.anoFabricacao,
            cor: veiculo.cor,
            observacao: veiculo.observacao,
            isVendido: veiculo.isVendido
          });
        });
      });
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
      isVendido: this.formBuilder.control(false)
    });
  }

  salvar() {
    const veiculo = this.veiculoForm.getRawValue();

    if (!this.id) {
      this.service.salvar(veiculo).add(res => {
        // console.log(res.status);
        //  this.notificationService.info(['Arquivo enviado com sucesso!'], 'Upload de Arquivo');
        this.inicializaForm();
      });
    } else {
      this.service.update(this.id, veiculo).subscribe(res => {
        // console.log(res.status);
        // this.inicializaForm();
        this.router.navigate(['veiculo/consulta']);
      });
    }
  }

  limpar() {
    this.inicializaForm();
  }

}
