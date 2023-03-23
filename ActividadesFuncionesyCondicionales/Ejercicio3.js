//Indice día miercoles
const weekDays = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];

const alfabeweekDays = weekDays.sort();
const noLunesJueves = alfabeweekDays.slice(2,5);
const indmiercoles = noLunesJueves.indexOf("miercoles");

console.log(indmiercoles);