import { Component, Output, Input, EventEmitter } from '@angular/core';
import { IUser } from 'src/app/interfaces/user/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  displayedColumns: string[] = ['name', 'date', 'status'];

  @Input({required: true})userslist: IUser[] = [];

  @Output('userSelected') userSelectedEmitt = new EventEmitter<IUser>(); /* Evento para emitir o usuário selecionado */

  onUserSelected(user: IUser) {
    console.log('Usuário selecionado:', user);

    this.userSelectedEmitt.emit(user); /* Emite o usuário selecionado para o componente pai */
  }
}
