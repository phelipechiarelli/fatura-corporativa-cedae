import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';


@Injectable()
export class DateValidator {


  public static date(c: FormControl) {
    if (c.value === '' || c.value == null || c.value === '' || c.value === undefined) {
      return null;
    }
    const ExpReg = new RegExp('(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/[12][0-9]{3}');
    const pData = c.value;
    const data = pData.split('/');
    let dataValida = true;

    if (pData.search(ExpReg) === -1) { // Valida formato dd/MM/yyyy
      dataValida = false;
    }

    const dia: number = parseInt(data[0], 10);
    const mes: number = parseInt(data[1], 10);
    const ano: number = parseInt(data[2], 10);

    // Valida meses com 30 dias
    if (((mes === 4) || (mes === 6) || (mes === 9) || (mes === 11)) && (dia > 30)) {
      dataValida = false;
    }

    // Ano bissexto: 29 dias
    if (dataValida && mes === 2) { // Valida m�s de fevereiro
      // Ano N�O bissexto: 28 dias
      if ((dia > 28) && ((ano % 4) !== 0)) {
        dataValida = false;
      }

      // Ano bissexto: 29 dias
      if ((dia > 29) && ((ano % 4) === 0)) {
        dataValida = false;
      }
    }

    if (dataValida) {
      return null
    } else {
      return { date: true };
    }

  }

  // Muda Formato da Data
  public static mudaFormatoData(Data, Formato) {
    if (Data === undefined || Data === '' || null === Data) {
      return null;
    }
    if (Data.value === undefined && Data.value === '' && Data.value === null && Data.value === '') {
      return null;
    }
    // O parametro Data dever� estar no formato dd/mm/yyyy
    const ano = Data.substring(6, 10);
    const mes = Data.substring(3, 5);
    const dia = Data.substring(0, 2);

    let dataTemp = null;
    if (Formato === 'yyyymmdd') {
      dataTemp = ano + mes + dia;
    }
    if (Formato === 'yyyy-mm-dd') {
      dataTemp = ano + '-' + mes + '-' + dia;
    }
    if (Formato === 'mm/dd/yyyy') {
      dataTemp = mes + '/' + dia + '/' + ano;
    }
    if (Formato === 'mmddyyyy') {
      dataTemp = mes + dia + ano;
    }
    if (Formato === 'ddmmyyyy') {
      dataTemp = dia + mes + ano;
    }

    return dataTemp;

  }

  // Muda Formato da Data passando yyyy-MM-dd
  // 2017-09-11T00:00:00-03:00 - 11/09/2017 - 09/11/2017
  public static mudaFormatoData2(Data, formato: string) {
    if (Data === undefined || Data === '' || null === Data) {
      return null;
    }
    if (Data.value === undefined && Data.value === '' && Data.value === null && Data.value === '') {
      return null;
    }

    // O parametro Data dever� estar no formato dd/mm/yyyy
    const ano = Data.substring(0, 4);
    const mes = Data.substring(5, 7);
    const dia = Data.substring(8, 10);

    const hh = Data.substring(11, 13);
    const min = Data.substring(14, 16);
    const ss = Data.substring(17, 19);

    let dataTemp = null;
    if (formato === 'yyyymmdd') {
      dataTemp = ano + mes + dia;
    }
    if (formato === 'yyyy-mm-dd') {
      dataTemp = ano + '-' + mes + '-' + dia;
    }

    if (formato.toLowerCase() === 'yyyymmdd hhmmss') {
      dataTemp = ano + mes + dia + ' ' + hh + min + ss;
    }
    if (formato.toLowerCase() === 'yyyy-mm-dd hh:mm:ss') {
      dataTemp = ano + '-' + mes + '-' + dia + ' ' + hh + ':' + min + ':' + ss;
    }

    if (formato.toLowerCase() === 'mm/dd/yyyy') {
      dataTemp = mes + '/' + dia + '/' + ano;
    }
    if (formato.toLowerCase() === 'mmddyyyy') {
      dataTemp = mes + dia + ano;
    }


    if (formato.toLowerCase() === 'mm/dd/yyyy hh:mm:ss') {
      dataTemp = mes + '/' + dia + '/' + ano + ' ' + hh + ':' + min + ':' + ss;
    }
    if (formato.toLowerCase() === 'mmddyyyy hhmmss') {
      dataTemp = mes + dia + ano + ' ' + hh + min + ss;
    }

    if (formato.toLowerCase() === 'ddmmyyyy') {
      dataTemp = dia + mes + ano;
    }
    if (formato.toLowerCase() === 'dd/mm/yyyy') {
      dataTemp = dia + '/' + mes + '/' + ano;
    }

    if (formato === 'dd-mm-yyyy') {
      dataTemp = dia + '-' + mes + '-' + ano;
    }

    if (formato.toLowerCase() === 'ddmmyyyy hhmmss') {
      dataTemp = dia + mes + ano + ' ' + hh + min + ss;
    }
    if (formato.toLowerCase() === 'dd/mm/yyyy hh:mm:ss') {
      dataTemp = dia + '/' + mes + '/' + ano + ' ' + hh + ':' + min + ':' + ss;
    }

    return dataTemp;

  }



  public static verificarDataMaiorAtual(dataInformada) {
    // O parametro Data dever� estar no formato dd/mm/yyyy
    const ano = dataInformada.substring(6, 10);
    const mes = dataInformada.substring(3, 5);
    const dia = dataInformada.substring(0, 2);
    // tslint:disable-next-line:radix
    const mesCorreto = parseInt(mes) - 1;
    // tslint:disable-next-line:radix
    const ocorrencia = new Date(parseInt(ano), mesCorreto, parseInt(dia));
    return new Date() < ocorrencia;
  }


  /**
   *  O parametro Data dever� estar no formato dd/mm/yyyy
   * @param dataInformada
   */
  public static strToDate(dataInformada): Date {
    if (dataInformada != null) {
      const ano = dataInformada.substring(6, 10);
      const mes = dataInformada.substring(3, 5);
      const dia = dataInformada.substring(0, 2);
      // tslint:disable-next-line:radix
      const mesCorreto = parseInt(mes) - 1;
      // tslint:disable-next-line:radix
      const ocorrencia = new Date(parseInt(ano), mesCorreto, parseInt(dia));
      return ocorrencia;
    } else {
      return null;
    }
  }


  public static compararDataIgual(param1, param2) {
    const dataConvertida1 = param1.substring(6, 10) + '/' + param1.substring(3, 5) + '/' + param1.substring(0, 2);
    const dataConvertida2 = param2.substring(6, 10) + '/' + param2.substring(3, 5) + '/' + param2.substring(0, 2);

    const data1 = new Date(dataConvertida1);
    const data2 = new Date(dataConvertida2);

    return data1.getTime() === data2.getTime();
  }



  // dataInicio e dataFim s�o objetos Date.
  public static calculaDiferencaDias(dataInicio, dataFim) {

    // Descartando timezone e hor�rio de ver�o
    const utc1 = Date.UTC(dataInicio.getFullYear(), dataInicio.getMonth(), dataInicio.getDate());
    const utc2 = Date.UTC(dataFim.getFullYear(), dataFim.getMonth(), dataFim.getDate());

    return Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));

  }

  /**
   * Recebe data informmada como parâmetro e compara com a data atual.
   * Se a data informada, for maior ou igual a data atual, retorna TRUE.
   * Se não, retorna FALSE.
   * O parametro Data deve estar no formato dd/mm/yyyy
   * @param dataInformada
   */
  public static verificarDataMaiorIgualAtual(dataInformada: string) {
    // DATA INFORMADA
    const anoInformada = dataInformada.substring(6, 10);
    const mesInformada = dataInformada.substring(3, 5);
    const diaInformada = dataInformada.substring(0, 2);
    // tslint:disable-next-line:radix
    const mesCorretoInformada = parseInt(mesInformada) - 1;
    // tslint:disable-next-line:radix
    const ocorrenciaInformada = new Date(parseInt(anoInformada), mesCorretoInformada, parseInt(diaInformada));

    // DATA ATUAL
    const dataAtual = this.convertDateToString(new Date());
    const anoAtual = dataAtual.substring(6, 10);
    const mesAtual = dataAtual.substring(3, 5);
    const diaAtual = dataAtual.substring(0, 2);
    // tslint:disable-next-line:radix
    const mesCorretoAtual = parseInt(mesAtual) - 1;
    // tslint:disable-next-line:radix
    const ocorrenciaAtual = new Date(parseInt(anoAtual), mesCorretoAtual, parseInt(diaAtual));

    if (ocorrenciaInformada >= ocorrenciaAtual) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Recebe Date como parâmetro e retorna data no formato dd/mm/yyyy.
   * @param data
   */
  public static convertDateToString(data: Date) {
    if (data === undefined || data === null) {
      return null;
    } else {
      const dd: number = data.getDate();
      const mm: number = (data.getMonth() + 1); // January is 0!
      const yyyy: number = data.getFullYear();

      let dia: string = dd.toString();
      let mes: string = mm.toString();
      if (dd < 10) {
        dia = '0' + dd.toString();
      }
      if (mm < 10) {
        mes = '0' + mm.toString();
      }
      return dia + '/' + mes + '/' + yyyy.toString();
    }
  }

  /**
   * Recebe Date como parâmetro e retorna data no formato dd/mm/yyyy hhmmss.
   * @param data
   */
  public static convertDateToString2(data: Date, Formato) {

    if (data === undefined || data === null) {
      return null;
    } else {
      const dd: number = data.getDate();
      const mm: number = (data.getMonth() + 1); // January is 0!
      const yyyy: number = data.getFullYear();
      const hh: number = data.getHours();
      const min: number = data.getMinutes();
      const ss: number = data.getSeconds();

      // Formato =  dd/MM/yyyy hh:mm:ss
      let dia: string = dd.toString();
      let mes: string = mm.toString();
      const hora: string = hh.toString();
      const minuto: string = min.toString();
      const segundo: string = ss.toString();
      let dataTemp = null;

      if (dd < 10) {
        dia = '0' + dd.toString();
      }
      if (mm < 10) {
        mes = '0' + mm.toString();
      }

      //  Formato =  dd/MM/yyyy hh:mm:ss
      if (Formato === 'dd/MM/yyyy hh:mm:ss') {
        dataTemp = dia + '/' + mes + '/' + yyyy.toString() + ' ' + hora + ':' + minuto + ':' + segundo;
      }
      if (Formato === 'hh:mm:ss') {
        dataTemp = hora + ':' + minuto + ':' + segundo;
      }

      return dataTemp;
    }
  }

}
