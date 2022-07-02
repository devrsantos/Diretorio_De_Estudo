interface IUsuario {
    id: string,
    email: string
}

interface IAdmin extends IUsuario {
    cargo: 'gerente' | 'coordenador' | 'supervisor';
    salario?: number;
}

function classificacao(user: IUsuario | IAdmin) {
    if ('cargo' in user) {
        user.id = "1",
        user.email = "e@e.com",
        user.cargo = "gerente"
    }
    user.id = "1",
    user.email = "e@e.com"
}