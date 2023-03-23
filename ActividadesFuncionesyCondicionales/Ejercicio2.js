//Extraer array de otro como una copia con modificaciones

const weekDays = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];

const alfabeweekDays = weekDays.sort();
const noLunesJueves = alfabeweekDays.slice(2,5);

console.log(noLunesJueves);