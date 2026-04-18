import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/interfaces/user/user.interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  @Input({required: true}) user: IUser = {} as IUser;
  /* Inicializa a propriedade user como um objeto vazio do tipo IUser */
  /* required: true indica que a propriedade user é obrigatória e deve ser fornecida pelo componente pai */
}
