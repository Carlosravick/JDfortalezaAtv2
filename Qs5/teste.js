// Faça um programa que leia 5 números e informe a soma e a média dos números.


x = Number(prompt("digite o numero"))


for (i = 1 ; i < 5 ; i++){
  let y = Number(prompt("digite o valor "))
    x = x + y
     media = x / 5    

}

document.write(`a soma é ${x} e a media é ${media}`)