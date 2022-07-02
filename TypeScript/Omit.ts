interface Pessoa {
    nome: string,
    salario: number
}

interface Usuario extends Omit<Pessoa, 'salario'> {}

const user: Usuario = {
    nome: "Renan"
}