// var calcular = require('./calculadora')

// var a = calcular.somar(9, 5)
// console.log("Soma: " + a)

function equacao(a, b, operacao){
    let r = a + b * operacao(a, b)
    return r
}

function acao(x, y){
    return x + (y * y)
}
// => = function anonima
let x = equacao(5, 6, (a, b)=>{
    return a + (b * b)
})
