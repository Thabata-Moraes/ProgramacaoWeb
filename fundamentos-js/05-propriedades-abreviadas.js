let fullname = 'Joniscleison Junqueira Júnior'
let username = 'junin'
let group = 'alunos'

/*
    Criando um objeto a partir das variáveis acima.
    Note que os nomes das propriedade (a esquerda)
    coincide com os nomes das variáveis (à direita)
*/ 

/*let user = {
    fullname: fullname,
    username: username,
    group: group,
}
*/

//Criando um objeto equivalente acima usando propriedades abreviadas
//Não é necessário repetir o mesmo identificador

let user = {
    fullname,
    username,
    group,
}

// Um obj pode misturar propriedades abreviadas e não abreviadas
let user2 = {
    fullname,
    username,
    group,
    password: '12345678@', //não abreviada
}

console.log(user)

/*  Depuração usando propriedades abreviadas
    Exibindo o valor de duas cariáveis. Veja os valores são exibidos, mas a saída não informade quais
    variáveis provêm os valores 
*/
let x= 10, y='batata'
console.log(x, y)

/*  Saída melhorada: passando um objeto com propriedades
    abreviadas para console.log(), como uma forma de sabermos
    de quais variáveis provêm os valores,
*/
console.log({x,y})