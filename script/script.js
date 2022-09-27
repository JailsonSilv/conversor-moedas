function converter(){
    // input com o numero digitado
    let valorDigitado = parseInt(document.querySelector('#valorEmReal').value)
    // peguei os elementos radios 
    let moedaSelecionada = document.querySelector("#moeda").value
    let resultado = document.querySelector("#resultadoConversao")
    // Peguei os butoes 
    let btnConverter = document.querySelector("#btnConverter")
    let btnLimpar = document.querySelector("#btnLimpar") 


    console.log(moedaSelecionada)

    //<><><><><>Cotacoes do dia 26/09/22<><><><><>
    let = valorDoDolar = 5.41
    let = valorDoEuro = 5.19
    let = valorRialDoOma = 14.00
    let = valorDaLibraEsterlina = 5.77


    switch(moedaSelecionada){
        case 'dolar': 
            resul = valorDigitado / valorDoDolar    // 5.41
            resultado.innerHTML = resul.toFixed(5)
            break

        case 'euro':
            resul = valorDigitado / valorDoEuro  // 5.20
            resultado.innerHTML = resul.toFixed(5)
            break

            case 'libra':
                resul = valorDigitado / 5.77 //valorDaLibraEsterlina  
                resultado.innerHTML = resul.toFixed(5)
                break
    }
}