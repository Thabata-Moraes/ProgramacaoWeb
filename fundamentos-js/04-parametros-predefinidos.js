
// O parâmetro forma fica predefinido com o valor 'R'. Assume esse valor caso não seja passado 
//Parametros pré definidos devem vir por último na lista de parâmetros. 
function calcular_area(base, altura, forma='R'){
    switch(forma){
        case 'R': //Retangulo
            return base*altura
        case 'T': //Triangulo
            return base*altura/2
        case 'E': //Elipse
            return (base/2)*(altura/2)*Math.PI
        default: //Forma desconhecida
            return null
    }
}

console.log(`Área retângulo 12x16: ${calcular_area(12,16,'R')}`)
console.log(`Área triângulo 15x9: ${calcular_area(15,9,'T')}`)
console.log(`Área elipse 10x18: ${calcular_area(10,18,'E')}`)
console.log(`Área forma desconhecida 7x13: ${calcular_area(7,13,'A')}`)

