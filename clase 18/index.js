var salario = 1200000 
var tarjetas = 0.1 
var generales = 0.05
var arriendo = 0.3
var pagar_dia = "martes"
var hoy = "martes"
var resultado = 0

if( hoy == pagar_dia){
   resultado = salario*tarjetas+salario*generales+salario*arriendo

}
console.log(salario-resultado)