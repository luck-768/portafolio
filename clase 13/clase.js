console.log("clase 13:objetos de javascript")
//var -- globales
//let -- del momento o de la seccion del codigo
//const -- constante

var nombre = "juan";
var edad = 30;
var monto = 1000.0;
var numero = BigInt(1000000000000000000000000);
var activo = true;
var hijos = null;
var hijos2 = undefined;
var fecha = new Date();
var objeto = {
    nombre: "juan",
    edad: "30"
};
var colores = ["rojo", "verde", "azul"]

//operadores
var suma = 5 + 5;
var resta = 5 - 5;
var multiplicacion = 5 * 5;
var division = 5 / 5;
var modulo = 5 % 5

//operadores logicos
var and = true && true 
var or = true || false

// operadores de comparacion
var igual = 5 == "5";
var igualTipo = 5 === "5";
var diferente = 5 != "5"; 
var diferenteTipo = 5 !== "5";
var mayor = 5 > 5;
var menor = 5 < 5;
var mayorIgual = 5 >= 5;
var menorIgual = 5 <= 5;

//condicionales
if (5 > 5) {
console.log("es mayor")
}

if (mayorIgual) {
    console.log("es mayor")
}

if(edad >= 18 && nombre === "juan") {
    console.log("juan es mayor de edad")
}