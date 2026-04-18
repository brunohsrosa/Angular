import { Pipe, PipeTransform } from '@angular/core';
import { IAdress } from '../interfaces/user/address.interface';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(address: IAdress): string { /* O método transform é onde a lógica de transformação é implementada. Ele recebe um endereço do tipo IAdress e deve retornar uma string formatada. */
    const INVALID_ADDRESS =
      !address ||
      !address.rua ||
      !address.cidade ||
      !address.estado ||
      !address.pais ||
      address.numero === undefined || address.numero === null; /* Verifica se o endereço é inválido, ou seja, se é nulo ou se algum dos campos obrigatórios está ausente ou vazio. Se o número for undefined ou null, também é considerado inválido. */

    if (INVALID_ADDRESS) {
      return 'Endereço indisponível ou inválido'; /* Retorna uma mensagem de erro caso o endereço seja inválido. */
    }

    return `${address.rua}, ${address.numero}, ${address.cidade} - ${address.estado}`; /* Retorna o endereço formatado como uma string. */
  }

}
