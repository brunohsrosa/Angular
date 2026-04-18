import { UsersList } from './data/users-list';
import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { filterUsersList } from './utils/filter-users-list';
import { IFilterOptions } from './interfaces/filter-options.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  usersList: IUser[] = []; /* Lista de usuários inicia vazia */
  usersListFiltered: IUser[] = []; /* Lista de usuários filtrados inicia vazia */
  userSelected: IUser = {} as IUser; /* Inicializa a propriedade userSelected com o primeiro usuário da lista UsersList */
  showUserDetails: boolean = false; /* Propriedade para controlar a exibição dos detalhes do usuário */

  ngOnInit() { /* Método de ciclo de vida do Angular que é chamado após a inicialização do componente */
    setTimeout(() => { /* Simula um atraso para carregar os dados dos usuários */
      this.usersList = UsersList /* Atribui a lista de usuários à propriedade usersList após o atraso */
      this.usersListFiltered = UsersList; /* Inicializa a lista de usuários filtrados com a lista completa de usuários */
    }, 1000); /* O atraso é de 1000 milissegundos (3 segundos) para simular o carregamento dos dados */
  }

  onUserSelected(user: IUser) {
    this.userSelected = user; /* Atualiza a propriedade userSelected com o usuário selecionado */
    this.showUserDetails = true; /* Exibe os detalhes do usuário */
  }

  onFilter(filterOptions: IFilterOptions) {
    console.log(filterOptions);
    this.usersListFiltered = filterUsersList(filterOptions, this.usersList); /* Atualiza a lista de usuários filtrados com base nas opções de filtro */
  }
}
