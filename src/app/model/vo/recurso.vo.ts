import { GrupoMenuVO } from './grupomenu.vo';
export class RecursoVO {

	public static TIPO_RECURSO_MENU?: string = "M";
	public static TIPO_RECURSO_INTERFACE?: string = "I";
	public static TIPO_RECURSO_RECURSO?: string = "R";

    public id?: number; //id proposto para o objeto
	public idPai?: number;
	public tipoRecurso?: string;//Menu - M, Recurso - R e Interface - I
	public nomeRecurso?: string;
	public statusAtivo?: string;//Sim - S e Não - N
	public grupoMenuVO?: GrupoMenuVO;
	public codigoRecurso?: string;

    constructor(){}
}
