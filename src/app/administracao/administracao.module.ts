import { NgModule, ErrorHandler } from '@angular/core';
import { ApplicationErrorHandler } from './../app.errorHandler.component';
import { CommonModule } from '@angular/common';

import { AdministracaoRoutingModule } from './administracao-routing.module';

import { CurrencyMaskModule } from 'ng2-currency-mask';

import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared';

import { VeiculoCadastroComponent } from './veiculo/veiculo-cadastro/veiculo-cadastro.component';
import { VeiculoConsultaComponent } from './veiculo/veiculo-consulta/veiculo-consulta.component';
import { VeiculoService } from './veiculo/veiculo.service';

import { ClienteCadastroComponent } from './cliente/cliente-cadastro/cliente-cadastro.component';
import { ClienteConsultaComponent } from './cliente/cliente-consulta/cliente-consulta.component';
import { ClienteService } from './cliente/cliente.service';

import { EntradaSaidaCadastroComponent } from './entrada-saida/entrada-saida-cadastro/entrada-saida-cadastro.component';
import { EntradaSaidaConsultaComponent } from './entrada-saida/entrada-saida-consulta/entrada-saida-consulta.component';
import { EntradaSaidaService } from './entrada-saida/entrada-saida.service';

import { OrcamentoCadastroComponent } from './orcamento/orcamento-cadastro/orcamento-cadastro.component';
import { OrcamentoConsultaComponent } from './orcamento/orcamento-consulta/orcamento-consulta.component';
import { OrcamentoService } from './orcamento/orcamento.service';

import { PromissoriaCadastroComponent } from './promissoria/promissoria-cadastro/promissoria-cadastro.component';
import { PromissoriaService } from './promissoria/promissoria.service';
import { PromissoriaConsultaComponent } from './promissoria/promissoria-consulta/promissoria-consulta.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CurrencyMaskModule,
    AdministracaoRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [VeiculoCadastroComponent, VeiculoConsultaComponent,
                ClienteCadastroComponent, ClienteConsultaComponent,
                EntradaSaidaCadastroComponent, EntradaSaidaConsultaComponent,
                OrcamentoCadastroComponent, OrcamentoConsultaComponent, 
                PromissoriaCadastroComponent, PromissoriaConsultaComponent],
  providers: [VeiculoService, ClienteService, EntradaSaidaService, OrcamentoService, PromissoriaService,
    { provide: ErrorHandler, useClass: ApplicationErrorHandler }]
})
export class AdministracaoModule { }
