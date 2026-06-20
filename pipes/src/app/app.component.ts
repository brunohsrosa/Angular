import { Component, OnInit } from '@angular/core';

export enum UserStatusEnum{
  ATIVO = 1,
  INATIVO = 0,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pipes';

  pessoa = {
    nome: 'João',
    idade: 30,
    status: UserStatusEnum.ATIVO,
    // dataNascimento: new Date(1993, 5, 15)
  };

  texto = {
    textoPadrao: 'Texto Padrão',
  }

  minhaData: string = '2026-06-20T16:00:00.000Z';

  ngOnInit() {
    console.log('Data formatada região:', new Date(this.minhaData));
    console.log('Data UTC-0:', new Date(this.minhaData).toUTCString());
    console.log('Timestamp:', new Date(this.minhaData).getTime());
  }
}
