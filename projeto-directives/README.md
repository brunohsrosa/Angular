# 🎯 Projeto Directives - Angular

> Um projeto prático e didático para dominar o uso de **Diretivas de Atributo** e os decoradores **@HostBinding** e **@HostListener** no Angular.

---

## 📋 Índice

- [Descrição do Projeto](#-descrição-do-projeto)
- [Objetivo](#-objetivo)
- [Conceitos Angular Utilizados](#-conceitos-angular-utilizados)
- [Como Começar](#-como-começar)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Diretivas Implementadas](#-diretivas-implementadas)
- [Componentes](#-componentes)
- [Aprendizados Principais](#-aprendizados-principais)
- [Tecnologias](#-tecnologias)

---

## 🎨 Descrição do Projeto

Este repositório é um **laboratório de aprendizado** focado em demonstrar na prática como as diretivas funcionam no Angular. O projeto possui componentes comparativos que mostram a mesma funcionalidade de duas formas:

✅ **Com diretivas customizadas** (mais limpo e reutilizável)  
✅ **Sem diretivas** (usando bindings nativos do Angular)

Dessa forma, você consegue entender a diferença e o valor de criar suas próprias diretivas.

---

## 🎯 Objetivo

O objetivo principal é ensinar e praticar:

- ✨ Como criar **diretivas de atributo customizadas**
- 🔗 Como usar `@HostBinding` para ligar propriedades do host element
- 👂 Como usar `@HostListener` para capturar eventos nativos
- 📊 Como comparar manipulação de DOM com e sem diretivas
- 🎭 Como aplicar classes e estilos dinamicamente
- 💾 Como usar `@Input` para personalizar diretivas
- 🏗️ Arquitetura e organização de código Angular

---

## 📚 Conceitos Angular Utilizados

| Conceito | Descrição |
|----------|-----------|
| **@Directive** | Decorador para criar diretivas customizadas |
| **@HostBinding** | Liga propriedades do host element (style, class, atributos) |
| **@HostListener** | Escuta eventos nativos do host element |
| **@Input** | Recebe valores externos em diretivas |
| **@Component** | Decorador para criar componentes |
| **AppModule** | Módulo raiz para declarar componentes e diretivas |
| **Property Binding** | Vincula propriedades com `[property]` |
| **Attribute Binding** | Vincula atributos com `[attr.property]` |
| **Event Binding** | Vincula eventos com `(event)` |
| **Style & Class Binding** | Vincula estilos e classes dinamicamente |

---

## 🚀 Como Começar

### 1️⃣ Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/projeto-directives.git
cd projeto-directives
```

### 2️⃣ Instalar Dependências

```bash
npm install
```

### 3️⃣ Iniciar o Servidor de Desenvolvimento

```bash
npm start
```

O projeto abrirá automaticamente em `http://localhost:4200/`

### 4️⃣ Explorar (Opcional)

- Abra o navegador e inspecione os elementos
- Abra o **DevTools** (F12) para ver os estilos sendo aplicados dinamicamente
- Consulte o **Console** para ver as mensagens dos `@HostListener`

### 5️⃣ Build para Produção

```bash
npm run build
```

Os artefatos serão salvos em `dist/projeto-directives`

### 6️⃣ Executar Testes

```bash
npm test
```

---

## 📁 Estrutura de Pastas

```
projeto-directives/
├── 📄 README.md                          # Este arquivo
├── 📄 package.json                       # Dependências e scripts
├── 📄 angular.json                       # Configuração do Angular
├── 📄 tsconfig.json                      # Configuração TypeScript
│
├── src/
│   ├── 📄 index.html                     # HTML principal
│   ├── 📄 main.ts                        # Ponto de entrada da aplicação
│   ├── 📄 styles.scss                    # Estilos globais
│   ├── 🗂️ assets/                        # Imagens, ícones, etc
│   │
│   └── 🗂️ app/                           # Módulo principal da aplicação
│       │
│       ├── 📄 app.module.ts              # Módulo raiz (declara tudo)
│       ├── 📄 app.component.ts           # Componente raiz
│       ├── 📄 app.component.html         # Template do componente raiz
│       ├── 📄 app.component.scss         # Estilos do componente raiz
│       ├── 📄 app.component.spec.ts      # Testes unitários
│       │
│       ├── 🗂️ directives/                # 🎯 Diretivas customizadas
│       │   ├── 📄 highlight.directive.ts
│       │   ├── 📄 disabled.directive.ts
│       │   ├── 📄 styles.directive.ts
│       │   ├── 📄 class.directive.ts
│       │   ├── 📄 listener.directive.ts
│       │   └── 📄 input-backgroung.directive.ts
│       │
│       ├── 🗂️ com-diretiva/              # Componente COM diretivas
│       │   ├── 📄 com-diretiva.component.ts
│       │   ├── 📄 com-diretiva.component.html
│       │   ├── 📄 com-diretiva.component.scss
│       │   └── 📄 com-diretiva.component.spec.ts
│       │
│       └── 🗂️ sem-diretiva/              # Componente SEM diretivas (comparativo)
│           ├── 📄 sem-diretiva.component.ts
│           ├── 📄 sem-diretiva.component.html
│           ├── 📄 sem-diretiva.component.scss
│           └── 📄 sem-diretiva.component.spec.ts
│
└── dist/                                 # Build de produção (gerado)
```

---

## 🎪 Diretivas Implementadas

### 1. 🌟 **HighlightDirective** (`highlight.directive.ts`)

Realça um elemento com cor de fundo ao passar o mouse.

**Uso no template:**
```html
<p appHighlight>Texto com highlight ao passar o mouse</p>
```

**Decoradores utilizados:**
- `@HostBinding('style.background-color')` - Liga a cor de fundo
- `@HostListener('mouseover')` - Escuta o evento de mouse entering
- `@HostListener('mouseout')` - Escuta o evento de mouse leaving

---

### 2. 🚫 **DisabledDirective** (`disabled.directive.ts`)

Define um elemento como desabilitado.

**Uso no template:**
```html
<button appDisabled>Botão desabilitado</button>
```

**Decoradores utilizados:**
- `@HostBinding('attr.disabled')` - Liga o atributo disabled

---

### 3. 🎨 **StylesDirective** (`styles.directive.ts`)

Aplica estilos CSS via objeto JavaScript.

**Uso no template:**
```html
<p appStyle>Parágrafo com estilos aplicados</p>
```

**Decoradores utilizados:**
- `@HostBinding('style')` - Liga um objeto de estilos

---

### 4. 📝 **ClassDirective** (`class.directive.ts`)

Aplica múltiplas classes CSS via objeto.

**Uso no template:**
```html
<p appClass>Parágrafo com classes aplicadas</p>
```

**Decoradores utilizados:**
- `@HostBinding('class')` - Liga um objeto de classes

---

### 5. 👂 **ListenerDirective** (`listener.directive.ts`)

Captura eventos de clique e digitação no console.

**Uso no template:**
```html
<input appListener />
```

**Decoradores utilizados:**
- `@HostListener('click')` - Captura clique
- `@HostListener('keyup', ['$event'])` - Captura digitação

---

### 6. 🎯 **InputBackgroundDirective** (`input-backgroung.directive.ts`)

Personaliza cores de fundo e texto de inputs ao ganhar/perder foco.

**Uso no template:**
```html
<input appInputBackground bgColor="green" tColor="white" />
```

**Decoradores utilizados:**
- `@Input('bgColor')` - Recebe cor de fundo customizável
- `@Input('tColor')` - Recebe cor de texto customizável
- `@HostBinding('style.backgroundColor')` - Liga a cor de fundo
- `@HostBinding('style.color')` - Liga a cor do texto
- `@HostListener('focus')` - Aplica estilos ao focar
- `@HostListener('blur')` - Remove estilos ao desfocar

---

## 🧩 Componentes

### 📦 **AppComponent** (Componente Raiz)

Componente principal que exibe todos os exemplos de diretivas.

**Responsabilidades:**
- Demonstrar todas as 6 diretivas
- Comparar binding de propriedade vs atributo
- Exibir diferentes formas de ligar estilos e classes

---

### 🎭 **SemDiretivaComponent** (Componente Comparativo)

Implementa a mesma funcionalidade do highlight **sem usar diretiva**.

**Como funciona:**
```typescript
// No componente
addBgColor: boolean = false;

onMouseOver() {
  this.addBgColor = true;
}

onMouseOut() {
  this.addBgColor = false;
}
```

```html
<!-- No template -->
<p
  [ngStyle]="{
    'background-color': addBgColor ? 'orange' : 'transparent',
  }"
  (mouseover)="onMouseOver()"
  (mouseout)="onMouseOut()"
>
  Parágrafo sem diretiva!
</p>
```

**Conclusão:** Mais verboso, lógica espalhada e não reutilizável.

---

### ✨ **ComDiretivaComponent** (Componente com Diretiva)

Implementa a mesma funcionalidade **usando a diretiva**.

**Como funciona:**
```html
<p appHighlight>Sou um parágrafo com diretiva!</p>
```

**Conclusão:** Mais limpo, código reutilizável e semântica clara.

---

## 💡 Aprendizados Principais

### 1. 🔄 **Por que usar Diretivas?**

| Aspecto | Sem Diretiva | Com Diretiva |
|---------|-------------|------------|
| **Linhas de código** | ❌ Muitas | ✅ Poucas |
| **Reutilização** | ❌ Difícil | ✅ Fácil |
| **Manutenção** | ❌ Dispersa | ✅ Centralizada |
| **Legibilidade** | ❌ Verbosa | ✅ Clara |
| **Testabilidade** | ❌ Complexa | ✅ Simples |

---

### 2. 🎯 **@HostBinding vs @HostListener**

**@HostBinding**: Liga propriedades do host element
```typescript
@HostBinding('style.color') textColor = 'red';
@HostBinding('class.active') isActive = true;
@HostBinding('attr.disabled') isDisabled = false;
```

**@HostListener**: Escuta eventos do host element
```typescript
@HostListener('click') onClick() { }
@HostListener('mouseover') onMouseOver() { }
@HostListener('focus') onFocus() { }
```

---

### 3. 📊 **Property Binding vs Attribute Binding**

```html
<!-- Property Binding (recomendado para propriedades) -->
<button [disabled]="false">Botão</button>
<div [style.color]="'red'">Texto vermelho</div>

<!-- Attribute Binding (para atributos HTML) -->
<button [attr.disabled]="false">Botão</button>
<div [attr.data-info]="'info'">Div</div>
```

---

### 4. 💾 **@Input em Diretivas**

Diretivas podem receber valores customizáveis:

```typescript
export class InputBackgroundDirective {
  @Input('bgColor') appInputBackground: string = 'white';
  @Input('tColor') textColor: string = 'black';
}
```

```html
<input appInputBackground bgColor="green" tColor="white" />
```

---

### 5. 🏗️ **Organização de Código**

- Diretivas devem ser **simples e específicas**
- Cada diretiva deve fazer **uma coisa bem**
- Lógica complexa deve ficar em **componentes ou serviços**
- Sempre declare diretivas no **module**

---

### 6. 🐛 **Debugging**

```typescript
@HostListener('click')
onClick() {
  console.log('Elemento clicado!');
}
```

Abra o DevTools (F12) e veja as mensagens no **Console**.

---

## 🛠️ Tecnologias

- **Angular** 16.1.0 - Framework frontend
- **TypeScript** 5.1.3 - Linguagem de programação
- **SCSS** - Pré-processador CSS
- **Node.js** - Runtime JavaScript
- **npm** - Gerenciador de pacotes
- **Karma** - Test runner
- **Jasmine** - Framework de testes

---

## 📖 Recursos Úteis

- [Documentação oficial do Angular - Directives](https://angular.io/guide/directive)
- [Angular - @HostBinding e @HostListener](https://angular.io/api/core/HostBinding)
- [Angular - Property vs Attribute Binding](https://angular.io/guide/attribute-binding)

---

## 📝 Licença

Este projeto é de **código aberto** e pode ser usado livremente para fins educacionais.

---

## ✨ Divirta-se Aprendendo!

Se você encontrou este repositório útil, considere dar uma ⭐ **star** para apoiar o projeto!

Dúvidas? Abra uma **issue** no GitHub!

---

**Criado com ❤️ para a comunidade Angular**
