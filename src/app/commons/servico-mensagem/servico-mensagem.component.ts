import { Component, OnInit, Input } from '@angular/core';

import { MessagemModel } from 'app/commons/servico-mensagem/mensagem.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'servico-mensagem',
  templateUrl: './servico-mensagem.component.html',
  styleUrls: ['./servico-mensagem.component.scss']
})
export class ServicoMensagemComponent implements OnInit {


  @Input()
  message: MessagemModel = new MessagemModel();

  @Input()
  isErro: boolean;

  constructor() { }

  ngOnInit() {

  }

  aplicaCssMensagem() {
    return{
      'alert-sucesso': this.message.tipoMensagem === 0,
      'alert-info': this.message.tipoMensagem === 1,
      'alert-aviso': this.message.tipoMensagem === 2,
      'alert-primary': this.message.tipoMensagem === 3,
      'alert-secondary': this.message.tipoMensagem === 4,
      'alert-light': this.message.tipoMensagem === 5,
      'alert-erro': this.message.tipoMensagem === 6
    }

  }

}
