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

let tienda1 = new Tienda("Tatiana", "Aranjuez", "si", "papas");
console.log(tienda1);