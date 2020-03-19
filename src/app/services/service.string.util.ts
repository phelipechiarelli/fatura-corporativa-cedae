export class StringUtil {
        /**
         * Prenche o valor informado com zero a esquerda
         * @param value valor numericio
         * @param totalWidth  tamanho do campo
         * @param paddingChar  caracter que será utilizado
         */
    static zeroEsquerda(value, totalWidth, paddingChar): string {
            const length = totalWidth - value.toString().length + 1;
            return Array(length).join(paddingChar || '0') + value;
     };
}
