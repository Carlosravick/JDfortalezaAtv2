var n1 = Number(window.prompt("Fatorial de: ") )

resultado=1
cont=1

while (cont <= n1){
    resultado *= cont
    cont += 1
}
document.write(resultado)