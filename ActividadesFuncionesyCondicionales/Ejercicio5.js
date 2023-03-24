//Codificación de tres fundiones
const prompt = require('prompt-sync')();

function entrada(){
    let valor = prompt("Ingresa un valor: ");
    return valor;
}
function procesamiento(valor){
    salida(valor);
}
function salida(valor){
    console.log(valor);
}

var val = entrada();
procesamiento(val);