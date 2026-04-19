# 🎯 Projeto Element Ref

Projeto educacional desenvolvido em **Angular 16** para aprender e explorar os recursos nativos do DOM e como interagir com ele de forma eficiente e segura através da API do Angular.

---

## 📋 Índice

- [Descrição](#-descrição)
- [Objetivo](#-objetivo)
- [Conceitos Utilizados](#-conceitos-utilizados)
- [Como Executar](#-como-executar)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Aprendizados Principais](#-aprendizados-principais)
- [Recursos Úteis](#-recursos-úteis)
- [Licença](#-licença)

---

## 📖 Descrição

Este é um projeto Angular prático que demonstra como trabalhar com **ElementRef**, **ViewChild** e manipulação do DOM de forma integrada ao framework Angular. O projeto inclui exemplos práticos de como acessar elementos HTML, modificar suas propriedades, adicionar classes CSS dinamicamente e capturar eventos.

**Versões utilizadas:**
- **Node.js**: 18.x ou superior (recomendado)
- **Angular**: 16.1.0
- **TypeScript**: 5.1.3
- **SCSS**: Habilitado

---

## 🎯 Objetivo

Demonstrar as melhores práticas de manipulação do DOM em Angular, incluindo:
- Uso seguro e eficiente de ElementRef
- Aplicação do decorador ViewChild para acessar elementos do template
- Desenvolvimento de diretivas customizadas
- Compreensão dos hooks de ciclo de vida (Lifecycle Hooks)
- Manipulação segura de atributos e eventos do DOM

**Tecnologias e Ferramentas:**

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| Angular | 16.1.0 | Framework principal |
| TypeScript | 5.1.3 | Linguagem de tipagem |
| SCSS | Nativa | Pré-processador CSS |
| RxJS | 7.8.0 | Programação reativa |
| Karma | 6.4.0 | Test runner |
| Jasmine | 4.6.0 | Framework de testes |

---

## 🧠 Conceitos Utilizados

| Conceito | Descrição |
|----------|-----------|
| **ElementRef** | Classe que encapsula um elemento DOM nativo, permitindo acesso seguro ao elemento HTML através da propriedade `nativeElement` |
| **ViewChild** | Decorador que permite referenciar um elemento do template e acessá-lo a partir do componente TypeScript |
| **Diretivas** | Extensões Angular que permitem adicionar comportamentos customizados a elementos do DOM |
| **AfterViewInit** | Hook de ciclo de vida chamado após a visualização do componente e suas visualizações filhas serem inicializadas |
| **OnInit** | Hook de ciclo de vida chamado após a construção do componente e inicialização de suas propriedades |
| **querySelector** | Método nativo do DOM para selecionar elementos com base em seletores CSS |
| **classList** | Interface para manipular as classes CSS de um elemento dinamicamente |
| **addEventListener** | Método para registrar listeners de eventos em elementos do DOM |
| **nativeElement** | Propriedade de ElementRef que fornece acesso direto ao elemento DOM nativo |
| **Template Variables** | Variáveis locais definidas no template HTML com `#` para referenciar elementos |

---

## 🚀 Como Executar

### Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **npm** (geralmente vem com Node.js)
- **Git** instalado na máquina

### Passo a Passo

#### 1️⃣ Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/projeto-element-ref.git
cd projeto-element-ref
```

#### 2️⃣ Instalar Dependências

```bash
npm install
```

Este comando instala todas as dependências do projeto listadas no `package.json`.

#### 3️⃣ Iniciar o Servidor de Desenvolvimento

```bash
npm start
```

ou

```bash
ng serve
```

O servidor iniciará em `http://localhost:4200/` e a aplicação será recarregada automaticamente a cada mudança no código.

#### 4️⃣ Visualizar no Navegador

Abra seu navegador e acesse:

```
http://localhost:4200/
```

#### 5️⃣ Executar Testes (Opcional)

```bash
npm test
```

Este comando executa os testes unitários da aplicação usando Karma e Jasmine.

#### 6️⃣ Fazer Build para Produção

```bash
npm run build
```

Os arquivos compilados serão gerados na pasta `dist/projeto-element-ref`.

---

## 📁 Estrutura de Pastas

```
projeto-element-ref/
├── src/
│   ├── app/
│   │   ├── directives/
│   │   │   └── 📄 focus-second-input.directive.ts
│   │   ├── 📄 app.component.ts
│   │   ├── 📄 app.component.html
│   │   ├── 📄 app.component.scss
│   │   ├── 📄 app.component.spec.ts
│   │   └── 📄 app.module.ts
│   ├── assets/
│   ├── 📄 index.html
│   ├── 📄 main.ts
│   └── 📄 styles.scss
├── 📄 angular.json
├── 📄 package.json
├── 📄 tsconfig.json
├── 📄 tsconfig.app.json
├── 📄 tsconfig.spec.json
└── 📄 README.md
```

### Descrição dos Diretórios Principais

**`src/`** - Código-fonte da aplicação

**`src/app/`** - Componentes, diretivas e módulos da aplicação
- **`directives/`** - Diretivas customizadas (exemplo: FocusSecondInputDirective)
- **`app.component.ts`** - Componente raiz da aplicação
- **`app.module.ts`** - Módulo raiz que declara componentes e diretivas

**`src/assets/`** - Arquivos estáticos (imagens, fontes, etc.)

---

## 💡 Aprendizados Principais

### 1. **Acessar Elementos do Template com ViewChild**
```typescript
@ViewChild('minhaDiv') divEl!: ElementRef<HTMLDivElement>;
```
O decorador `@ViewChild` permite referenciar elementos do template no componente.

### 2. **Manipular o DOM com ElementRef**
```typescript
this.divEl.nativeElement.style.backgroundColor = 'orange';
this.divEl.nativeElement.textContent = 'Olá!';
```
Acesse e modifique propriedades do elemento DOM através da propriedade `nativeElement`.

### 3. **Usar Hooks de Ciclo de Vida Corretamente**
- **`ngOnInit`**: Use para inicializar dados antes da visualização
- **`ngAfterViewInit`**: Use quando precisar interagir com elementos do template

### 4. **Criar Diretivas Customizadas**
Diretivas permitem reutilizar comportamentos em múltiplos elementos:
```typescript
@Directive({
  selector: '[appFocusSecondInput]'
})
```

### 5. **Injeção de Dependência no Angular**
O Angular injeta automaticamente `ElementRef` no construtor, fornecendo acesso seguro ao DOM.

### 6. **Manipulação Segura do DOM**
Sempre use as abstrações do Angular (ElementRef, ViewChild, etc.) em vez de acessar `document` diretamente, pois promove testabilidade e compatibilidade.

---

## 🔗 Recursos Úteis

- **[Documentação Oficial Angular - ElementRef](https://angular.io/api/core/ElementRef)**
  Aprenda sobre a classe ElementRef e como acessar elementos DOM de forma segura.

- **[Documentação Oficial Angular - ViewChild](https://angular.io/api/core/ViewChild)**
  Entenda como usar o decorador ViewChild para referenciar elementos do template.

- **[Documentação Oficial Angular - Diretivas](https://angular.io/guide/attribute-directives)**
  Guia completo sobre como criar e usar diretivas customizadas.

- **[Documentação Oficial Angular - Lifecycle Hooks](https://angular.io/guide/lifecycle-hooks)**
  Conheça todos os hooks de ciclo de vida disponíveis no Angular.

- **[MDN Web Docs - DOM API](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model)**
  Referência completa da API nativa do DOM do navegador.

- **[Angular CLI Documentation](https://angular.io/cli)**
  Documentação oficial do Angular CLI com todos os comandos disponíveis.

- **[TypeScript Official Documentation](https://www.typescriptlang.org/docs/)**
  Documentação oficial do TypeScript para aprofundar conhecimentos na linguagem.

---

## 📄 Licença

Este projeto é de código aberto e pode ser usado livremente, considere dar uma ⭐ estrela para apoiar.

Desenvolvido por [Bruno Santa Rosa](https://www.linkedin.com/in/bhsantarosa/)

---

**Última atualização**: Abril de 2026
