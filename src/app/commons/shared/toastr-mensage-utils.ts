import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr/ngx-toastr';

import { mensagens_servico } from '../servico-mensagem/messagem.constantes';
import { TituloMensConst } from './titulo-mensagem.constantes';

@Injectable()
export  class ToastrMensagemUtil {

    public static error(toastr: ToastrService, msg: string, titulo: string ) {
      toastr.error(msg, titulo, {
        timeOut: 5000,
        positionClass: 'toast-bottom-center',
        easing: 'ease-in-out',
        easeTime: 300,
        extendedTimeOut: 1000,

        progressBar: true,
        progressAnimation: 'increasing'
      })
    }

    public static info(toastr: ToastrService, msg: string, titulo: string ) {
        toastr.info(msg, titulo, {
            timeOut: 5000,
            positionClass: 'toast-bottom-center',
            easing: 'ease-in-out',
            easeTime: 300,
            extendedTimeOut: 1000,
            progressBar: true,
            progressAnimation: 'increasing'
        })
      }


      public static success(toastr: ToastrService, msg: string, titulo: string ) {
        toastr.success(msg, titulo, {
            timeOut: 5000,
            positionClass: 'toast-bottom-center',
            easing: 'ease-in-out',
            easeTime: 300,
            extendedTimeOut: 1000,
            progressBar: true,
            progressAnimation: 'increasing'
        })
      }

      public static warning(toastr: ToastrService, msg: string, titulo: string ) {
        toastr.warning(msg, titulo, {
            timeOut: 5000,
            positionClass: 'toast-bottom-center',
            easing: 'ease-in-out',
            easeTime: 300,
            extendedTimeOut: 1000,
            progressBar: true,
            progressAnimation: 'increasing'
        })
      }

/*  public static tratarErro(toastrService: ToastrService, error, tituloMsg?: string) {
    const title = tituloMsg ? tituloMsg : 'Erro';
    if (error.status === 500) {
      ToastrMensagemUtil.error(toastrService, mensagens_servico.ERRO_500, TituloMensConst.PESQUISA_INCORPORACAO_INDIVIDUAL);
    } else if (error.status === 401) {
      ToastrMensagemUtil.error(toastrService, mensagens_servico.ERRO_401, TituloMensConst.SESSAO_USUARIO_EXPIROU);
    } else {
      ToastrMensagemUtil.error(toastrService, error.error, title);
    }
  }*/
}
