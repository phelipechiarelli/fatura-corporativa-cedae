export class UsuarioVO {

	public id?: number;
	public nome?: string;
	public email?: string;
	public senha?: string;
	public login?: string;
	public autenticacao?: string;
	public situacao?: string;
	public dataCadastro?: Date;
	public tipoUsuario?: number; // 1 - EXTERNO, 2 - INTERNO
	public confsenha?: string;
	public situacaoRandom?: string;
	public quantidadeTentativaAcesso?: number;
	public honeypotAntiSpam?: string;

	constructor() {}
}
