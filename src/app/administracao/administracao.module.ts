import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracaoRoutingModule } from './administracao-routing.module';
import { AdministracaoService } from './administracao.service';

import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared';

import { VeiculoCadastroComponent } from './veiculo/veiculo-cadastro/veiculo-cadastro.component';
import { VeiculoConsultaComponent } from './veiculo/veiculo-consulta/veiculo-consulta.component';
import { VeiculoService } from './veiculo/veiculo.service';

import { ClienteCadastroComponent } from './cliente/cliente-cadastro/cliente-cadastro.component';
import { ClienteConsultaComponent } from './cliente/cliente-consulta/cliente-consulta.component';
import { ClienteService } from './cliente/cliente.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AdministracaoRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [VeiculoCadastroComponent, VeiculoConsultaComponent,
                ClienteCadastroComponent, ClienteConsultaComponent],
  providers: [AdministracaoService, VeiculoService, ClienteService]
})
export class AdministracaoModule { }
