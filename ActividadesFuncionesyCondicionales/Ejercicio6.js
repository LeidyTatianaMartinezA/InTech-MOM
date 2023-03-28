//Cambio de monedas
const equiArsUsd = 205.77; //1 dolar estadounidense es igual a 205.77 pesos Argentinos

function cotizarDolar(pesos){
    var dolar = pesos/equiArsUsd;
    console.log(dolar.toFixed(2));
}
function cotizarPesos(dolar){
    var pesos = dolar*equiArsUsd;
    console.log(pesos.toFixed(2));
}

function cotizarMoneda(moneda){
        
    if (moneda === "ARS"){
        cotizarDolar(pesos);
    } else if (moneda === "USD"){
        cotizarPesos(dolar);
    } else {
        console.log("Moneda no compatible");
    }
}

cotizarDolar(5000);
cotizarPesos(8);
cotizarMoneda("USD");

