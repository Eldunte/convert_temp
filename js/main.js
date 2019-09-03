var selecionado;
var convert;
var inputElement;
var valorResultado;
var numero;

function Selecionar() {
    selecionado = document.getElementById('AddTempValues').value;
    console.log(selecionado);
    //puxa o valor do select da temperatura
}

function Temperatura() {
    inputELement = document.getElementById('addTemp').value;
    document.getElementById('receber_temp').value = inputElement;
    console.log(inputELement);

    return inputElement;

    //puxa o valor do placeholder

}

function Converter() {
    convert = document.getElementById('Escolha').value;
    document.getElementById('receber_convert').value = convert;
    console.log(convert);

    //puxa o valor da temperatura que o usuário deseja converter
}


function RealizarCalculo() {
    valorResultado = document.getElementById('Resultado');
    if (selecionado == "C" && convert == "Fahrenheit") {
        calculo = parseFloat((document.getElementById('addTemp').value * 9 / 5) 
        + 32);
        valorResultado.value = calculo;
        console.log(calculo);
        //Celsius para Fahrenheit
        if (calculo < -479.67) {
            valorResultado.value = null;
            alert("Não é possível converter." +
                " Razão: Temperatura em fahrenheit é menor que -479,67")


        }

    }
    else {
        if (selecionado == "C" && convert == "Kelvin") {
            numero = parseFloat(document.getElementById('addTemp').value)
            calculo = parseFloat(numero + 273.15);
            valorResultado.value = calculo;
            console.log(calculo);
            //Celsius para Kelvin
        }
        else {
            if (selecionado == "F" && convert == "Celsius") {
                numero = parseFloat(document.getElementById('addTemp').value)
                calculo = parseFloat((numero - 32) * 5 / 9);
                valorResultado.value = calculo;
                console.log(calculo);
                //fahrenheit para Celsius
            }
            else {
                if (selecionado == "F" && convert == "Kelvin") {
                    numero = parseFloat(document.getElementById('addTemp').value)
                    calculo = parseFloat((numero - 32) * 5 / 9 + 273.15);
                    valorResultado.value = calculo;
                    console.log(calculo);
                    //Fahrenheit pra Kelvin
                }
                else {
                    if (selecionado == "F" && convert == "Kelvin") {
                        numero = parseFloat(document.getElementById('addTemp').value)
                        calculo = parseFloat((numero - 32) * 5 / 9 + 273.15);
                        valorResultado.value = calculo;
                        console.log(calculo);
                        //Fahrenheit para Kelvin
                    }
                    else {
                        if (selecionado == "K" && convert == "Celsius") {
                            numero = parseFloat(document.getElementById('addTemp').value)
                            calculo = parseFloat(numero - 273.15);
                            valorResultado.value = calculo;
                            console.log(calculo);
                            //Kelvin para Celsius
                        }

                        else {
                            if (selecionado == "K" && convert == "Fahrenheit") {
                                numero = parseFloat(document.getElementById('addTemp').value)
                                calculo = parseFloat(1.8 * (numero - 273.15) + 32);
                                valorResultado.value = calculo;
                                console.log(calculo);
                                //kelvin para fahrenheit
                                if (calculo < -479.67) {
                                    valorResultado.value = null;
                                    alert("Não é possível converter." +
                                        " Razão: Temperatura em fahrenheit é menor que -479,67")

                                }

                            }
                        }
                    }
                }
            }
        }
    }
}






/*


function KelvinToCelsius(kelvin) {
    celsius = parseFloat(kelvin - 273.15);
    return celsius;
}


function KelvinToFahrenheit(kelvin) {
    fahrenheit = parseFloat(kelvin - 273.15);
    return fahrenheit;
}


}







*/





