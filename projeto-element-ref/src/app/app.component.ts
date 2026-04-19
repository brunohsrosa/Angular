import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit { /* A interface AfterViewInit é usada para indicar que a classe implementa um método chamado ngAfterViewInit, que é um hook de ciclo de vida do Angular. Esse método é chamado depois que a visualização do componente e suas visualizações filhas foram inicializadas. */
  @ViewChild('minhaDiv') divEl!: ElementRef<HTMLDivElement>; /* @ViewChild é um decorador que permite acessar um elemento do template (HTML) a partir do código TypeScript.*/

  constructor(private readonly _elRef: ElementRef) { } /* O construtor da classe recebe uma instância de ElementRef, que é injetada pelo Angular. ElementRef é uma classe que encapsula um elemento DOM nativo. No entanto, neste exemplo, a instância de ElementRef injetada não está sendo usada diretamente no código. */

  ngOnInit() {
    console.log(this._elRef); /* O método ngOnInit é um hook de ciclo de vida do Angular que é chamado após a construção do componente e a inicialização de suas propriedades. Neste caso, estamos usando console.log para imprimir o elemento DOM associado à instância de ElementRef injetada. Isso pode ser útil para depuração ou para acessar o elemento DOM diretamente, embora neste exemplo específico, a instância de ElementRef injetada não esteja sendo utilizada para manipular o DOM. */
    const divEl = this._elRef.nativeElement.querySelector('#minha-outra-div') as HTMLDivElement

    divEl.textContent = 'Olá, sou outra div!'; /* A propriedade textContent é usada para definir o conteúdo de texto do elemento selecionado. Neste caso, estamos definindo o texto para "Olá, sou outra div!". */
    divEl.style.backgroundColor = 'blue'; /* A propriedade style é usada para acessar e modificar os estilos CSS do elemento selecionado. Neste caso, estamos definindo a cor de fundo da div para azul. */
    divEl.style.color = 'white'; /* A propriedade color é usada para definir a cor do texto do elemento selecionado. Neste caso, estamos definindo a cor do texto para branco. */

    divEl.addEventListener('click', () => { /* O método addEventListener é usado para adicionar um ouvinte de eventos ao elemento selecionado. Neste caso, estamos adicionando um ouvinte para o evento de clique. Quando a div for clicada, a função de callback será executada. */
      alert('Você clicou na div!'); /* A função de callback exibe um alerta com a mensagem "Você clicou na div!" quando a div é clicada. */
    });

    console.log(divEl); /* O método querySelector é usado para selecionar o elemento DOM com o ID "minha-outra-div". O resultado é armazenado na constante divEl, que é do tipo HTMLDivElement. Em seguida, estamos usando console.log para imprimir o elemento selecionado. Isso pode ser útil para depuração ou para acessar o elemento DOM diretamente. */
  }

  ngAfterViewInit() {
    this.divEl.nativeElement.style.backgroundColor = 'orange'; /* A propriedade nativeElement é usada para acessar o elemento DOM real associado à referência. Neste caso, estamos definindo a cor de fundo da div para laranja. */
    this.divEl.nativeElement.textContent = 'Olá, sou uma div!'; /* A propriedade textContent é usada para definir o conteúdo de texto da div. Neste caso, estamos definindo o texto para "Olá, sou uma div!". */
    this.divEl.nativeElement.classList.add('minha-classe'); /* A propriedade classList é usada para manipular as classes CSS de um elemento. Neste caso, estamos adicionando a classe "minha-classe" à div. */
  }

  createElement() {
    const novaDiv = document.createElement('div'); /* O método createElement é usado para criar um novo elemento HTML. Neste caso, estamos criando uma nova div. */

    novaDiv.textContent = 'Olá, sou uma nova div!'; /* A propriedade textContent é usada para definir o conteúdo de texto da nova div. Neste caso, estamos definindo o texto para "Olá, sou uma nova div!". */
    novaDiv.classList.add('bg-red'); /* A propriedade classList é usada para manipular as classes CSS de um elemento. Neste caso, estamos adicionando a classe "minha-classe" à nova div. */

    this._elRef.nativeElement.appendChild(novaDiv); /* O método appendChild é usado para adicionar um elemento como filho de outro elemento. Neste caso, estamos adicionando a nova div como filha do elemento associado à instância de ElementRef injetada. Isso fará com que a nova div seja exibida na página. */
  }

}


