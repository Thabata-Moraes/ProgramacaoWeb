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

//Problema: juntar dois ou mais vetores em um só
let frutas =['maça', 'banana','laranja']
let verduras = ['alface', 'couve', 'rúcula']

//Produzindo um vetor que contém tanto frutas quanto verduras
//let hortifruti = frutas + verduras  //NÃO é interessante, não funciona como deveria 

//Métodos JS Clássico 
//let hortifruti = frutas.concat(verduras)

//A partir de 2015 novas formas. Outro método que funciona:
//Método que funciona 2: usando espalhamento 
let hortifruti = [...frutas, ...verduras]

console.log({hortifruti})

/*
    Problema: como declarar uma função capaz de receber 
    um num arbitrário de argumentos?
*/


//O Espalhamento tb resolve esse tipo de problema 
//Quando usado em parâmetros de função, passa a ser chamado de PARÊMETRO DE RESTO   
function soma(...valores){
    //Dentro da função, o parâmetro de resto se comporta como um vetor
    let resultado = 0 
    for(let valor of valores) resultado += valor 
    return resultado
}

console.log('Soma 7 números: ', soma(1,2,3,4,5,6,7))
console.log('Soma 12 números: ', soma(1,2,3,4,5,6,7,8,9,10,11,12))
