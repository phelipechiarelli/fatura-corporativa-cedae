import { UsuarioVO } from 'app/model/vo/usuario.vo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'app/services/auth.service';

import { ServicoUtil } from 'app/services/service-util';

@Injectable()
export class LoginService {
  LOGOUT: 'servico/usuario/v1/logout';
  private API_SERVICO_LOGIN: string = 'servico/usuario/v1/login';
  
  constructor(private httpClient: HttpClient, private authService: AuthService) {
  }

  efetuarLogin(usuario: UsuarioVO) {
    return this.httpClient.post(ServicoUtil.getUrlApi(this.API_SERVICO_LOGIN), JSON.stringify(Object(usuario)));
  }

  efetuarLogout() {
    this.authService.logout();
  }

  /*buscarRecursoUsuario(usuario: UsuarioVO) {
    return this.httpClient.post(ServicoUtil.getUrlApi(C.API.USUARIO_PERFIL), JSON.stringify(Object(usuario)));
  }*/
}
