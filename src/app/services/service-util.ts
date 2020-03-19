import { environment } from 'environments/environment';
import { ChaveValorDTO } from 'app/model/dto/chave-valor.dto' ;

export class ServicoUtil {
  private static baseUrl: string = environment.apiUrl;
  static getUrlBase(): string {
    return this.baseUrl;
  }

  /**
   * Gera uma URL completa com seus devidos parametros
   * @param api Parte da URL que corresponde a API
   * @param pathParam <opcional> Lista de parametros que serão na URL separados por barra (/)
   * @param queryParam <opcional> Lista de parametros que serão passados como chave/valor
   */
  static getUrlApi(api: string, pathParam?: string[], queryParam?: ChaveValorDTO[]): string {
    let urlApi = this.baseUrl + api;
    if (pathParam) {
      pathParam.forEach(item => {
        urlApi += '/' + item;
      })
    }

    if (queryParam) {
      let separador = '?';
      queryParam.forEach((item: ChaveValorDTO) => {
        urlApi += separador + item.chave + '=' + item.valor;
        separador = '&';
      })
    }

    return urlApi;
  }
}
