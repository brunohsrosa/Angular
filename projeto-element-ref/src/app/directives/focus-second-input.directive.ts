import { AfterViewInit, Directive, ElementRef, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appFocusSecondInput]'
})

export class FocusSecondInputDirective implements AfterViewInit {
  // @HostBinding('style.backgroundColor') bgColor = 'blue'; /* O decorador @HostBinding é usado para vincular uma propriedade do host (o elemento ao qual a diretiva é aplicada) a uma propriedade da diretiva. Neste caso, estamos vinculando a propriedade style.backgroundColor do host à propriedade bgColor da diretiva. Isso significa que o elemento ao qual a diretiva é aplicada terá sua cor de fundo definida como azul. */
  // @HostBinding('textContent') text = 'Sou uma div'; /* O decorador @HostBinding é usado para vincular uma propriedade do host (o elemento ao qual a diretiva é aplicada) a uma propriedade da diretiva. Neste caso, estamos vinculando a propriedade textContent do host à propriedade text da diretiva. Isso significa que o elemento ao qual a diretiva é aplicada terá seu conteúdo de texto definido como "Sou uma div". */

  constructor( private _elRef: ElementRef ) { } /* O construtor da classe recebe uma instância de ElementRef, que é injetada pelo Angular. ElementRef é uma classe que encapsula um elemento DOM nativo. No entanto, neste exemplo, a instância de ElementRef injetada não está sendo usada diretamente no código. */

  ngAfterViewInit() {
    // Lógica a ser executada quando a diretiva é inicializada
    const inputList = this._elRef.nativeElement.querySelectiorAll('input') as HTMLInputElement []; /* O método querySelectorAll é usado para selecionar todos os elementos do tipo input dentro do elemento associado à instância de ElementRef injetada. O resultado é uma NodeList contendo todos os elementos input encontrados. */

    if (inputList.length > 1) { /* Verificamos se a lista de inputs contém mais de um elemento. Se houver mais de um input, podemos acessar o segundo input usando o índice 1 (já que os índices começam em 0). */
      inputList[1].focus(); /* O método focus é usado para definir o foco em um elemento específico. Neste caso, estamos definindo o foco no segundo input da lista. Isso fará com que o cursor seja posicionado nesse input, permitindo que o usuário comece a digitar imediatamente. */
    }
  }
}
