let media = 7.2, resultado 

if (media >= 6) {
    resultado = "Aprovado"
} else {
    resultado = "Reprovado"
}

console.log({media, resultado})

//Operador Ternário para mesmo resultado:
resultado = media>=6 ? 'Aprovado' : 'Reprovado'

console.log('Usando o operador ternário: ', {media, resultado})

//