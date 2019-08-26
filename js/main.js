var celsius;
var kelvin;
var fahrenheit;

function CelsiusToFehrenheit (celsius) 
{
    fahrenheit = parseFloat((celsius * 9/5) + 32);
    return fahrenheit;
}

function CelsiusToKelvin (celsius) 
{
    kelvin = parseFloat(celsius + 273.15);
    return kelvin;
}

function KelvinToCelsius (kelvin) 
{
    celsius = parseFloat(kelvin - 273.15);
    return celsius;
}

function KelvinToFahrenheit (kelvin)
{
    fahrenheit = parseFloat(kelvin - 273.15);
    return fahrenheit;
}

function FahrenheitToCelsius (fahrenheit) 
{
    celsius = parseFloat((fahrenheit - 32) * 5/9);
    return celsius; 
}

function FahrenheitToKelvin (fahrenheit)
{
    kelvin = parseFloat((fahrenheit - 32) * 5/9 + 273.15);
    return kelvin;

    
}
console.log(celsius);

