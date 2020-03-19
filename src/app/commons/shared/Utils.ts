export class Utils {

  public static copiarObjecto(obj, objClonado) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
    // Verificar problema real
    // tslint:disable-next-line:forin
    for (const key in obj) {
      objClonado[key] = this.copiarObjecto(obj[key], objClonado);
    }
    return objClonado;
  }

  public static isNumber(val) {
    return typeof val === 'number';
  }

  public static verificarDVMatricula(matriculaComDV: string): boolean {
    let matriculaValida: boolean = false;

    if (matriculaComDV.length >= 2 && matriculaComDV.length <= 8) {

      let matriculaSemDV: string = matriculaComDV.substring(0, matriculaComDV.length - 1);

      if (!matriculaSemDV) {
        return false;
      }

      let dv: string = matriculaComDV.substring(matriculaComDV.length - 1);

      let dvRetorno: number = Utils.calcularDvMatricula(Number(matriculaSemDV));

      matriculaValida = (dv === dvRetorno.toString());
    }
    return matriculaValida;
  }

  public static calcularDvMatricula(matriculaSemDV: number): number {
    let soma: number = 0;
    let sequenciaFixaCalculoDV: number[] = [3, 4, 5, 6, 7, 8, 9, 3, 4, 5, 6, 7, 8, 9];
    let matriculaInvertida: string[] = matriculaSemDV.toString().split('').reverse();

    // Multiplico cada unidade da matricula já invertida pela sequencia
    // fixa e acumulo o resultado da multiplicação
    for (let i = 0; i < matriculaInvertida.length; i++) {
      soma += sequenciaFixaCalculoDV[i] * Number(matriculaInvertida[i]);
    }

    // Pego o resto da divisão por 11 e com o resultado subitraio 11,
    // exceto quando o resultado for 0 ou 1
    let digito: number = soma % 11;
    if (digito > 1) {
      digito = 11 - digito;
    }

    return digito;
  }
  
}
