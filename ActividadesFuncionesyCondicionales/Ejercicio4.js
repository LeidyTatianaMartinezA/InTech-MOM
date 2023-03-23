//Eliminar día martes y en su lugar agregar el dia domingo
const weekDays = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];

for (let i = 0; i < weekDays.length; i++){
    if (i = weekDays.indexOf("martes")){
        let eliminarmartes = weekDays.splice(i);
    }
}
console.log(eliminarmartes);