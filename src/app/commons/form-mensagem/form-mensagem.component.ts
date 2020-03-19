import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-mensagem',
  templateUrl: './form-mensagem.component.html',
  styleUrls: ['./form-mensagem.component.scss']
})
export class FormMensagemComponent implements OnInit {
  @Input()
  mostraErro: boolean = false;
  @Input()
  msg: string;

  constructor() { }

  ngOnInit() {
  }

}
