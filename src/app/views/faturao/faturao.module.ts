import { FaturaoRoutingModule } from './faturao-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PipeModule } from 'app/pipes/pipe.module';
import { SharedModule } from 'app/commons/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
// Ng2-select
import { SelectModule } from 'ng-select';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { FaturaPrivadaComponent } from './fatura-privada/fatura-privada.component';

@NgModule({
  imports: [
    FaturaoRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipeModule,
    NgxPaginationModule,
    SelectModule,
    SharedModule,
    PopoverModule.forRoot()
  ],
  declarations: [ FaturaPrivadaComponent],
  providers: [ ]
})

export class FaturaoModule { }
