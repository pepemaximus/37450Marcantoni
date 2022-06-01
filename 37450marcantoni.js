//Pedir número mediante prompt y sumarle otro número en cada repetición, realizando una salida 
//por cada resultado
let repeticiones = parseInt (prompt("Ingrese la cantidad de repeticiones"));
for (let i=0; i<=repeticiones; i++) {
    let numero1 = parseInt (prompt("Ingrese un número"));
    let numero2= parseInt (prompt("Ingrese el segundo número"));
    let resultado = numero1 + numero2;
    console.log ("El resultado es "+resultado);
}