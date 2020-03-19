import { RecursoVO } from 'app/model/vo/recurso.vo';
import { TokenUsuario } from './../../../model/token/tokenusuario';
import { UsuarioLogin } from './../../../model/usuario-login';
import { ModalSimplesComponent } from 'app/commons/modal-simples/modal-simples.component';
import { Component, OnInit, ChangeDetectorRef, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Md5 } from 'ts-md5/dist/md5';

import { VersaoVO } from 'app/model/vo/versao.vo';
import { UsuarioVO } from 'app/model/vo/usuario.vo';
import { mensagens_servico } from 'app/commons/servico-mensagem/messagem.constantes';
import { AuthService } from 'app/services/auth.service';
import { LoginService } from 'app/views/pages/login/login.service';
import { VersaoService } from 'app/services/versao.service';



@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public usuario: UsuarioLogin;
  public versaoVO: VersaoVO = new VersaoVO();
  public ambiente;
  bsModalRef: BsModalRef;
  isCapsOn: boolean = false;
  typoSenha: string = 'password';

  @HostListener('window:keyup', ['$event']) keyUp(event: KeyboardEvent) {


   const capsOn = event.getModifierState && event.getModifierState('CapsLock');
    if (capsOn) {
       this.isCapsOn = true;
   } else {
      this.isCapsOn = false;
   }


  }

  constructor(private fb: FormBuilder, private loginService: LoginService, private versaoService: VersaoService,
    private modalService: BsModalService, private cdr: ChangeDetectorRef, private authService: AuthService) {
    this.iniciarForm();
  }

  ngOnInit() {
    this.usuario = new UsuarioLogin();
    this.loginService.efetuarLogout();
    /*this.versaoService.getVersion().subscribe(res => {
      this.versaoVO = res;*/
      this.versaoVO = new VersaoVO();
      this.versaoVO.data = new Date();
      this.versaoVO.versao = '1.0.0',
      this.versaoVO.ambiente = 'LOCA'
      this.versaoVO.banco = 'LOCAL'
  
      if (this.versaoVO.ambiente === 'LOCA') {
            this.ambiente = 'LOCAL' + ' - ' + this.versaoVO.banco;
        } else if (this.versaoVO.ambiente === 'DESE') {
          this.ambiente = 'DESENVOLVIMENTO' + ' - ' + this.versaoVO.banco;
        } else if (this.versaoVO.ambiente === 'TEST') {
          this.ambiente = 'TESTE' + ' - ' + this.versaoVO.banco;
        } else if (this.versaoVO.ambiente === 'HOMO') {
          this.ambiente = 'HOMOLOGAÇÃO' + ' - ' + this.versaoVO.banco;
        }
//    });

    this.iniciarForm();
  }

  ngAfterContentChecked() {
    this.cdr.detectChanges();
  }

  iniciarForm() {
    this.loginForm = this.fb.group({
      chave: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  onSubmit() {
    this.usuario.senha = Md5.hashStr(this.usuario.senha).toString().split('').reverse().join('');

    /*
    this.loginService.efetuarLogin(this.usuario)
      .subscribe((tokenUsuario: TokenUsuario) => {
            this.authService.login(tokenUsuario);

            const usuarioVO: UsuarioVO = new UsuarioVO();
            usuarioVO.id = tokenUsuario.idUsuario;
            usuarioVO.nome = tokenUsuario.nome;
            usuarioVO.login = tokenUsuario.chave;
            this.authService.setUsuarioVO(usuarioVO);

            this.buscarRecursoUsuario(usuarioVO);
          }, (error: any) => {
            this.usuario = new UsuarioLogin();
            this.bsModalRef = this.modalService.show(ModalSimplesComponent);
            this.bsModalRef.content.titulo = 'Login';
            if (error.status === 500) {
              this.bsModalRef.content.mensagem = mensagens_servico.ERRO_500;
            } else {
              this.bsModalRef.content.mensagem = error.error;
            }
            this.iniciarForm();
          }
      );
      */
     const usuarioVO: UsuarioVO = new UsuarioVO();
     usuarioVO.id = 1;
     usuarioVO.nome = this.usuario.senha;
     usuarioVO.login = this.usuario.senha;
     this.authService.setUsuarioVO(usuarioVO);

     this.buscarRecursoUsuario(usuarioVO);

  }

  buscarRecursoUsuario(usuarioVO: UsuarioVO) {
    /*
    this.loginService.buscarRecursoUsuario(usuarioVO)
    .subscribe((res: RespostaUsuarioPerfilDTO) => {

          let itemMenu: Array<string> = new Array<string>();
          let itemRecurso: Array<string> = new Array<string>();
          res.listaRecursoVO.forEach((recursoVO: RecursoVO) => {
            if (recursoVO.tipoRecurso === RecursoVO.TIPO_RECURSO_RECURSO) {
              itemRecurso.push(recursoVO.codigoRecurso);
            } else {
              itemMenu.push(recursoVO.codigoRecurso);
            }
          });
      
          this.authService.setListaRecursoVO(res.listaRecursoVO);
          this.authService.setItemMenu(itemMenu);
          this.authService.setListaRecurso(itemRecurso);

          this.authService.setAdministradorLeitura(res.administradorLeitura);
        }, (error: any) => {
          this.usuario = new Usuario();
          this.bsModalRef = this.modalService.show(ModalSimplesComponent);
          this.bsModalRef.content.titulo = 'Login';
          if (error.status === 500) {
              this.bsModalRef.content.mensagem =  mensagens_servico.ERRO_500.toString();
          } else {
            this.bsModalRef.content.mensagem = 'Usuário não tem perfil de acesso no METRUS III.';
          }
        }
    );
    */

   let listaRecursoVO: Array<RecursoVO> = new Array<RecursoVO>();
   let administradorLeitura: boolean = true;
   let itemMenu: Array<string> = new Array<string>();
   let itemRecurso: Array<string> = new Array<string>();

   let recursoVO: RecursoVO = new RecursoVO();
   recursoVO.id = 1;
   recursoVO.tipoRecurso = RecursoVO.TIPO_RECURSO_MENU;
   recursoVO.nomeRecurso = 'FATURA CORPORATIVA';
   recursoVO.codigoRecurso = 'M_FATURA_CORPORATIVA';
   listaRecursoVO.push(recursoVO);

   recursoVO = new RecursoVO();
   recursoVO.id = 2;
   recursoVO.idPai = 1;
   recursoVO.tipoRecurso = RecursoVO.TIPO_RECURSO_INTERFACE;
   recursoVO.nomeRecurso = 'FATURA PÚBLICA';
   recursoVO.codigoRecurso = 'I_FATURA_PUBLICA';
   listaRecursoVO.push(recursoVO);

   recursoVO = new RecursoVO();
   recursoVO.id = 3;
   recursoVO.idPai = 1;
   recursoVO.tipoRecurso = RecursoVO.TIPO_RECURSO_INTERFACE;
   recursoVO.nomeRecurso = 'FATURA PRIVADA';
   recursoVO.codigoRecurso = 'I_FATURA_PRIVADA';
   listaRecursoVO.push(recursoVO);

   /*
   id
   public id?: number;
   public idPai?: number;
   public tipoRecurso?: string;//Menu - M, Recurso - R e Interface - I
   public nomeRecurso?: string;
   public statusAtivo?: string;//Sim - S e Não - N
   public grupoMenuVO?: GrupoMenuVO;
   public codigoRecurso?: string;
 */


   listaRecursoVO.forEach((recursoVO: RecursoVO) => {
     if (recursoVO.tipoRecurso === RecursoVO.TIPO_RECURSO_RECURSO) {
       itemRecurso.push(recursoVO.codigoRecurso);
     } else {
       itemMenu.push(recursoVO.codigoRecurso);
     }
   });

   console.log('listaRecursoVO: ', listaRecursoVO);
   console.log('itemMenu: ', itemMenu);
   console.log('itemRecurso: ', itemRecurso);
   this.authService.setAdministradorLeitura(administradorLeitura);
   this.authService.setListaRecursoVO(listaRecursoVO);
   this.authService.setListaRecurso(itemRecurso);
   this.authService.setItemMenu(itemMenu);


  }

  mapperSituacao(valor: string): string {
    if (valor !== null && valor !== undefined) {
     valor.trim();
    }
    switch (valor) {
      case 'LOCA': {return 'badge badge-pill badge-primary'};
      case 'DESE': {return 'badge badge-pill badge-warning'};
      case 'TEST': {return 'badge badge-pill badge-success'};
      case 'HOMO': {return 'badge badge-pill badge-danger'};
        default: {return null}
   }
  }

  exibirOcultarSenha() {
    if (this.typoSenha === 'password') {
       this.typoSenha = 'text';
    } else {
      this.typoSenha = 'password'
    }
  }
}
