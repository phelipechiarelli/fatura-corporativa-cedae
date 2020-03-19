import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FaturaPrivadaService {
  private API_FATURA_PRIVADA: string = 'servico/v1/fatura-privada';

  constructor(private httpClient: HttpClient) { }

}
