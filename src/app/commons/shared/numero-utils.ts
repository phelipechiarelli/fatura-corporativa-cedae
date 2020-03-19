export class NumeroUtils {


  public static  isNumber(val) {
    return typeof val === 'number';
  }

  public static strToNumber(val: string) {
     return parseInt(val, 10);
  }

  public static strToFloat(val: string) {
    return parseFloat(val);
 }

}
