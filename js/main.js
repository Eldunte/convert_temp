var celsius;

var inputELement = document.querySelector("#addTemp ");
var select


function CelsiusToFehrenheit(celsius) {
    fahrenheit = parseFloat((celsius * 9 / 5) + 32);
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




//lembrete: criar uma variável apenas que puxe o valor do input do "addTempo"
//criar variáveis que puxem o valor dos selects
//criar uma variável que puxe o valor do input do resultado, e através dele, aplique as functions de conversao
//esboço: if(var input addtemp = tal and select.value temp = tal){

//  function();}