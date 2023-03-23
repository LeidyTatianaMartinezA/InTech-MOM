class Tienda{
    constructor(nombre, direccion, propietario, rubro){
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }

    getNombre(){
        return this.nombre;
    }

    setNombre(nombre){
        this.nombre = nombre;
    }
    
    getDireccion(){
        return this.direccion;
    }

    setDireccion(direccion){
        this.direccion   = direccion;
    }
    
    getPropietario(){
        return this.propietario;
    }

    setPropietario(propietario){
        this.propietario = propietario;
    }

    getRubro(){
        return this.rubro;
    }

    setRubro(rubro){
        this.rubro = rubro;
    }
}

let tienda1 = new Tienda("Tatiana", "Aranjuez", "si", "Lacteos");
console.log(tienda1);

let tienda2 = new Tienda("Salome", "Floresta", "si", "Carne");
console.log(tienda2);

let tienda3 = new Tienda("John", "Campo Valdez", "no", "verduras");
console.log(tienda3);

let tienda4 = new Tienda("Gladis", "Miranda", "si", "Enlatados");
console.log(tienda4);

let tienda5 = new Tienda("Oscar", "Santa Lucia", "si", "Enlatados");
console.log(tienda5);

let tienda6 = new Tienda("Duvan", "Envigado", "si", "Aseo personal");
console.log(tienda6);