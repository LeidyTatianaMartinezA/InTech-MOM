//Operaciones sobre el array.

let people = ["Ana", "Carolina", "Laura", "Natalia", "Fernanda"];

//Punto a
for (let i = 0; i < people.length; i++){
    console.log(people[i]);
}

//Punto b
let eliminarCarolina = people.splice(1, 1) 
console.log (people);

//Punto c
let eliminarFernanda = people.splice(3, 1) 
console.log (people);

//Punto d
let agregarFrancisco = people.push("Francisco");
console.log (people);

//Punto e
let agregarYo = people.push("Tatiana");
console.log (people);

//Punto f
let indiceNatalia = people.indexOf("Natalia");
console.log (indiceNatalia);

//Punto g.1
let indiceUltimo = people.indexOf("Tatiana");
console.log (indiceUltimo);

//Punto g.2
console.log (people.length-1);