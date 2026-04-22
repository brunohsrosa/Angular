# 🎯 Pokedex Pro

Uma aplicação web moderna para explorar e descobrir informações sobre Pokémons usando Angular 17 e a PokeAPI. Navegue por um catálogo completo com mais de 1.500 Pokémons, busque por nome, visualize cards interativos e explore diferentes gerações.

<img width="1260" height="1071" alt="image" src="https://github.com/user-attachments/assets/30daea58-b35f-4f33-8b0b-261f19d380d1" />
<img width="1276" height="1088" alt="image" src="https://github.com/user-attachments/assets/2b71bd87-59cd-4960-a090-4422d364fe7a" />


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

**Pokedex Pro** é uma aplicação desenvolvida em **Angular 17.3.0** com **TypeScript 5.4.2**, oferecendo uma experiência interativa e responsiva para consultar dados de Pokémons.

A aplicação integra-se com a **PokeAPI**, uma API RESTful gratuita que fornece dados completos sobre todos os Pokémons das diferentes gerações. O projeto utiliza **componentes standalone** do Angular moderno, garantindo uma estrutura limpa, modular e escalável.

**Versões:**
- 🔷 **Angular**: 17.3.0
- 🔵 **Node.js**: Recomendado 18.x ou superior
- 📘 **TypeScript**: 5.4.2

---

## 🎯 Objetivo e Tecnologias

### Objetivo

Criar uma aplicação web moderna que permita aos usuários explorar o universo Pokémon de forma intuitiva e eficiente, aplicando conceitos avançados do Angular 17 como componentes standalone, reatividade com RxJS e integração com APIs externas.

### Badges

![Angular](https://img.shields.io/badge/Angular-17.3.0-red?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4.2-blue?logo=typescript&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-7.8.0-purple?logo=reactivex&logoColor=white)
![License](https://img.shields.io/badge/License-Open%20Source-green)

### Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|-----------|--------|-----------|
| **Angular** | 17.3.0 | Framework principal para construção da aplicação |
| **TypeScript** | 5.4.2 | Linguagem tipada para JavaScript |
| **RxJS** | 7.8.0 | Biblioteca reativa para operações assíncronas |
| **Angular Router** | 17.3.0 | Roteamento e navegação entre componentes |
| **HttpClient** | 17.3.0 | Cliente HTTP para requisições à API |
| **Angular Forms** | 17.3.0 | Gerenciamento de formulários e inputs |
| **Angular Common** | 17.3.0 | Estruturas comuns (diretivas, pipes) |
| **Karma** | 6.4.0 | Test runner para testes unitários |
| **Jasmine** | 5.1.0 | Framework de testes |
| **PokeAPI** | v2 | API externa para dados de Pokémons |

---

## 📚 Conceitos Utilizados

| Conceito | Descrição |
|----------|-----------|
| **Standalone Components** | Componentes Angular independentes sem necessidade de módulos, proporcionando maior modularidade e flexibilidade |
| **Services** | Camada de lógica de negócio reutilizável para comunicação com APIs e gerenciamento de dados |
| **Dependency Injection** | Padrão de injeção de dependências para melhor testabilidade e manutenibilidade do código |
| **RxJS Observables** | Streams reativos para lidar com operações assíncronas como requisições HTTP e eventos do usuário |
| **Operators RxJS** | `debounceTime()`, `distinctUntilChanged()`, `map()` para otimizar e transformar dados |
| **Two-Way Binding** | `[(ngModel)]` para sincronização bidirecional entre template e componente |
| **Event Emitters** | `@Output()` e `EventEmitter` para comunicação entre componentes pais e filhos |
| **HttpClient** | Cliente HTTP integrado para requisições GET à PokeAPI |
| **Async Pipe** | Pipe do Angular para gerenciar Observables automaticamente no template |
| **ngFor e ngIf** | Diretivas estruturais para renderização condicional e repetição de elementos |
| **CSS Responsivo** | Estilos adaptativos para diferentes tamanhos de tela |
| **Interfaces TypeScript** | Tipagem forte com interfaces para modelos de dados (Pokemon) |
| **AppConfig** | Configuração centralizada da aplicação com providers de roteamento e HTTP |

---

## 🚀 Como Executar

### Pré-requisitos

- **Node.js** 18.x ou superior
- **npm** 9.x ou superior
- **Git** instalado no seu sistema

### Passo 1: Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/pokedex-pro.git
cd pokedex-pro
```

### Passo 2: Instalar Dependências

```bash
npm install
```

Este comando instala todas as dependências listadas no `package.json`, incluindo Angular CLI, RxJS e demais bibliotecas necessárias.

### Passo 3: Iniciar o Servidor de Desenvolvimento

```bash
npm start
```

ou

```bash
ng serve
```

O servidor iniciará em `http://localhost:4200/`. A aplicação será aberta automaticamente no seu navegador.

### Passo 4: Acessar a Aplicação

Abra seu navegador e acesse:

```
http://localhost:4200/
```

A página será recarregada automaticamente conforme você faz alterações no código.

### Comandos Úteis

| Comando | Descrição |
|---------|-----------|
| `npm start` | Inicia o servidor de desenvolvimento |
| `npm run build` | Cria uma build otimizada para produção |
| `npm run watch` | Monitora alterações e reconstrói o projeto |
| `npm test` | Executa os testes unitários |
| `ng serve --open` | Inicia o servidor e abre no navegador |
| `ng build --configuration production` | Build otimizado para produção |

---

## 📁 Estrutura de Pastas

```
pokedex-pro/
├── 📄 angular.json                    # Configuração do Angular CLI
├── 📄 package.json                    # Dependências do projeto
├── 📄 tsconfig.json                   # Configuração TypeScript
├── 📄 tsconfig.app.json               # Configuração TypeScript para aplicação
├── 📄 tsconfig.spec.json              # Configuração TypeScript para testes
├── 📄 README.md                       # Este arquivo
│
├── 🗂️ src/                            # Código-fonte da aplicação
│   ├── 📄 index.html                  # Página HTML principal
│   ├── 📄 main.ts                     # Ponto de entrada da aplicação
│   ├── 📄 styles.css                  # Estilos globais
│   │
│   └── 🗂️ app/                        # Módulo principal da aplicação
│       ├── 📄 app.component.ts        # Componente raiz
│       ├── 📄 app.component.html      # Template do componente raiz
│       ├── 📄 app.component.css       # Estilos do componente raiz
│       ├── 📄 app.component.spec.ts   # Testes do componente raiz
│       ├── 📄 app.config.ts           # Configuração da aplicação (providers)
│       ├── 📄 app.routes.ts           # Rotas da aplicação
│       ├── 📄 pokemon.service.ts      # Serviço para API de Pokémons
│       ├── 📄 pokemon.service.spec.ts # Testes do serviço
│       │
│       ├── 🗂️ components/             # Componentes reutilizáveis
│       │   ├── 🗂️ header/
│       │   │   ├── 📄 header.component.ts
│       │   │   ├── 📄 header.component.html
│       │   │   ├── 📄 header.component.css
│       │   │   └── 📄 header.component.spec.ts
│       │   │
│       │   ├── 🗂️ pokemon-grid/
│       │   │   ├── 📄 pokemon-grid.component.ts
│       │   │   ├── 📄 pokemon-grid.component.html
│       │   │   ├── 📄 pokemon-grid.component.css
│       │   │   └── 📄 pokemon-grid.component.spec.ts
│       │   │
│       │   ├── 🗂️ pokemon-card/
│       │   │   ├── 📄 pokemon-card.component.ts
│       │   │   ├── 📄 pokemon-card.component.html
│       │   │   ├── 📄 pokemon-card.component.css
│       │   │   └── 📄 pokemon-card.component.spec.ts
│       │   │
│       │   └── 🗂️ search-bar/
│       │       ├── 📄 search-bar.component.ts
│       │       ├── 📄 search-bar.component.html
│       │       ├── 📄 search-bar.component.css
│       │       └── 📄 search-bar.component.spec.ts
│       │
│       ├── 🗂️ models/                 # Interfaces e tipos TypeScript
│       │   └── 📄 pokemon.model.ts    # Interface Pokemon
│       │
│       └── 🗂️ styles/                 # Utilitários de estilo
│           ├── 📄 pokemon-colors.ts   # Paleta de cores por tipo
│           ├── 📄 pokemon-color.ts    # Mapeamento de cores
│           └── 📄 pokemon-translations.ts  # Traduções para português
│
├── 🗂️ assets/                         # Recursos estáticos
│   └── 🗂️ images/                     # Imagens da aplicação
│
└── 🗂️ dist/                           # Build gerado (após ng build)
```

### Descrição dos Diretórios Principais

- **src/app/components/**: Componentes reutilizáveis da aplicação (header, cards, grid, busca)
- **src/app/models/**: Interfaces TypeScript que definem a estrutura dos dados
- **src/app/styles/**: Utilitários de estilo e configurações de cores
- **src/assets/**: Recursos estáticos como imagens e ícones
- **dist/**: Gerado automaticamente com `ng build` contendo a aplicação otimizada

---

## 💡 Aprendizados Principais

### 1. **Componentes Standalone do Angular 17**
   - Entender como criar componentes independentes sem necessidade de módulos
   - Usar `standalone: true` para maior flexibilidade e modularidade
   - Importar dependências diretamente nos componentes

### 2. **Serviços e Injeção de Dependência**
   - Criar serviços reutilizáveis com `@Injectable()`
   - Consumir APIs externas com `HttpClient`
   - Gerenciar estado da aplicação através de serviços centralizados

### 3. **RxJS e Reatividade**
   - Trabalhar com Observables para operações assíncronas
   - Usar operators como `debounceTime()` e `distinctUntilChanged()` para otimizar performance
   - Implementar busca em tempo real sem sobrecarregar a API

### 4. **Comunicação entre Componentes**
   - Usar `@Input()` para passar dados do pai para o filho
   - Usar `@Output()` e `EventEmitter` para comunicação reversa
   - Implementar padrões de comunicação eficientes

### 5. **Integração com APIs Externas**
   - Consumir dados da PokeAPI de forma eficiente
   - Tratar erros e exceções em requisições HTTP
   - Implementar tratamento de dados assíncronos

### 6. **Boas Práticas em Angular**
   - Organização de código limpo e modular
   - Separação de responsabilidades (componentes, serviços, modelos)
   - Componentização de funcionalidades reutilizáveis
   - Tipagem forte com TypeScript

### 7. **Performance e Otimização**
   - Implementar debouncing em campos de busca
   - Evitar multiple subscriptions com async pipe
   - Otimizar renderização com `trackBy` em listas
   - Lazy loading de dados com paginação

### 8. **Two-Way Binding e Reatividade**
   - Sincronização bidirecional com `[(ngModel)]`
   - Diretivas estruturais (`*ngFor`, `*ngIf`)
   - Tratamento de eventos do DOM com `(evento)`

---

## 🔗 Recursos Úteis

### Documentação Oficial Angular

- **[Angular Official Documentation](https://angular.io/docs)** - Documentação completa do Angular
- **[Standalone Components](https://angular.io/guide/standalone-components)** - Guia sobre componentes standalone
- **[Angular Services](https://angular.io/guide/architecture-services)** - Guia de criação e uso de serviços
- **[HttpClient Guide](https://angular.io/guide/http)** - Documentação do cliente HTTP
- **[RxJS Operators](https://rxjs.dev/api)** - Referência completa de operadores RxJS
- **[Angular Router](https://angular.io/guide/router)** - Guia de roteamento
- **[Dependency Injection](https://angular.io/guide/dependency-injection)** - Padrão de injeção de dependência
- **[Component Interaction](https://angular.io/guide/component-interaction)** - Comunicação entre componentes
- **[Testing in Angular](https://angular.io/guide/testing)** - Guia de testes com Jasmine e Karma

### Recursos Externos

- **[PokeAPI Documentation](https://pokeapi.co/docs/v2)** - Documentação da API de Pokémons
- **[TypeScript Documentation](https://www.typescriptlang.org/docs/)** - Documentação do TypeScript
- **[RxJS Documentation](https://rxjs.dev/)** - Documentação completa do RxJS
- **[MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)** - Referência de CSS
- **[Node.js Official](https://nodejs.org/)** - Download e documentação do Node.js

### Ferramentas Recomendadas

- **[Visual Studio Code](https://code.visualstudio.com/)** - Editor recomendado
- **[Angular DevTools Extension](https://angular.io/guide/devtools)** - Extensão Chrome para debugging
- **[Postman](https://www.postman.com/)** - Teste APIs antes de integrar

---

## 📄 Licença

Este projeto é de código aberto e pode ser usado livremente, considere dar uma estrela ⭐ para apoiar.

---

## 👨‍💼 Desenvolvido por

**Bruno Santa Rosa**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bhsantarosa/)

---

<div align="center">

**Feito com ❤️ para a comunidade Angular**

*Último update: 2026*

</div>
