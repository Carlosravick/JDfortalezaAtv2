//Faça um programa que leia 5 números e informe o maior número.

var n1 = Number(window.prompt("digite o numero"))
var n2 = Number(window.prompt("digite o numero"))
var n3 = Number(window.prompt("digite o numero"))
var n4 = Number(window.prompt("digite o numero"))
var n5 = Number(window.prompt("digite o numero"))


if (n1 > n2 && n1 > n3 && n1> n4 && n1 > n5){
    document.write("o numero maior é " + n1)
}else if (n2 > n1 && n2 > n3 && n2 > n4 && n2 > n5 ){
    document.write("o numero maior é " + n2)
}else if (n3 > n1 && n3 > n2 && n3 > n4 && n3 > n5 ){
document.write("o numero maior é " + n3)
}else if (n4 > n1 && n4 > n2 && n4 > n3 && n4 > n5 ){
    document.write("o numero maior é " + n4)
}else if (n5 > n1 && n5 > n2 && n5 > n3 && n5 > n4 ){
    document.write("o numero maior é " + n5)
}else {
    alert("operação invalida")
}

