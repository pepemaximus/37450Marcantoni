//Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida 
//por cada resultado hasta que se ingresa "ESC"
let texto = prompt("Ingrese el texto");
while (texto != "ESC") {
    alert ("Usted ha ingresado"+ " "+texto);
    texto = prompt ("Ingrese nuevo texto");
}