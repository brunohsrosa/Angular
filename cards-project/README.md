# Cards Project

## 🚀 Descrição do projeto

Aplicação Angular de interface de cartões financeiros e informações de cliente. O projeto demonstra uma tela de dashboard com componentes de cartão de saldo, cartão de crédito, cartão de débito e dados do cliente.

<img width="1620" height="983" alt="image" src="https://github.com/user-attachments/assets/750eb285-e960-4cee-b13e-8482f076c456" />


- Angular: **17.3.0**
- Angular CLI: **17.3.17**
- TypeScript: **5.4.2**
- Recomendado: Node.js **18+**

## 🎯 Objetivo do projeto

O objetivo é apresentar um layout simples e modularizado usando Angular, com componentes reutilizáveis para exibir dados financeiros e do cliente.

### Badges

[![Angular](https://img.shields.io/badge/Angular-17.3.0-DD0031?logo=angular)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4.2-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js)](https://nodejs.org/)

### Tecnologias

- Angular
- Angular CLI
- TypeScript
- SCSS
- HTML
- CSS

## 🧠 Conceitos utilizados

| Conceito | Descrição |
|---|---|
| Componentização | Cada parte da interface é isolada em componentes reutilizáveis como `BalanceCard`, `CreditCard`, `DebitCard`, `ClientInfosCard`, `CardItem`, `CardLine` e `CardTitle`. |
| Input properties | Uso de `@Input` para passar dados entre componentes, como título e ícone em `CardTitleComponent` e texto/valor em `CardItemComponent`. |
| Módulo Angular | `AppModule` declara os componentes e configura o bootstrap da aplicação. |
| Composição de componentes | Componentes menores são combinados para formar cards de interface mais complexos. |
| Gerenciamento de ativos | Imagens e ícones são carregados via `src/assets` e utilizados em componentes de apresentação. |
| Estilização SCSS | Cada componente usa arquivos `.scss` para organizar estilos de forma modularizada. |

## ▶️ Como executar o projeto

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/cards-project.git

# Entrar no diretório do projeto
cd cards-project

# Instalar dependências
npm install

# Executar a aplicação
npm start
```

Após a execução, abra `http://localhost:4200/` no navegador.

## 📁 Estrutura de pastas

Você pode usar esta estrutura como referência para o layout do projeto:

```
src/
├── app/
│   ├── components/
│   │   ├── balance-card/
│   │   ├── card-item/
│   │   ├── card-line/
│   │   ├── card-title/
│   │   ├── client-infos-card/
   │   ├── credit-card/
   │   ├── debit-card/
│   ├── app.component.ts
│   ├── app.module.ts
├── assets/
│   ├── icons/
│   │   ├── license
├── styles/
│   ├── reset/
│   │   ├── _reset.scss
├── index.html
├── main.ts
├── styles.scss
```

## 💡 Aprendizados principais

- Modularizar uma interface em componentes pequenos e de fácil manutenção.
- Trabalhar com comunicação de dados via `@Input` em Angular.
- Organizar arquivos SCSS por componente e manter a apresentação desacoplada da lógica.
- Estruturar um projeto Angular com `AppModule` e `AppComponent` como ponto único de bootstrap.
- Exibir e agrupar informações em cartões usando templates e componentes de layout.

## 📚 Recursos úteis

- [Angular - Introdução](https://angular.io/guide/what-is-angular)
- [Angular - Componentes e Templates](https://angular.io/guide/architecture-components)
- [Angular - Módulos](https://angular.io/guide/ngmodules)
- [Angular - Comunicação entre componentes](https://angular.io/guide/component-interaction)
- [Angular - Estilização com SCSS](https://angular.io/guide/quickstart)

## 🛡️ Licença

Este projeto é de código aberto e pode ser usado livremente, considere dar uma estrela para apoiar.

Desenvolvido por Bruno Santa Rosa - [LinkedIn](https://www.linkedin.com/in/bhsantarosa/)
