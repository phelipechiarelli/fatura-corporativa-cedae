import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prioridade',
  pure: false
})
export class FiltroPrioridadePipe implements PipeTransform {

  transform(value: any[], args?: any): any[] {
    if (args.chave === '' || args.chave === undefined) {
      return value;
    }

    return value.filter(filtro => {
      return filtro.codigoPrioridade === +args.chave;
    });

  }

}
