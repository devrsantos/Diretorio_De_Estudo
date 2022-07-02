const soma = <T>(arr: any[], valor: T) => {
    return arr.map(item => item + valor)
}

console.log(soma([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 30));
