import { TipoMensagem } from 'app/commons/servico-mensagem/mensagem.model.enum';

export class MessagemModel {

  constructor(
    public mensagem?: string[],
    public tipoMensagem?: TipoMensagem
  ) {}
}
