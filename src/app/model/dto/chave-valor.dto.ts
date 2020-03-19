/**
 * DTO base que pode ser usado para objetos simples
 * Não deve ser usado para persistência.
 */
export class ChaveValorDTO {
  constructor(
    public chave: string = '',
    public valor: string = '',
    public chaveNumerica?: number
  ) {}
}
