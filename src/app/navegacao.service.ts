import { Injectable } from '@angular/core';
import { ItemMenuDTO, ChildrenDTO } from './model/dto/item-menu.dto';
import { AuthService } from 'app/services/auth.service';

@Injectable()
export class NavegacaoService {

  constructor(private authService: AuthService) { }

  listaItem() {
    const listaItens: Array<ItemMenuDTO> = new Array<ItemMenuDTO>();

    let item: ItemMenuDTO = new ItemMenuDTO();
    let listaFilhos: Array<ChildrenDTO> = new Array<ChildrenDTO>();
    let filho: ChildrenDTO = new ChildrenDTO();

    if (this.authService.isItemMenuUsuario('M_FATURA_CORPORATIVA')) {
      item.name = this.authService.getNomeRecurso('M_FATURA_CORPORATIVA');
      item.url = '/faturao';
      item.icon = 'fa fa-money';

      if (this.authService.isItemMenuUsuario('I_FATURA_PUBLICA')) {
        filho = new ChildrenDTO();
        filho.name = this.authService.getNomeRecurso('I_FATURA_PUBLICA');
        filho.url = '/faturao/faturao-publico';
        filho.icon = 'fa fa-university';
        listaFilhos.push(filho);
      } 

      if (this.authService.isItemMenuUsuario('I_FATURA_PRIVADA')) {
        filho = new ChildrenDTO();
        filho.name = this.authService.getNomeRecurso('I_FATURA_PRIVADA');
        filho.url = '/faturao/fatura-privada';
        filho.icon = 'fa fa-building-o';
        listaFilhos.push(filho);
      }

      item.children = listaFilhos;
      listaItens.push(item);
    }

    console.log('teste listaItens JSON: ' + JSON.stringify(listaItens));
    return listaItens;
  }
}
