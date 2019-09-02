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
        //  console.log(document.getElementById('addTemp').value)
        calculo = parseFloat((document.getElementById('addTemp').value * 9 / 5) + 32);
        //console.log(inputElement)   
        valorResultado.value = calculo;
        console.log(calculo);
    }
    else {
        if () {
            
        } 
        else {
            
        }

    }
}





/*


/*
Selecionar();
Temperatura();
Converter();
*/



/*
function CelsiusToFehrenheit() {
    fahrenheit = parseFloat((addTemp * 9 / 5) + 32);
    return fahrenheit;

}


function CelsiusToKelvin(celsius) {
    kelvin = parseFloat(celsius + 273.15);
    return kelvin;
}


function KelvinToCelsius(kelvin) {
    celsius = parseFloat(kelvin - 273.15);
    return celsius;
}


function KelvinToFahrenheit(kelvin) {
    fahrenheit = parseFloat(kelvin - 273.15);
    return fahrenheit;
}


function FahrenheitToCelsius(fahrenheit) {
    celsius = parseFloat((fahrenheit - 32) * 5 / 9);
    return celsius;
}


function FahrenheitToKelvin(fahrenheit) {
    kelvin = parseFloat((fahrenheit - 32) * 5 / 9 + 273.15);
    return kelvin;




}

*/
//lembrete: criar uma variável apenas que puxe o valor do input do "addTempo"	   
//criar variáveis que puxem o valor dos selects	   
//criar uma variável que puxe o valor do input do resultado, e através dele, aplique as functions de conversao	   
//esboço: if(var input addtemp = tal and select.value temp = tal){	   


//  function();}	 

/*
    var ValorResultado = document.getElementById('Resultado').value;
    document.getElementById('receber_resultado').value = ValorResultado;
*/
/*
function RealizarCalculo(receber_valor, receber_temp, receber_convert, receber_resultado) {
    var ValorResultado = document.getElementById('Resultado').value;
    document.getElementById('receber_resultado').value = ValorResultado;
    if (receber_valor == "C" && receber_convert == "Fahrenheit") {
        var Calculo = parseFloat((receber_temp * 9 / 5) + 32);
        receber_resultado.value = Calculo;
        console.log(receber_resultado);



    }



}
*/