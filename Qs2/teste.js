n1 = 1 
VerificaNumero = 30
resultado = 31
do {
    document.write(`<br>${VerificaNumero} + ${n1} =  ${resultado}  `)
    if (n1<=30){
            resultado = VerificaNumero + n1
        n1++
      VerificaNumero--
      
}
}while(n1 <=30)