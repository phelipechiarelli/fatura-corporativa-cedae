export class ObjetoUtils {
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

}
