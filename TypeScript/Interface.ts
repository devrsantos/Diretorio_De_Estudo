interface IPessoa {
    nome: string,
    sobrenome: string,
    idade: number,
    sexo: 'masculino' | 'feminino';
}

interface IAluno extends IPessoa {
    registro_aluno: string
}

interface IProfessor extends IPessoa {
    registro_professor: string
}

type IUsuario = IAluno | IProfessor

const aluno: IUsuario = {
    nome: "Renan",
    sobrenome: "Santos",
    idade: 33,
    registro_aluno: "45045",
    sexo: 'masculino',
    registro_professor: "365515"
}