import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarregandoComponent } from './carregando.component';
import { CarregandoService } from './carregando.service';

@NgModule({
  imports: [CommonModule],
  declarations: [CarregandoComponent],
  exports: [CarregandoComponent],
  providers: [CarregandoService]
})

export class CarregandoModule { }
