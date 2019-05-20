import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from '../container/container/container.component';

import { VeiculoCadastroComponent } from './veiculo/veiculo-cadastro/veiculo-cadastro.component';
import { VeiculoConsultaComponent } from './veiculo/veiculo-consulta/veiculo-consulta.component';

import { ClienteCadastroComponent } from './cliente/cliente-cadastro/cliente-cadastro.component';
import { ClienteConsultaComponent } from './cliente/cliente-consulta/cliente-consulta.component';

import { EntradaSaidaCadastroComponent } from './entrada-saida/entrada-saida-cadastro/entrada-saida-cadastro.component';
import { EntradaSaidaConsultaComponent } from './entrada-saida/entrada-saida-consulta/entrada-saida-consulta.component';

import { OrcamentoCadastroComponent } from './orcamento/orcamento-cadastro/orcamento-cadastro.component';
import { OrcamentoConsultaComponent } from './orcamento/orcamento-consulta/orcamento-consulta.component';

import { PromissoriaCadastroComponent } from './promissoria/promissoria-cadastro/promissoria-cadastro.component';

const routes: Routes = [
  // { path: 'admin', redirectTo: '/admin/veiculo/cadastro', pathMatch: 'full' },
  { path: '',
    component: ContainerComponent,
    children: [
      { path: 'veiculo/cadastro', component: VeiculoCadastroComponent},
      { path: 'veiculo/consulta/:id', component: VeiculoCadastroComponent},
      { path: 'veiculo/consulta', component: VeiculoConsultaComponent},
      { path: 'cliente/cadastro', component: ClienteCadastroComponent},
      { path: 'cliente/consulta/:id', component: ClienteCadastroComponent},
      { path: 'cliente/consulta', component: ClienteConsultaComponent},
      { path: 'entradaSaida/cadastro', component: EntradaSaidaCadastroComponent},
      { path: 'entradaSaida/consulta/:id', component: EntradaSaidaCadastroComponent},
      { path: 'entradaSaida/consulta', component: EntradaSaidaConsultaComponent},
      { path: 'orcamento/cadastro', component: OrcamentoCadastroComponent},
      { path: 'orcamento/consulta/:id', component: OrcamentoCadastroComponent},
      { path: 'orcamento/consulta', component: OrcamentoConsultaComponent},
      { path: 'promissoria/cadastro', component: PromissoriaCadastroComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracaoRoutingModule { }
