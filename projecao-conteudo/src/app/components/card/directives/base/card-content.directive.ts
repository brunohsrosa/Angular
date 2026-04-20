import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-content',
  host: {
    'class': 'ca-c-card__content' // Adiciona a classe CSS 'ca-c-card__content' ao elemento host
  }
})
export class CardContentDirective {}
