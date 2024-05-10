
function FactoryComida(nombre, tipo, precio, estado,cliente) {
    return {
        nombre,
        tipo,
        precio,
        estado,
        cliente
    }
}

function Factorycliente(nombre, apellido, numerocontacto) {
    return {
        nombre,
        apellido,
        numerocontacto
    }
}

let pizza = FactoryComida("pizza", 
"pizza",
 16000,
 true,
 Factorycliente("Juan", "oquendo","89372978"))
 
 let perro = FactoryComida("perro", 
 "perro",
  5000,
  false,
    Factorycliente("Miguel", "Alvarez","1234567"))

function RestauranteComidasRapidas(comida) {
    let vendidos = []
    let novendidos = []

    if (comida.estado){
        vendidos.push(comida)
    } else{
        novendidos.push(comida)
    }

    return {
        vendidos,
        novendidos
    }
}

console.log(RestauranteComidasRapidas(pizza).vendidos)