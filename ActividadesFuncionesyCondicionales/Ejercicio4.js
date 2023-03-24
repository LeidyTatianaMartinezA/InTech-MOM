//Eliminar día martes y en su lugar agregar el dia domingo
const weekDays = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
const indexMartes = weekDays.indexOf("martes");
console.log(indexMartes);

weekDays.splice(indexMartes, indexMartes, "domingo");

console.log(weekDays);