import { UsuarioLogin } from './../model/usuario-login';
import { UsuarioVO } from 'app/model/vo/usuario.vo';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { RecursoVO } from 'app/model/vo/recurso.vo';

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;
  private listaRecurso?: Array<string> = new Array<string>();
  private listaItemMenu?: Array<string> = new Array<string>();
  private listaRecursoVO?: Array<RecursoVO> = new Array<RecursoVO>();
  private usuarioVO?: UsuarioVO = new UsuarioVO();
  private administradorLeitura: boolean = false;
  mostrarMenu = new EventEmitter<boolean>();
  fundoLogin = new EventEmitter<boolean>();

  constructor(private router: Router) {
  }

  getToken() {
    return localStorage.getItem('token');
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  removeToken() {
    localStorage.removeItem('token');
  }

  getChave() {
    return localStorage.getItem('chave');
  }

  setChave(chave: string) {
    localStorage.setItem('chave', chave);
  }

  getUsuarioVO() {
    return this.usuarioVO;
  }

  setUsuarioVO(usuarioVO: UsuarioVO) {
    this.usuarioVO = usuarioVO;
  }


  removeChave() {
    localStorage.removeItem('chave');
  }

  login(usuario: UsuarioLogin) {
    this.usuarioAutenticado = true;
    this.setChave(usuario.chave);

    // console.log(usuario);
    // this.router.navigate(['/principal']);

    setTimeout(() => {
      this.fundoLogin.emit(false);
      this.mostrarMenu.emit(true);
    }, 1);
  }

  logout() {
    if (this.isUsuarioAutenticado()) {
      this.usuarioAutenticado = false;
      this.removeToken();

      this.removeChave();

      setTimeout(() => {
        this.fundoLogin.emit(true);
        this.mostrarMenu.emit(false);
      }, 1);
    }
  }

  setListaRecursoVO(listaRecurso: Array<RecursoVO>) {
    this.listaRecursoVO = listaRecurso;
  }

  getListaRecursoVO() {
    return this.listaRecursoVO;
  }

  setListaRecurso(recursos: Array<string>) {
    this.listaRecurso = recursos;
  }

  getListaRecurso() {
    return this.listaRecurso;
  }

  setItemMenu(itens: Array<string>) {
    this.listaItemMenu = itens;
    console.log('setItemMenu');
//    this.router.navigate(['/principal']);
    this.router.navigate(['/principal']);
  }

  getItemMenu() {
    return this.listaItemMenu;
  }

  isUsuarioAutenticado() {
    console.log('usuarioAutenticado: ',this.usuarioAutenticado);
    //return this.usuarioAutenticado;
    return true;
  }

  isAdministradorLeitura() {
    return this.administradorLeitura;
  }

  setAdministradorLeitura(administradorLeitura: boolean) {
    this.administradorLeitura = administradorLeitura;
  }

  isItemMenuUsuario(itemMenu: string) {
    console.log('itemMenu: ', itemMenu);
    console.log('itens: ', this.getItemMenu());
    
    return this.getItemMenu().indexOf(itemMenu) !== -1;
  }

  isRecursoUsuario(recurso: string) {
    return this.getListaRecurso().indexOf(recurso) !== -1;
  }

  isPermissaoUsuario(recurso: string) {
    return this.isItemMenuUsuario(recurso) || this.isRecursoUsuario(recurso);
  }

  getNomeRecurso(chave: string) {
    let nomeRecurso: string;
    this.getListaRecursoVO().forEach((recursoVO: RecursoVO) => {
      if (recursoVO.codigoRecurso === chave) {
        nomeRecurso = recursoVO.nomeRecurso;
      }
    });

    return nomeRecurso;
  }

}
