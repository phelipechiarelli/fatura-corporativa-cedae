import { VersaoVO } from './../../model/vo/versao.vo';
import { Component, OnInit } from '@angular/core';
import { VersaoService } from 'app/services/versao.service';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})

export class AppFooterComponent implements OnInit {

  public versaoVO: VersaoVO = new VersaoVO();
  public ambiente;

  constructor(private versaoService: VersaoService) {
  }

  ngOnInit() {
    /*this.versaoService.getVersion().subscribe(res => {
      this.versaoVO = res;
   if (this.versaoVO.ambiente === 'LOCA') {
        this.ambiente = 'LOCAL' + ' - ' + this.versaoVO.banco;
    } else if (this.versaoVO.ambiente === 'DESE') {
      this.ambiente = 'DESENVOLVIMENTO' + ' - ' + this.versaoVO.banco;
    } else if (this.versaoVO.ambiente === 'TEST') {
      this.ambiente = 'TESTE' + ' - ' + this.versaoVO.banco;
    } else if (this.versaoVO.ambiente === 'HOMO') {
      this.ambiente = 'HOMOLOGAÇÃO' + ' - ' + this.versaoVO.banco;
    }
    });*/
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
}
