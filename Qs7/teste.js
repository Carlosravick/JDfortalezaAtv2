/*Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo:
    Tabuada de 5:
    5 X 1 = 5
    5 X 2 = 10
    ...
    5 X 10 = 50*/

    var n1 = Number(window.prompt("digite o numero"))
     
    for (i = 1 ; i <= 10; i++){  
        
        document.write(n1 + "x"+ i + " = " +  i * n1 + "<br>")
    }
