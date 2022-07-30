// A série de Fibonacci é formada pela seqüência 1,1,2,3,5,8,13,21,34,55,... Faça um programa capaz de gerar a série até o n−ésimo termo.

t1 = 0
t2 = 1


var n = window.prompt("digite o numero ")

while (t2 <= n){
 document.write(t2 +"<br>")
    t2 = t2 + t1
    t1 = t2 - t1
   
}
