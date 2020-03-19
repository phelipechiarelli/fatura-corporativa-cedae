import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormDebugComponent } from 'app/commons/form-debug/form-debug.component';
import { FormMensagemComponent } from 'app/commons/form-mensagem/form-mensagem.component';
import { ServicoMensagemComponent } from 'app/commons/servico-mensagem/servico-mensagem.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FormDebugComponent,
    FormMensagemComponent,
    ServicoMensagemComponent
  ],
  exports: [
    FormDebugComponent,
    FormMensagemComponent,
    ServicoMensagemComponent
  ]
})
export class SharedModule { }
