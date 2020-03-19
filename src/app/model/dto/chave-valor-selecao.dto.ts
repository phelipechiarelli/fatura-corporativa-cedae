/**
 * DTO base que pode ser usado para objetos simples, e conta com o campo de seleção.
 * Não deve ser usado para persistência.
 */
export class ChaveValorSelecaoDTO {
  constructor(
    public chave: string = '',
    public valor: string = '',
    public selecao: boolean = true,
    public tag?: string,
  ) {}
}
