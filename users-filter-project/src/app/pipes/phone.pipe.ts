import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phone: string): string { /* recebe uma string com o número de telefone e retorna a string formatada */

    const INVALID_PHONE = !phone || phone.length < 10 || phone.length > 11; /* Constante, verifica se a string é válida, ou seja, se tem entre 10 e 11 caracteres. Se não for válida, retorna uma string vazia. */

    if (INVALID_PHONE) {
      return 'Telefone indisponível ou inválido';
    }

    const CELLPHONE = phone.length === 11; /* Constante, verifica se a string tem 11 caracteres, ou seja, se é um número de celular. */

    if (CELLPHONE) {
      return `(${phone.substring(0, 2)}) ${phone.substring(2, 7)}-${phone.substring(7)}`; /* Retorna a string formatada para número de celular. */
    }else {
      return `(${phone.substring(0, 2)}) ${phone.substring(2, 6)}-${phone.substring(6)}`; /* Retorna a string formatada para número de telefone fixo. */
    }
  }
}
