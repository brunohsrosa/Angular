import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { NovaSolicitacao } from './components/nova-solicitacao/nova-solicitacao';
import { Consulta } from './components/consulta/consulta';
import { VencimentoEpi } from './components/vencimento-epi/vencimento-epi';
import { Parametros } from './components/parametros/parametros';

@NgModule({
  declarations: [
    App,
    NovaSolicitacao,
    Consulta,
    VencimentoEpi,
    Parametros
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([])
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),

    provideHttpClient(withInterceptorsFromDi()),
  ],
  bootstrap: [App]
})
export class AppModule { }
