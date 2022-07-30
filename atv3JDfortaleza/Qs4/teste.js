var quantidade_numero = Number(prompt('Quantos números deseja calcular'))
    var media = 0;
    var soma = 0;
    var msg = document.getElementById('msg')
        for(let i = 1; i <= quantidade_numero; i++){
            let notas = Number(prompt('Digite a nota: '))
            soma += notas;
        }
        media = soma / quantidade_numero;
        document.write("A média das notas foram: " + media)


