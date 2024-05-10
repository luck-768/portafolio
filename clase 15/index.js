let empleados = ["jhon","maikol","alejandra","darmarys"]

let salarios = [1000,1250,2000,2000]

let resultados = []

const cesantias = 0.04

const seguridad = 0.04

for(let i=0; i < empleados.length;i++){
    resultados[i]=salarios[i]-(cesantias*salarios[i]+seguridad*salarios[i])
}


for(let i=0; i < resultados.length;i++){
    console.log("valor a pagar a"+empleados[i]+" "+resultados[i])
}
