import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputBackground]'
})

export class InputBackgroundDirective {
  @Input('bgColor') appInputBackground: string = 'white'; // Valor padrão para a cor de fundo bgColor é o Alias do Input. Os valores padrão definidos serão aplicados se não forem fornecidos valores específicos para os atributos bgColor e tColor ao usar a diretiva. Se os valores forem fornecidos, eles substituirão os valores padrão definidos na diretiva.
  @Input('tColor') textColor: string = 'black';

  @HostBinding('style.backgroundColor') bgColor: string = '';
  @HostBinding('style.color') color: string = '';

  @HostListener('focus')
    onFocus() {
      this.bgColor = this.appInputBackground;
      this.color = this.textColor;
    }

  @HostListener('blur')
    onBlur() {
      this.bgColor = 'white';
      this.color = 'black';
    }
}
