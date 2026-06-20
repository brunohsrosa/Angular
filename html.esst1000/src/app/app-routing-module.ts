import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovaSolicitacao } from './components/nova-solicitacao/nova-solicitacao';
import { Consulta } from './components/consulta/consulta';
import { VencimentoEpi } from './components/vencimento-epi/vencimento-epi';
import { Parametros } from './components/parametros/parametros';

const routes: Routes = [
  { path: 'novaSolicitacao', component: NovaSolicitacao},
  { path: 'consulta', component: Consulta},
  { path: 'vencimentoEPI', component: VencimentoEpi},
  { path: 'parametros', component: Parametros},
  { path: '', redirectTo: '/novaSolicitacao', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
