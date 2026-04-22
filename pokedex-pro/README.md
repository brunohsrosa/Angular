# 🎯 Pokedex Pro

Uma aplicação web moderna para explorar e descobrir informações sobre Pokémons usando Angular 17 e a PokeAPI. Navegue por um catálogo completo com mais de 1.500 Pokémons, busque por nome, filtre por tipo, visualize cards interativos com detalhes e explore diferentes gerações com uma interface responsiva e intuitiva.

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

**Pokedex Pro** é uma aplicação desenvolvida em **Angular 17.3.0** com **TypeScript 5.4.2**, oferecendo uma experiência interativa e responsiva para consultar dados de Pokémons com funcionalidades avançadas de busca e filtragem.

A aplicação integra-se com a **PokeAPI**, uma API RESTful gratuita que fornece dados completos sobre todos os Pokémons das diferentes gerações. O projeto utiliza **componentes standalone** do Angular moderno com gerenciamento de estado reativo, garantindo uma estrutura limpa, modular e altamente escalável.

**Versões:**
- 🔷 **Angular**: 17.3.0
- 🔵 **Node.js**: Recomendado 18.x ou superior
- 📘 **TypeScript**: 5.4.2

---

## 🎯 Objetivo e Tecnologias

### Objetivo

Criar uma aplicação web moderna e responsiva que permita aos usuários explorar o universo Pokémon de forma intuitiva e eficiente. O projeto aplica conceitos avançados do Angular 17 como componentes standalone, gerenciamento de estado reativo, acesso ao DOM com ViewChild, filtragem em tempo real e integração com APIs externas, demonstrando boas práticas de desenvolvimento Angular moderno.

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
| **ViewChild e ElementRef** | Acesso direto aos elementos do DOM para interações e manipulações do template |
| **Event Emitters** | `@Output()` e `EventEmitter` para comunicação entre componentes pais e filhos |
| **HttpClient** | Cliente HTTP integrado para requisições GET à PokeAPI com filtragem de dados |
| **Async Pipe** | Pipe do Angular para gerenciar Observables automaticamente no template |
| **ngFor e ngIf** | Diretivas estruturais para renderização condicional e repetição de elementos |
| **CSS Responsivo** | Estilos adaptativos para diferentes tamanhos de tela com layout moderno |
| **Interfaces TypeScript** | Tipagem forte com interfaces para modelos de dados (Pokemon) |
| **AppConfig** | Configuração centralizada da aplicação com providers de roteamento e HTTP |
| **Subject e Filtragem** | RxJS Subject para gerenciar fluxos de busca e filtros em tempo real |
| **Paleta de Cores Dinâmica** | Mapeamento de cores por tipo de Pokémon para UI contextualizada |
| **Internacionalização Básica** | Traduções de tipos e stats para português brasileiro |

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
│       ├── 📄 app.component.ts        # Componente raiz (standalone)
│       ├── 📄 app.component.html      # Template do componente raiz
│       ├── 📄 app.component.css       # Estilos do componente raiz
│       ├── 📄 app.component.spec.ts   # Testes do componente raiz
│       ├── 📄 app.config.ts           # Configuração da aplicação (providers)
│       ├── 📄 app.routes.ts           # Definição de rotas
│       ├── 📄 pokemon.service.ts      # Serviço para integração com PokeAPI
│       ├── 📄 pokemon.service.spec.ts # Testes unitários do serviço
│       │
│       ├── 🗂️ components/             # Componentes reutilizáveis (standalone)
│       │   ├── 🗂️ header/
│       │   │   ├── 📄 header.component.ts      # Componente de cabeçalho com busca
│       │   │   ├── 📄 header.component.html    # Template do cabeçalho
│       │   │   ├── 📄 header.component.css     # Estilos do cabeçalho
│       │   │   └── 📄 header.component.spec.ts # Testes do cabeçalho
│       │   │
│       │   ├── 🗂️ pokemon-grid/
│       │   │   ├── 📄 pokemon-grid.component.ts      # Grid com filtragem e paginação
│       │   │   ├── 📄 pokemon-grid.component.html    # Template do grid
│       │   │   ├── 📄 pokemon-grid.component.css     # Estilos do grid
│       │   │   └── 📄 pokemon-grid.component.spec.ts # Testes do grid
│       │   │
│       │   └── 🗂️ pokemon-card/
│       │       ├── 📄 pokemon-card.component.ts      # Card individual do Pokémon
│       │       ├── 📄 pokemon-card.component.html    # Template do card
│       │       ├── 📄 pokemon-card.component.css     # Estilos do card
│       │       └── 📄 pokemon-card.component.spec.ts # Testes do card
│       │
│       ├── 🗂️ models/                 # Interfaces e tipos TypeScript
│       │   └── 📄 pokemon.model.ts    # Interface Pokemon
│       │
│       └── 🗂️ styles/                 # Utilitários de estilo e configurações
│           ├── 📄 pokemon-color.ts    # Mapeamento de cores por tipo
│           ├── 📄 pokemon-colors.ts   # Paleta completa de cores
│           └── 📄 pokemon-translations.ts  # Traduções para português (tipos e stats)
│
├── 🗂️ assets/                         # Recursos estáticos
│   └── 🗂️ images/                     # Imagens da aplicação
│
└── 🗂️ dist/                           # Build gerado (após ng build)
```

### Descrição dos Diretórios Principais

- **src/app/components/**: Componentes reutilizáveis standalone da aplicação
  - `header/`: Componente com campo de busca integrado e filtros
  - `pokemon-grid/`: Gerencia a lista de Pokémons com filtragem, busca e paginação
  - `pokemon-card/`: Card individual com detalhes do Pokémon e cores temáticas
  
- **src/app/models/**: Interfaces TypeScript para tipagem forte dos dados

- **src/app/styles/**: Utilitários de configuração visual (cores e traduções)

- **src/app/services/**: Serviço de integração com PokeAPI

- **src/assets/**: Recursos estáticos como imagens e ícones

---

## 💡 Aprendizados Principais

### 1. **Componentes Standalone do Angular 17**
   - Criar componentes independentes sem necessidade de módulos
   - Usar `standalone: true` para maior flexibilidade e modularidade
   - Importar dependências diretamente no componente com `imports: []`

### 2. **Gerenciamento de Estado Reativo**
   - Usar RxJS Subject para gerenciar fluxos de busca e filtros
   - Implementar padrão de estado com `allPokemons`, `filteredList`, `pokemons`
   - Separar dados brutos, filtrados e exibidos para melhor performance

### 3. **Acesso ao DOM com ViewChild**
   - Usar `@ViewChild()` para acessar elementos específicos do template
   - Trabalhar com `ElementRef` para manipulação direta do DOM
   - Integrar validações de entrada de dados

### 4. **Serviços e Integração com APIs**
   - Criar serviços reutilizáveis com `@Injectable()`
   - Consumir múltiplos endpoints da API (listagem, tipos, detalhes)
   - Implementar método `getPokemonByType()` para filtragem

### 5. **RxJS para Operações Assíncronas**
   - Usar `debounceTime()` para evitar múltiplas requisições em buscas
   - Aplicar `distinctUntilChanged()` para ignorar valores duplicados
   - Gerenciar subscribers com boas práticas

### 6. **Filtragem e Busca em Tempo Real**
   - Implementar busca com debounce para otimizar performance
   - Criar sistema de filtros múltiplos (nome e tipo)
   - Resetar paginação ao mudar filtros

### 7. **Paleta de Cores Dinâmica**
   - Mapear cores por tipo de Pokémon
   - Criar UI contextualizada visualmente
   - Usar objetos constantes para dados estáticos reutilizáveis

### 8. **Internacionalização (i18n) Básica**
   - Criar arquivo de traduções para português
   - Traduzir types e stats da API para melhor UX
   - Manter código escalável para múltiplos idiomas

### 9. **Comunicação entre Componentes**
   - Usar `@Input()` para passar dados do pai para filho
   - Usar `@Output()` e `EventEmitter` para comunicação reversa
   - Implementar padrões eficientes de data binding

### 10. **Performance e Otimização**
   - Implementar paginação com `offset` e `limit`
   - Usar `*ngFor` com `trackBy` para otimizar renderização
   - Evitar múltiplas subscriptions com async pipe

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
