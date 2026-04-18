import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashIfEmpty'
})
export class DashIfEmptyPipe implements PipeTransform {

  transform(value: any): string | any { /* O tipo de retorno é string ou any, ele mesmo, por exemplo, dependendo do valor de entrada */
    const IS_EMPTY = value === null || value === undefined || value === ''; /* Verifica se o valor é nulo, indefinido ou uma string vazia */

    if (IS_EMPTY) {
      return '-'; /* Retorna um hífen se o valor for considerado vazio */
    }

    return value; /* Retorna o valor original se não for vazio */
  }

}
