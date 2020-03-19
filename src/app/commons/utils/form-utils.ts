import { FormGroup } from '@angular/forms';

export class FormUtil {

  /**
   * Tratamento dos valores NULL nos campos de formulário
   * @param fg Formulário que será validado
   */
  static tratarNull(fg: FormGroup) {
    if (fg.valid) {

      Object.keys(fg.controls).forEach(e => {
        const controle = fg.get(e);

        if (controle.value === 'null') {
          controle.setValue(null);
        }
        if (controle.value === '') {
          controle.setValue(null);
        }

      })
    }
  }

  /**
   * Tratamento dos controles
   * @param fg Formulário que será validado
   */
  static verificarValidacaoForm(fg: FormGroup) {
    Object.keys(fg.controls).forEach(campo => {
      const controle = fg.get(campo);
      controle.markAsDirty();
      if (controle instanceof FormGroup) {
        FormUtil.verificarValidacaoForm(controle);
      }
    });
  }

  /**
 * Tratamento dos controles que estão com disabled
 * @param fg Formulário que será validado
 */
  static verificarValidacaoFormDisabled(fg: FormGroup) {
    Object.keys(fg.controls).forEach(campo => {
      const controle = fg.get(campo);
      if (controle.status !== 'DISABLED') {
        controle.markAsDirty();
      }
      if (controle instanceof FormGroup) {
        FormUtil.verificarValidacaoForm(controle);
      }
    });
  }

  /**
   * Efetuando a validação de campo do formulário
   * @param fg Formulário que será validado
   * @param campo Campo do formulário que será validado
   */
  static validarCampoFormulario(fg: FormGroup, campo) {
    return !fg.get(campo).valid && (fg.get(campo).touched || fg.get(campo).dirty);
  }
}
