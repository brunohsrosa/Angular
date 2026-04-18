import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appListener]'
})

export class ListenerDirective {
  @HostListener('click')
    onClick() {
    console.log('Elemento clicado!');
  }

  @HostListener('keyup', ['$event'])
    onKeyUp(event: KeyboardEvent) {
    //console.log('Tecla pressionada!', event); /*$event é um parâmetro que representa o evento de teclado, permitindo acessar informações sobre a tecla pressionada, como o código da tecla ou o valor da tecla. */

    const fullText = (event.target as HTMLInputElement).value; /*event.target é o elemento HTML que disparou o evento de teclado. Ao usar (event.target as HTMLInputElement), estamos fazendo uma asserção de tipo para informar ao TypeScript que o elemento é um campo de entrada de texto (HTMLInputElement). Isso nos permite acessar a propriedade value, que contém o texto digitado no campo de entrada. */
      console.log('Texto completo:', fullText);

  }


}
