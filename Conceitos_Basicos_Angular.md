
# 📘 Angular – Guia Completo de Conceitos Fundamentais

Este documento reúne os **principais conceitos teóricos e práticos do Angular**, organizados de forma clara, progressiva e bem identada, com o objetivo de servir como **material de estudo, fixação de conceitos e consulta futura**.

---



## 📑 Sumário

- [Angular: Visão Geral](#-o-que-é-angular-visão-geral)
- [Componentes (Component)](#-componentes-component)
- [DOM – Document Object Model](#-dom-document-object-model)
- [Data Binding](#-data-binding-ligação-de-dados)
- [Inputs e Outputs](#-inputs-e--outputs)
- [Diretivas](#-diretivas-directives)
- [HostListener e HostBinding](#-hostbinding-e-hostlistener)
- [BEM (Block, Element, Modifier)](#-bem-block-element-modifier)
- [Rotas (Angular Router)](#-rotas-angular-router)
- [Guards](#-guards)
- [Injeção de Dependência](#-injeção-de-dependência-dependency-injection)
- [Services](#-services)
- [Ciclo de Vida dos Componentes](#-ciclo-de-vida-lifecycle-hooks)
- [RxJS e Programação Reativa](#-rxjs-e-observables)
- [Módulos e Standalone Components](#-módulos-ngmodule)
- [Boas Práticas Gerais](#-boas-práticas-gerais)





# 📌 O que é Angular (visão geral)

Angular é um **framework front-end** baseado em **TypeScript**, criado para desenvolver **Single Page Applications (SPA)**, usando:

*   **Arquitetura baseada em componentes**
    
*   **Data Binding**
    
*   **Injeção de dependência**
    
*   **Roteamento**
    
*   **Manipulação reativa de dados (RxJS)**

<br>

# 🧩 Componentes (Component)


✅ O que é um componente?
------------------------

É a **unidade básica da UI no Angular**.Cada componente controla uma parte da tela.

Um componente é composto por:

*   **Classe (TypeScript)** → lógica
    
*   **Template (HTML)** → visual
    
*   **Style (CSS/SCSS)** → aparência
    
*   **Metadados (@Component)**

```ts
//TypeScript
@Component({
  selector: 'app-exemplo',
  templateUrl: './exemplo.component.html',
  styleUrls: ['./exemplo.component.scss']
})
export class ExemploComponent {}
```

### Conceitos importantes:

*   selector: tag HTML personalizada
    
*   Componentes são **reutilizáveis**
    
*   Cada componente tem seu **próprio escopo de estilo**
    
<br>

# 🌳 DOM (Document Object Model)


✅ O que é o DOM?
----------------

É a **representação em árvore** do HTML no navegador.

```HTML
<!-- HTML -->
<body>
  <app-root>
    <app-header></app-header>
  </app-root>
</body>
```

➡️ Isso vira uma **árvore de nós (nodes)**

### No Angular:

*   Angular **não manipula o DOM diretamente**
    
*   Usa **data binding** e **detecção de mudanças**
    
*   Manipular DOM direto (document.querySelector) **não é recomendado**
    

✅ Usa-se:

*   @ViewChild
    
*   Renderer2
    
*   HostBinding
    
*   HostListener
    

<br>

# 🧠 Data Binding (Ligação de dados)

Tipos principais:
-----------------

### 1️⃣ Interpolação

```HTML
<!-- HTML -->
<p>{{ nome }}</p>
```

### 2️⃣ Property Binding

```HTML
<!-- HTML -->
<img [src]="imagemUrl">
```

### 3️⃣ Event Binding

```HTML
<!-- HTML -->
<button (click)="salvar()">Salvar</button>
```

### 4️⃣ Two-way Binding

```HTML
<!-- HTML -->
<input [(ngModel)]="nome">
```

🔹 Requer FormsModule

<br>

# 📥 Inputs e 📤 Outputs


✅ @Input
--------

Usado para **receber dados do componente pai**


```TS
// TypeScript 
@Input() titulo!: string;
```

```HTML
<!-- HTML -->
<app-card [titulo]="'Angular'"></app-card>
```

✅ @Output
---------

Usado para **emitir eventos para o pai**

```TS
// TypeScript 
@Output() fechado = new EventEmitter<boolean>();
```

```TS
// TypeScript 
this.fechado.emit(true);
```

```HTML
<!-- HTML -->
<app-modal (fechado)="onFechar($event)"></app-modal>
```

🔹 Comunicação **filho → pai**

<br>

# 🧷 Diretivas (Directives)


Tipos de diretivas:
-------------------

### ✅ Diretivas estruturais (alteram o DOM)

*   \*ngIf
    
*   \*ngFor
    
*   \*ngSwitch
    

```HTML
<!-- HTML -->
<div *ngIf="ativo">Visível</div>
```

### ✅ Diretivas de atributo

Modificam **aparência ou comportamento**

*   ngClass
    
*   ngStyle
    
*   Diretivas customizadas
    

```HTML
<!-- HTML -->
<div [ngClass]="{'ativo': ativo}"></div>
```

<br>

# 🧠 HostBinding e HostListener

✅ @HostBinding
--------------

Associa propriedades da **classe ao elemento host**

```TS
// TypeScript 
@HostBinding('class.ativo') ativo = true;
```

➡️ Adiciona/remova classe automaticamente

✅ @HostListener
---------------

Escuta eventos no elemento host

```TS
// TypeScript 
@HostListener('mouseenter')
onMouseEnter() {
  console.log('mouseenter');
}
```

Eventos comuns:

*   click
    
*   mouseenter / mouseleave
    
*   window:scroll
    
*   document:keydown
    

<br>

# 🧩 ElementRef


✅ O que é?
----------

Dá acesso direto ao **elemento DOM**

```TS
// TypeScript 
constructor(private el: ElementRef) {}
```

⚠️ **Evite usar diretamente**

*   Pode causar problemas de segurança (XSS)
    
*   Prefira Renderer2
    

<br>

# 🎨 Renderer2


Forma **segura** de manipular DOM:

```TS
// TypeScript 
this.renderer.addClass(this.el.nativeElement, 'ativo');
```

✅ Use quando:

*   Precisa alterar DOM manualmente
    
*   Criar elementos
    
*   Alterar classes/estilos
    

<br>

# 🧱 BEM (Block, Element, Modifier)


✅ O que é BEM?
--------------

Metodologia para **CSS organizado e previsível**

### Estrutura:

```TS
bloco__elemento--modificador
```

```CSS
/* CSS */
.card {}
.card__title {}
.card__title--highlight {

```

✅ Benefícios:

*   Evita conflitos de CSS
    
*   Facilita manutenção
    
*   Ótimo com Angular (componentização)
    

<br>

# 🛣️ Rotas (Angular Router)

✅ O que são rotas?
------------------

Permitem **trocar componentes sem recarregar a página**

```TS
// TypeScript 
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent }
];
```

```HTML
<!-- HTML -->
<router-outlet></router-outlet>
```

### Recursos importantes:

*   Rotas com parâmetros: /user/:id
    
*   Lazy Loading
    
*   Guards (CanActivate)
    
*   Resolvers
    

<br>

# 🔐 Guards


Controlam acesso às rotas

```TS
// TypeScript 
canActivate(): boolean {
  return this.authService.isLogged();
}
```

Tipos:

*   CanActivate
    
*   CanDeactivate
    
*   Resolve
    

<br>

# 💉 Injeção de Dependência (Dependency Injection)


✅ Conceito
----------

Angular **cria e fornece instâncias** automaticamente.

```TS
// TypeScript 
constructor(private userService: UserService) {}
```

### Tipos de Providers:

*   providedIn: 'root'
    
*   Providers em módulos
    
*   Providers em componentes
    

🔹 Services normalmente são **Singletons**

<br>

# 🧰 Services


✅ O que é?
----------

Classe para **lógica de negócio**, APIs, estado

```TS
// TypeScript 
@Injectable({ providedIn: 'root' })
export class UserService {}
```

✅ Não misturar lógica pesada em componentes

<br>

# 🔄 Ciclo de vida (Lifecycle Hooks)


Principais hooks:

*   ngOnInit → inicialização
    
*   ngOnChanges → muda Input
    
*   ngAfterViewInit → DOM carregado
    
*   ngOnDestroy → limpeza
    

```TS
// TypeScript 
ngOnInit() {
  console.log('Iniciado');
}
```

<br>

# ⚡ RxJS e Observables


Angular usa **programação reativa**

```TS
// TypeScript 
this.http.get('/api/users').subscribe(...)
```

Conceitos importantes:

*   Observable
    
*   Subscription
    
*   Pipe
    
*   Operators (map, tap, switchMap)
    
*   Unsubscribe (evitar memory leak)
    

<br>

# 📦 Módulos (NgModule)


Organizam a aplicação

```TS
// TypeScript 
@NgModule({
  declarations: [],
  imports: [],
  providers: [],
  bootstrap: []
})
export class AppModule {}
```

✅ Com Angular moderno, **Standalone Components** estão substituindo módulos

# ✅ Boas práticas gerais


✔ Componentes pequenos
✔ Services para lógica
✔ Evitar manipular DOM direto
✔ CSS escopado + BEM
✔ Usar RxJS corretamente
✔ Separar responsabilidades
