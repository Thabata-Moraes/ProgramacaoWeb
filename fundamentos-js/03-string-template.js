let nome= "Valcicleide"
let idade = 20 
let cidade = "Franca/SP"

console.log('Meu nome é ' + nome + ', tenho ' + idade + ' anos e moro em ' + cidade + '.')

//Mesma mensagem usando string template:
console.log(`Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}`)

//Dentro de uma string template, não estamos limitados a colocar apenas variáveis entre ${}
//Podemos colocar qualquer código JS válido ali.
console.log(`Daqui a 5 anos, ${nome.toUpperCase()} terá ${idade + 5} anos.`)