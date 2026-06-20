import { Component } from '@angular/core';

export enum UserStatusEnum{
  ATIVO = 1,
  INATIVO = 0,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipes';
  pessoa = {
    nome: 'João',
    idade: 30,
    status: UserStatusEnum.ATIVO,
    // dataNascimento: new Date(1993, 5, 15)
  };
}
