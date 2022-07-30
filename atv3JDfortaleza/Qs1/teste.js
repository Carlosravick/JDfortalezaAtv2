// Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números pares e a quantidade de números impares.

 n = 1
 P = 0
 I = 0


        while (n <= 10){
            a = Number(window.prompt("digite o numero"))
            n = n + 1
        
            if (a % 2 == 0){
            P = P + 1
           } else{
                I = I + 1
}

}
document.write("A qtd de números pares é: " + P + "<br>")
document.write("A qtd de números ímpares é: " + I ) 