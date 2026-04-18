import { Directive, HostBinding } from "@angular/core";

@Directive({
    selector: '[appStyle]'
})

export class StyleDirective {

  //@HostBinding('attr.style') attrStyle = 'background-color: gray; color: white;
  //@HostBinding('style') propStyle = 'background-color: gray; color: white;';
  @HostBinding('style') propStyleObj = {
    backgroundColor: 'gray',
    color: 'white'
  };
}
