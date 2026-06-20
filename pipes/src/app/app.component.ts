import { Component } from '@angular/core';

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
    // dataNascimento: new Date(1993, 5, 15)
  };
}
