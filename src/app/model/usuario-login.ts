export class UsuarioLogin {
    public static readonly TIPO_USUARIO: number = 1;

    chave: string;
    nome: string;
    senha: string;
    tipoUsuario: number = UsuarioLogin.TIPO_USUARIO;
    idUsuario: number;

    constructor(){}
}
