import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';

@Component({
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  private baseUrl: string = environment.apiUrl;
  private API_DOWNLOAD_APK_LEITURA: string = 'servico/usuario/download_app_leitura';
  private API_DOWNLOAD_APK_CORTE: string = 'servico/usuario/download_app_corte';

  public urlDownloadAPKLeitura: string = this.baseUrl + this.API_DOWNLOAD_APK_LEITURA;
  public urlDownloadAPKCorte: string = this.baseUrl + this.API_DOWNLOAD_APK_CORTE;

  constructor() { }

  ngOnInit() {
    console.log('principal')
  }

}
