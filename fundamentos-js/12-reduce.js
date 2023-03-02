const nums = [2 ,3, 5, 7, 11, 13, 17, 19, 23, 29, 31]
const nomes = ['Aurival', 'Jonder', 'Neurivânia', 'Terebintina', 'Leucimara']
/*
    reduce() é um método que REDUZ um vetor a um valor singular.
    Para isso, aplica uma função a cada elemento do vetor original, 
    a qual efetua uma trnaformação e acumula os resultados em cada passada.
*/

//reduce() para somar todos os elementos do vetor de números
let soma = nums.reduce((acumulador, elemento) => acumulador + elemento)

//reduce() para colocar em maiúsculas e concaternar com vírgulas 
//intercaladas cada elemento do vetor nomes 
let listaNomes = nomes.reduce(
    (acum, el) => acum.toUpperCase()+', ' + el.toUpperCase()
)



console.log({soma, listaNomes})