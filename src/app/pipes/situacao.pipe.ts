import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'situacao'
})

export class SituacaoPipe implements PipeTransform {

  transform(value: any[], args?: any): any[] {

    if (args === '') {
      return value;
    }

    return value.filter(distribuicao => {
      return distribuicao.situacao === args;
    });
  }

}
