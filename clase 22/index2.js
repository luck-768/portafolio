function animal (nombre, especie, color){
    if(especie=="gato")
   {
     return {"nombre":nombre,
     "gato":true,
     "color":color
    }
}
else{
    return{"nombre":nombre,
    "gato":false,
    "color":color
    }
}
}

let pepe = animal("pepe","gato","naranja")
let firulais = animal("firulais","perro","negro")

let lista=[]

lista.push(pepe)
lista.push(firulais)

console.log(lista)



function producto (nombre,precio,id){
    if(precio>= 1000)
   {
     return {"nombre":nombre,
     "precio":precio,
    "comprable":"si",
    "id":id
    }
}
else{
    return{"nombre":nombre,
    "precio":precio,
   "comprable":"no",
   "id":id
    }
}
}


let mac  = producto("mac","1000","12345")
let asus = producto("asus","500","54321")

let lista2=[]

lista2.push(mac)
lista2.push(asus)

console.log(lista2)