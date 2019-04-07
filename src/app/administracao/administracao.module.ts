import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracaoRoutingModule } from './administracao-routing.module';

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

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AdministracaoRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [VeiculoCadastroComponent, VeiculoConsultaComponent,
                ClienteCadastroComponent, ClienteConsultaComponent,
                EntradaSaidaCadastroComponent, EntradaSaidaConsultaComponent],
  providers: [VeiculoService, ClienteService, EntradaSaidaService]
})
export class AdministracaoModule { }
