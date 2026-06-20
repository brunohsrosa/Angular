import { Pipe, PipeTransform } from "@angular/core";
import { UserStatusEnum } from "../app.component";

@Pipe({
  name: 'pessoaStatus'
})

export class PessoaStatusPipe implements PipeTransform {
  transform(status: number): string {
    switch (status) {
      case UserStatusEnum.INATIVO:
        return 'Inativo';
      case UserStatusEnum.ATIVO:
        return 'Ativo';
      default:
        return 'Desconhecido';
    }
  }
}
