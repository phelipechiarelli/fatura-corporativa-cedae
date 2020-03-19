import { TipoUsuarioEnum } from "../enumerator/tipo-usuario.enum";

export class TokenUsuario {

	public OK: number  = 0;
	public static SENHA_EXPIRADA: number = 1;
	public static SESSAO_EXPIRADA: number = 2;
	public static INATIVO: number = 3;
	
	public chave?: string;
	public nome?: string;
	public senha?: string;
	public novaSenha?: string;
    
    public estado: number = this.OK;
	public tipoUsuario?: number;
	public idUsuario?: number;
	public situacaoRandom?: string;
 
    constructor(){}
}