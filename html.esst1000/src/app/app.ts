import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: false
})
export class App {
  readonly menus: Array<PoMenuItem> = [
    { label: 'Nova Solicitação', link: '/novaSolicitacao', icon: 'an-fill an-plus-circle', shortLabel: 'Nova' },
    { label: 'Consulta', link: '/consulta', icon: 'an-fill an-magnifying-glass', shortLabel: 'Consulta' },
    { label: 'Vencimento de EPI', link: '/vencimentoEPI', icon: 'an-fill an-clock-user', shortLabel: 'Venc EPI' },
    { label: 'Parâmetros', link: '/parametros', icon: 'an-fill an-fill an-gear', shortLabel: 'Venc EPI' },
  ];

  menuItemSelected: string = '';

   printMenuAction(menu: PoMenuItem) {
    this.menuItemSelected = menu.label;
  }
}
