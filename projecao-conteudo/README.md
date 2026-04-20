# 🎯 Projeção de Conteúdo - Componentes Angular Avançados

Um projeto educacional que demonstra padrões avançados de desenvolvimento com Angular, focando em **projeção de conteúdo**, **diretivas personalizadas** e **modularização de componentes**.

---

## 📋 Índice

- [Descrição do Projeto](#-descrição-do-projeto)
- [Objetivo e Tecnologias](#-objetivo-e-tecnologias)
- [Conceitos Utilizados](#-conceitos-utilizados)
- [Como Executar](#-como-executar)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Aprendizados Principais](#-aprendizados-principais)
- [Recursos Úteis](#-recursos-úteis)
- [Licença](#-licença)

---

## 📖 Descrição do Projeto

Este projeto foi desenvolvido utilizando **Angular 17.3.0** com **TypeScript 5.4.2**. É uma aplicação que exemplifica o uso de componentes reutilizáveis e diretivas personalizadas, seguindo as melhores práticas de arquitetura Angular.

O projeto segue um padrão onde componentes que projetam conteúdo possuem apenas estilos e lógicas comuns a todas as implementações. Para customizações individuais de estilos e lógicas, utiliza-se o componente pai, promovendo reusabilidade e manutenibilidade.

**Versões Utilizadas:**
- **Angular:** 17.3.0
- **TypeScript:** 5.4.2
- **Node.js:** 18+ (recomendado)
- **RxJS:** 7.8.0

---

## 🎯 Objetivo e Tecnologias

### Objetivo
Demonstrar a implementação de padrões avançados Angular com foco em:
- Criação de componentes reutilizáveis
- Uso de diretivas personalizadas para estruturação de componentes
- Projeção de conteúdo (_Content Projection_)
- Organização modular de código

### 🏷️ Badges

[![Angular 17](https://img.shields.io/badge/Angular-17.3.0-red?style=flat-square&logo=angular)](https://angular.io)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4.2-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![SCSS](https://img.shields.io/badge/Style-SCSS-pink?style=flat-square&logo=sass)](https://sass-lang.com)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green?style=flat-square&logo=node.js)](https://nodejs.org)

### 💻 Tecnologias

| Tecnologia | Descrição |
|-----------|-----------|
| **Angular** | Framework front-end para construção de SPAs (Single Page Applications) |
| **TypeScript** | Linguagem de tipagem estática que compila para JavaScript |
| **SCSS** | Pré-processador CSS com suporte a variáveis, funções e nesting |
| **RxJS** | Biblioteca para programação reativa |
| **Karma** | Test runner para testes unitários |
| **Jasmine** | Framework de testes comportamentais |

---

## 📚 Conceitos Utilizados

| Conceito | Descrição |
|----------|-----------|
| **Diretivas Personalizadas** | Extensão da funcionalidade DOM através de seletores CSS customizados. Utilizadas para estruturar internamente o Card Component |
| **Projeção de Conteúdo** | Mecanismo que permite passar templates do componente pai para o filho. Essencial para criar componentes flexíveis e reutilizáveis |
| **Component Selector** | Define como o componente será utilizado no template. Pode ser um seletor de elemento ou atributo |
| **Modularização** | Organização do código em módulos funcionais, facilitando manutenção e testes |
| **Padrão BEM para CSS** | Convenção de nomenclatura CSS (Block, Element, Modifier) utilizada nos estilos do projeto |
| **Binding de Propriedades** | Mecanismo de two-way binding entre componente e template (`[property]="value"`) |
| **Decoradores Angular** | `@Component`, `@Directive`, `@NgModule` utilizados para declarar comportamento de classes |

---

## 🚀 Como Executar

### 1️⃣ Pré-requisitos

Certifique-se de ter instalado:
- **Node.js** 18+ ([download](https://nodejs.org))
- **npm** 9+ (incluído com Node.js) ou **yarn**

### 2️⃣ Clonar o Repositório

```bash
git clone https://github.com/bhsantarosa/projecao-conteudo.git
cd projecao-conteudo
```

### 3️⃣ Instalar Dependências

```bash
npm install
```

### 4️⃣ Executar em Desenvolvimento

```bash
npm start
```

O servidor de desenvolvimento será iniciado em `http://localhost:4200/`. A aplicação recarregará automaticamente ao detectar alterações nos arquivos.

### 5️⃣ Executar Build de Produção

```bash
npm run build
```

Os artefatos compilados serão armazenados no diretório `dist/`.

### 6️⃣ Executar Testes Unitários

```bash
npm test
```

Os testes serão executados via Karma. O navegador abrirá automaticamente com os resultados.

---

## 📁 Estrutura de Pastas

```
projecao-conteudo/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── card/
│   │   │   │   ├── directives/
│   │   │   │   │   ├── base/
│   │   │   │   │   │   ├── card-header.directive.ts
│   │   │   │   │   │   └── card-content.directive.ts
│   │   │   │   │   ├── images/
│   │   │   │   │   │   ├── card-large-image.directive.ts
│   │   │   │   │   │   └── card-small-image.directive.ts
│   │   │   │   │   └── texts/
│   │   │   │   │       ├── card-main-text.directive.ts
│   │   │   │   │       ├── card-sub-text.directive.ts
│   │   │   │   │       └── card-description-text.directive.ts
│   │   │   │   ├── card.component.ts
│   │   │   │   ├── card.component.html
│   │   │   │   ├── card.component.scss
│   │   │   │   └── card.component.spec.ts
│   │   │   └── comp-texto/
│   │   │       ├── comp-texto.component.ts
│   │   │       ├── comp-texto.component.html
│   │   │       ├── comp-texto.component.scss
│   │   │       └── comp-texto.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.module.ts
│   │   └── app-routing.module.ts
│   ├── assets/
│   │   └── icons/
│   ├── styles/
│   │   └── components/
│   │       └── _card.scss
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── angular.json
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.spec.json
└── README.md
```

### 📌 Descrição dos Diretórios Principais

- **`src/app/components/`** - Componentes reutilizáveis da aplicação
- **`src/app/components/card/`** - Componente Card com suas diretivas estruturantes
- **`src/styles/`** - Estilos globais e por componente
- **`src/assets/`** - Recursos estáticos (ícones, imagens, etc.)

---

## 💡 Aprendizados Principais

### 1. **Projeção de Conteúdo Dinâmica**
O padrão utilizado permite que componentes filhos recebam conteúdo dinamicamente, aumentando sua flexibilidade e reusabilidade sem necessidade de múltiplas implementações.

### 2. **Diretivas como Estruturadores de DOM**
Diretivas personalizadas foram utilizadas não apenas para aplicar estilos, mas também como selectores semânticos para estruturar internamente componentes complexos.

### 3. **Separação de Responsabilidades**
Componentes mantêm apenas lógica comum, enquanto customizações individuais ficam a cargo do componente pai. Isso segue o princípio SOLID de responsabilidade única.

### 4. **Modularização Angular**
O uso de `NgModule` permite organizar funcionalidades de forma clara e facilita testes e manutenção do código.

### 5. **BEM CSS em Grandes Projetos**
A convenção BEM (Block, Element, Modifier) fornece uma estrutura clara de nomenclatura CSS, evitando conflitos e melhorando a manutenibilidade de estilos.

### 6. **TypeScript e Type Safety**
Utilizar TypeScript desde o início garante melhor documentação do código e captura de erros em tempo de desenvolvimento.

---

## 📚 Recursos Úteis

### Documentação Oficial Angular

- [Angular - Official Documentation](https://angular.io/docs) - Documentação oficial do Angular
- [Content Projection](https://angular.io/guide/content-projection) - Guia completo sobre projeção de conteúdo
- [Creating Custom Directives](https://angular.io/guide/attribute-directives) - Como criar diretivas personalizadas
- [Component Styles](https://angular.io/guide/component-styles) - Encapsulamento de estilos em componentes
- [Angular Module Documentation](https://angular.io/guide/ngmodules) - Guia sobre módulos Angular
- [Attribute Directives Guide](https://angular.io/guide/attribute-directives) - Diretivas de atributo
- [Structural Directives](https://angular.io/guide/structural-directives) - Diretivas estruturais como `*ngIf` e `*ngFor`

### Recursos Adicionais

- [SCSS Official Documentation](https://sass-lang.com/documentation) - Documentação do SCSS
- [BEM Naming Convention](http://getbem.com) - Padrão BEM para nomenclatura CSS
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - Guia oficial do TypeScript
- [RxJS Documentation](https://rxjs.dev/) - Documentação da biblioteca RxJS

---

## 📜 Licença

Este projeto é de código aberto e pode ser usado livremente, considere dar uma estrela ⭐ para apoiar.

**Desenvolvido por** [Bruno Santa Rosa](https://www.linkedin.com/in/bhsantarosa/) - LinkedIn

---

**Última atualização:** Abril de 2026
