import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable()
export class VersaoService {
  private API_SERVICO_VERSAO: string = 'servico/usuario/versao';

  private baseUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
  }

  getVersion(): Observable<any> {
    return this.httpClient.get(this.baseUrl + this.API_SERVICO_VERSAO);
  }

}
