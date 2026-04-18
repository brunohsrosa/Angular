# Projeto Directives

## Descrição do projeto

Este repositório contém um projeto Angular focado no estudo e na demonstração de diretivas. Ele mostra como aplicar diretivas de atributo e como utilizar os decoradores `@HostBinding` e `@HostListener` para modificar o comportamento e a aparência de elementos DOM em tempo de execução.

## Objetivo do projeto

O objetivo é ensinar e exemplificar conceitos práticos de diretivas no Angular, incluindo:

- como criar diretivas de atributo customizadas;
- como usar `@HostBinding` para ligar propriedades e estilos do host element;
- como usar `@HostListener` para capturar eventos nativos do host element;
- como comparar manipulação de DOM com e sem diretivas;
- como aplicar classes e estilos dinamicamente.

## Conceitos Angular utilizados

- `@Directive` para criar diretivas customizadas.
- `@HostBinding` para vincular propriedades do host element, como estilo, classe e atributos.
- `@HostListener` para escutar eventos nativos do host element, como `click`, `mouseover`, `mouseout`, `focus` e `blur`.
- `@Input` em diretivas para receber valores externos e personalizar o comportamento.
- Componentes Angular (`AppComponent`, `SemDiretivaComponent`, `ComDiretivaComponent`).
- Angular module (`AppModule`) para declarar componentes e diretivas.
- Uso de binding de propriedade (`[style]`, `[class]`, `[disabled]`) e binding de atributo (`[attr.disabled]`, `[attr.style]`).
- Interação entre componentes e diretivas no template.

## Como executar o projeto

No diretório do projeto:

```bash
npm install
npm start
```

Em seguida, abra no navegador:

```bash
http://localhost:4200/
```

## Estrutura de pastas (resumida)

- `src/app/`
  - `app.component.ts` / `app.component.html` / `app.component.scss` - componente principal.
  - `com-diretiva/` - componente com uso de diretiva customizada.
  - `sem-diretiva/` - componente que demonstra comportamento sem diretiva, usando bindings nativos.
  - `directives/` - diretivas customizadas do projeto:
    - `highlight.directive.ts` - altera cor de fundo com `@HostBinding` e `@HostListener`.
    - `disabled.directive.ts` - define o atributo `disabled` no host element.
    - `styles.directive.ts` - aplica estilos via `@HostBinding('style')`.
    - `class.directive.ts` - aplica classes via `@HostBinding('class')`.
    - `listener.directive.ts` - captura eventos com `@HostListener`.
    - `input-backgroung.directive.ts` - altera o fundo e a cor do texto de inputs com foco.

## Principais aprendizados

- Diretivas de atributo são poderosas para encapsular lógica de apresentação e comportamento.
- `@HostBinding` permite alterar diretamente propriedades e estilos do elemento onde a diretiva é aplicada.
- `@HostListener` é útil para escutar eventos nativos sem precisar mexer no template do componente.
- É possível combinar `@Input` com diretivas para criar componentes reutilizáveis e configuráveis.
- A diferença entre binding de propriedade e binding de atributo no Angular é essencial para entender como o DOM é atualizado.
- Um componente pode funcionar sem diretivas, mas as diretivas tornam a lógica de UI mais reutilizável e limpa.

## Observações

O projeto foi gerado com Angular CLI 16.1.0 e utiliza as versões compatíveis do Angular e do TypeScript definidas em `package.json`.
