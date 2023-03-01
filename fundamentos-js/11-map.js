const nums = [2 ,3, 5, 7, 11, 13, 17, 19, 23, 29, 31]
const nomes = ['Aurival', 'Jonder', 'Neurivânia', 'Terebintina', 'Leucimara']

/*
    O método map() cria um  NOVO VETOR, de tamanho IDENTICO ao vetor original,
    em que cada elemento corresponde a uma transformação feita no elemento 
    original pela função passada como parâmetro.  
 */

// map() que cria um novo vetor em que cada elemento corresponde ao dobro de vlor do elemento do valor original 
let dobro = nums.map(n => n * 2)

console.log('Vetor com números dobrados: ', dobro)
// map() que transforma os elementos do vetor original em itens de uma lista para uso em uma página HTML 
let itensLista = nomes.map( n => `<li> ${n} </li>`)

console.log('<h1>Nomes mais bonitos do Brasil</h1>')
console.log('<ul>')
console.log(itensLista)
console.log('</ul>')