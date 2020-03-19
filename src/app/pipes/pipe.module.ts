import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderByPipe } from './order-by.pipe';
import { FiltroPrioridadePipe } from './filtro-prioridade.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrderByPipe, FiltroPrioridadePipe],
  exports: [OrderByPipe, FiltroPrioridadePipe]
})
export class PipeModule { }
