//Contar la letra r en la siguiente frase.

const text = "Erre con erre cigarro erre con erre barril rapido ruedan los carros cargados de azucar del ferrocarril";
let char = "r";
let count = 1;

for (let i = 0; i < text.length; i++){
    if (text.charAt(i)===char) {
        console.log (count++);
    }
}