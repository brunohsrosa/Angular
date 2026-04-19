import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BalanceCardComponent } from './components/balance-card/balance-card.component';
import { ClientInfosCardComponent } from './components/client-infos-card/client-infos-card.component';
import { ContainerComponent } from './components/container/container.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { DebitCardComponent } from './components/debit-card/debit-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BalanceCardComponent,
    ClientInfosCardComponent,
    ContainerComponent,
    CreditCardComponent,
    DebitCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
