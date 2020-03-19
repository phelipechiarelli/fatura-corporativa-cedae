import { FaturaoPublicoService } from './faturao-publico.service';
import { FaturaoPublicoRoutingModule } from './faturao-publico-routing.module';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeModule } from 'app/pipes/pipe.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { SelectModule } from 'ng-select';
import { SharedModule } from 'app/commons/shared/shared.module';
import { TextMaskModule } from 'angular2-text-mask';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { AgmCoreModule } from '@agm/core';
import { NgxPrintModule } from 'ngx-print';
import { DndModule } from 'ng2-dnd';

import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import localePtExtra from '@angular/common/locales/extra/pt';
import { FaturaoPublicoFiltroComponent } from './faturao-publico-filtro/faturao-publico-filtro.component';


registerLocaleData(localePt, 'pt-PT', localePtExtra);


@NgModule({
  imports: [
    FaturaoPublicoRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipeModule,
    NgxPaginationModule,
    NgxPrintModule,
    SelectModule,
    SharedModule,
    TextMaskModule,
    ChartsModule,    
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAsOkBZLbzDlv8H5TxFKVYeW-NS8rkwSWI'
    }),
    DndModule
  ],
  declarations: [
    FaturaoPublicoFiltroComponent
  ],
  providers: [FaturaoPublicoService
  ]
})

export class FaturaoPublicoModule { }
