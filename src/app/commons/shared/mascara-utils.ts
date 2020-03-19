
export class MascaraUtils {

   public static maskDDMMYYYY = [ /[0-9]/, /\d/,  '/', /[0-1]/, /\d/, '/', /[1-2]/, /\d/, /\d/, /\d/];
   public static telefone = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
   public static maskHora = [/[0-9]/, /\d/, ':', /[0-9]/, /\d/];
   public static maskCep = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
   public static maskCNPJ = [/\d/, /\d/, '\.', /\d/, /\d/, /\d/, '\.', /\d/, /\d/, /\d/, '\/', /\d/, /\d/, /\d/, /\d/, '\-', /\d/, /\d/];


  //  static MascaraCNPJ(cnpj) {
  //     if(this.mascaraInteiro(cnpj)==false){
  //             event.returnValue = false;
  //     }       
  //     return this.formataCampo(cnpj, '00.000.000/0000-00', event);
  //  }

    //valida o CNPJ digitado
  static ValidarCNPJ(objCnpj: any): boolean {
    if(objCnpj !== null && objCnpj !== undefined && String(objCnpj).trim().length > 0){
      var cnpj = objCnpj;
      var valida = new Array(6,5,4,3,2,9,8,7,6,5,4,3,2);
      var dig1: number = 0;
      var dig2: number = 0;
      var exp = /\.|\-|\//g;
      cnpj = cnpj.replace( exp, '' ); 

      let digitoDiferente: boolean;
      let lista: Array<number> = new Array<number>();
      const regex = /[0-9]/;
      //verifica se os 14 digitos são numericos.
      if (regex.test(cnpj.charAt(13))) {
        let digitoAuxiliar: number;
        for(let i = 0; i<cnpj.length; i++) {
          digitoAuxiliar = Number(cnpj.charAt(i));
          if(!lista.includes(digitoAuxiliar)){
            lista.push(digitoAuxiliar);
          } 
        }
        //Se todos os números forem iguais, não é um CNPJ válido.
        digitoDiferente = lista.length > 1;
      }

      if(digitoDiferente) {
        var digito = new Number(cnpj.charAt(12)+cnpj.charAt(13));
  
        for(let i = 0; i<valida.length; i++) {
                dig1 += (i>0? (cnpj.charAt(i-1)*valida[i]):0);  
                dig2 += cnpj.charAt(i)*valida[i];       
        }
        dig1 = (((dig1%11)<2)? 0:(11-(dig1%11)));
        dig2 = (((dig2%11)<2)? 0:(11-(dig2%11)));
  
        if(((dig1*10)+dig2) != digito) {
          return false;
        } else {
          return true;
        }
      } else {
        return false;
      }
    } else {
      return true;
    }

  }

  //valida numero inteiro com mascara
  // static mascaraInteiro(event){
  //   if (event.keyCode < 48 || event.keyCode > 57){
  //           event.returnValue = false;
  //           return false;
  //   }
  //   return true;
  // }

    //formata de forma generica os campos
  //   static formataCampo(campo, Mascara, evento) { 
  //     const campoLocal = campo || window.event;
  //     let key = campoLocal.keyCode || campoLocal.which;
  //     key = String.fromCharCode(key);

  //     var boleanoMascara; 
  //     var Digitato = evento.keyCode;
  //     let exp = /\-|\.|\/|\(|\)| /g;
  //     //console.log('campo: ', campoLocal, ' ** key: ', key, ' *** exp: ', exp);
  //     let campoSoNumeros = key.replace( exp, "" ); 

  //     var posicaoCampo = 0;    
  //     var NovoValorCampo="";
  //     var TamanhoMascara = campoSoNumeros.length; 

  //     if (Digitato != 8) { // backspace 
  //             for(let i=0; i<= TamanhoMascara; i++) { 
  //                     boleanoMascara  = ((Mascara.charAt(i) == "-") || (Mascara.charAt(i) == ".")
  //                                                             || (Mascara.charAt(i) == "/")) 
  //                     boleanoMascara  = boleanoMascara || ((Mascara.charAt(i) == "(") 
  //                                                             || (Mascara.charAt(i) == ")") || (Mascara.charAt(i) == " ")) 
  //                     if (boleanoMascara) { 
  //                             NovoValorCampo += Mascara.charAt(i); 
  //                             TamanhoMascara++;
  //                     }else { 
  //                             NovoValorCampo += campoSoNumeros.charAt(posicaoCampo); 
  //                             posicaoCampo++; 
  //                     }              
  //             }      
  //             campo.value = NovoValorCampo;
  //             return true; 
  //     }else { 
  //             return true; 
  //     }
  // }

  static validaNumero(evt) {
    const theEvent = evt || window.event;
    let key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    const regex = /[0-9]/;
      /*Para aceitar o backspace */
      if (key === '\u0008') {
        return ;
       }
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) {
        theEvent.preventDefault();
      }
    }
  }

  static validaNumeroComPonto(evt) {
    const theEvent = evt || window.event;
    let key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
      /*Para aceitar o backspace */
      if (key === '\u0008') {
        return ;
       }
    const regex = /[0-9]|\./;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) {
        theEvent.preventDefault();
      }
    }
  }

 static validaLetra(evt) {
    const theEvent = evt || window.event;
    let key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
      /*Para aceitar o backspace */
      if (key === '\u0008') {
        return ;
       }
    const regex = /[A-Za-z]/;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) {
        theEvent.preventDefault();
      }
    }
  }

  static validaLetraNumero(evt) {
    const theEvent = evt || window.event;
    let key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    const regex = /[A-Za-z0-9]/;
      /*Para aceitar o backspace */
      if (key === '\u0008') {
        return ;
       }
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) {
        theEvent.preventDefault();
      }
    }
  }

  static validaNumeroInteiro(evt, valor) {
    const theEvent = evt || window.event;
    let key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    const regex = /[0-9]/;
    /*Para aceitar o backspace */
    if (key === '\u0008') {
     return ;
    }
    if (!regex.test(key) || ((valor === undefined || valor  === '') && key === '0')) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) {
        theEvent.preventDefault();
      }
    }
  }

  static validaPattern(evt, pattern) {
    const theEvent = evt || window.event;
    let key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    const regex = pattern;
      /*Para aceitar o backspace */
      if (key === '\u0008') {
        return ;
       }
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) {
        theEvent.preventDefault();
      }
    }
  }

}
