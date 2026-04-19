# 🎯 Users Filter Project

Aplicação Angular para filtrar e visualizar uma lista de usuários com detalhes completos.

## 📋 Descrição do Projeto

Este projeto é uma aplicação web desenvolvida em **Angular 16** e **Node.js 18+**, utilizando TypeScript para gerenciamento de usuários. Permite filtrar usuários por nome, status, data de cadastro e visualizar detalhes individuais.

## 🎯 Objetivo do Projeto

O objetivo é demonstrar o uso de componentes Angular, pipes personalizados e filtros dinâmicos para manipulação de dados de usuários em uma interface amigável.

### 🏷️ Badges

![Angular](https://img.shields.io/badge/Angular-16-red)
![TypeScript](https://img.shields.io/badge/TypeScript-5.1-blue)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)

### 🛠️ Tecnologias Utilizadas

- Angular 16
- TypeScript 5.1
- Angular Material
- SCSS
- RxJS
- date-fns

## 📚 Conceitos Utilizados

| Conceito | Descrição |
|----------|-----------|
| Componentes Angular | Blocos reutilizáveis de UI, como FilterComponent, UsersListComponent e UserDetailsComponent |
| Pipes Personalizados | Transformadores de dados, como PhonePipe para formatação de telefone e AddressPipe para endereços |
| Interfaces TypeScript | Definições de tipos para usuários, endereços e opções de filtro |
| Módulos Angular | Organização do código em módulos, como ComponentsModule e PipesModule |
| Angular Material | Biblioteca de componentes UI para design consistente |
| Filtros Dinâmicos | Lógica de filtragem usando funções utilitárias e date-fns para intervalos de datas |
| Data Binding | Vinculação de dados entre componentes pai e filho via @Input e @Output |
| Lifecycle Hooks | Uso de ngOnInit para inicialização de componentes |

## 🚀 Como Executar o Projeto

Siga os passos abaixo para executar o projeto localmente:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/users-filter-project.git
   cd users-filter-project
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento:**
   ```bash
   ng serve
   ```

4. **Acesse a aplicação:**
   Abra o navegador e vá para `http://localhost:4200`

## 📁 Estrutura de Pastas

```
src/
├── app/
│   ├── app.component.html/ts/scss/spec.ts
│   ├── app.module.ts
│   ├── angular-material/
│   │   └── angular-material.module.ts
│   ├── components/
│   │   ├── components.module.ts
│   │   ├── filter/
│   │   │   ├── filter.component.html/ts/scss/spec.ts
│   │   ├── user-details/
│   │   │   ├── user-details.component.html/ts/scss/spec.ts
│   │   └── users-list/
│   │       └── users-list.component.html/ts/scss/spec.ts
│   ├── data/
│   │   └── users-list.ts
│   ├── interfaces/
│   │   ├── filter-options.interface.ts
│   │   └── user/
│   │       ├── address.interface.ts
│   │       ├── status.interface.ts
│   │       └── user.interface.ts
│   ├── pipes/
│   │   ├── address.pipe.ts
│   │   ├── dash-if-empty.pipe.ts
│   │   ├── phone.pipe.ts
│   │   ├── pipes.module.ts
│   │   └── status.pipe.ts
│   └── utils/
│       └── filter-users-list.ts
├── assets/
├── styles/
│   └── utils/
│       └── _text-align-center.scss
├── index.html
├── main.ts
└── styles.scss
```

## 📈 Aprendizados Principais

- Implementação de componentes modulares e reutilizáveis em Angular
- Criação e uso de pipes personalizados para formatação de dados
- Manipulação de filtros complexos com datas usando bibliotecas externas
- Organização de código com módulos e interfaces TypeScript
- Integração do Angular Material para UI consistente
- Gerenciamento de estado entre componentes com EventEmitters

## 🔗 Recursos Úteis

- [Documentação Oficial Angular - Componentes](https://angular.io/guide/component-overview)
- [Documentação Oficial Angular - Pipes](https://angular.io/guide/pipes)
- [Documentação Oficial Angular - Interfaces](https://angular.io/guide/typescript-configuration)
- [Angular Material - Documentação](https://material.angular.io/)
- [date-fns - Biblioteca para manipulação de datas](https://date-fns.org/)

---

## 📜 Licença

Este projeto é de código aberto e pode ser usado livremente, considere dar uma estrela para apoiar.

Desenvolvido por Bruno Santa Rosa - [LinkedIn](https://www.linkedin.com/in/bruno-santarosa)
