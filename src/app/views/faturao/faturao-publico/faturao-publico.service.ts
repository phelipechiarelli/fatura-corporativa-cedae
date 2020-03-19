import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ServicoUtil } from 'app/services/service-util';

@Injectable()
export class FaturaoPublicoService {
  private API_FATURAO_PUBLICO: string = 'servico/v1/faturao-publico';


  constructor(private httpClient: HttpClient) { }
/*
  // Incluir
  incluir(perfilVO: PerfilVO): Observable<any> {
    return this.httpClient.post(ServicoUtil.getUrlApi(this.API_PERFIL), perfilVO);
  }

  // Alterar
  editar(perfilVO: PerfilVO): Observable<any> {
    return this.httpClient.put(ServicoUtil.getUrlApi(this.API_PERFIL), perfilVO);
  }

  // Excluir
  excluir(idPerfil: string): Observable<any> {
    return this.httpClient.delete(ServicoUtil.getUrlApi(this.API_PERFIL, [idPerfil]));
  }

  // Buscar
  buscar(idGrupoMenu: string): Observable<Array<PerfilVO>> {
    return this.httpClient.get<Array<PerfilVO>>(ServicoUtil.getUrlApi(this.API_PERFIL, [idGrupoMenu]));
  }

  // Listar Grupos Menu
  listarGruposMenu(): Observable<Array<GrupoMenuVO>> {
    return this.httpClient.get<Array<GrupoMenuVO>>(ServicoUtil.getUrlApi(this.API_GRUPOS_PERFIL));
  }
  */
}
