import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-header',
  host: {
    'class': 'ca-c-card__header' // Adiciona a classe CSS 'ca-c-card__header' ao elemento host
  }
})
export class CardHeaderDirective {}
