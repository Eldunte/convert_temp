<<<<<<< HEAD
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
=======
var celsius;

var inputELement = document.querySelector("#addTemp ");
var selectElement = document.querySelector("#AddTempValues")
var selectElementValue = document.querySelector("TempC")
console.log(selectElementValue)





function CelsiusToFehrenheit(celsius) {
    fahrenheit = parseFloat((celsius * 9 / 5) + 32);
>>>>>>> 42ca0456c3246f2dd9c07f4f05852ae3ffddbc20
    return fahrenheit;

}

<<<<<<< HEAD

=======
>>>>>>> 42ca0456c3246f2dd9c07f4f05852ae3ffddbc20
function CelsiusToKelvin(celsius) {
    kelvin = parseFloat(celsius + 273.15);
    return kelvin;
}

<<<<<<< HEAD

=======
>>>>>>> 42ca0456c3246f2dd9c07f4f05852ae3ffddbc20
function KelvinToCelsius(kelvin) {
    celsius = parseFloat(kelvin - 273.15);
    return celsius;
}

<<<<<<< HEAD

=======
>>>>>>> 42ca0456c3246f2dd9c07f4f05852ae3ffddbc20
function KelvinToFahrenheit(kelvin) {
    fahrenheit = parseFloat(kelvin - 273.15);
    return fahrenheit;
}

<<<<<<< HEAD

=======
>>>>>>> 42ca0456c3246f2dd9c07f4f05852ae3ffddbc20
function FahrenheitToCelsius(fahrenheit) {
    celsius = parseFloat((fahrenheit - 32) * 5 / 9);
    return celsius;
}

<<<<<<< HEAD

=======
>>>>>>> 42ca0456c3246f2dd9c07f4f05852ae3ffddbc20
function FahrenheitToKelvin(fahrenheit) {
    kelvin = parseFloat((fahrenheit - 32) * 5 / 9 + 273.15);
    return kelvin;


<<<<<<< HEAD


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
=======
}





//lembrete: criar uma variável apenas que puxe o valor do input do "addTempo"
//criar variáveis que puxem o valor dos selects
//criar uma variável que puxe o valor do input do resultado, e através dele, aplique as functions de conversao
//esboço: if(var input addtemp = tal and select.value temp = tal){

//  function();}
>>>>>>> 42ca0456c3246f2dd9c07f4f05852ae3ffddbc20
