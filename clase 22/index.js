function persona (nombre, edad,identificacion){
    if(edad>=18)
   {
     return {"nombre"
     :nombre,
     "edad":edad,
     "mayor edad":true,
     "id":identificacion}
}
else{
    return{"nombre":nombre,
    "edad":edad,
    "mayor edad":false,
    "id":identificacion

    }
}
}

let maicol = persona("maicol", 18,"10030")
let chamo = persona("eduardo", 12,"10031")

let lista=[]

lista.push(maicol)
lista.push(chamo)

console.log(lista)
