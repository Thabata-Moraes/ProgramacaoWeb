//Encontrando o menor e o maior número em uma série

//let minimo = Math.min(2,-7,8,4,0)
//let maximo = Math.max(2,-7,8,4,0)

let nums = [2,-7,8,4,0]

//Passando o vetor para Math.min e Math.max
//let minimo = Math.min(nums) não funfa
//let maximo = Math.max(nums) não funfa

/*  A sintaxe de espalhamento ou spreading (representada por ...antes da variável) é capaz de 'desempacotar'
    um vetor em uma série de valores avulsos
*/

let minimo = Math.min(...nums) 
let maximo = Math.max(...nums) 
console.log({minimo, maximo})

console.log('Vetor empacotado: ', nums)
console.log('Vetor desempacotado: ', ...nums)


let carro1 = {
    modelo: 'Fiorino',
    marca: 'Fiat',
    ano: 1984,
    cor: 'bege'
}

//Copiando carro1 para carro2 
//let carro2 = carro1 NÃO FUNCIONA, ALTERA O ORIGINAL 

//Usando o espalhamento para duplicar corretamente objetos
let carro2 = {...carro1}

//Mudando os valores das propriedades de carro2
carro2.marca = 'Chevrolet'
carro2.modelo = 'Opala'
carro2.ano = 1979
carro2.cor = 'preto'

console.log({carro1, carro2})