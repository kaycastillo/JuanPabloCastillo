interface transporte{
    nombre:string;
}
class caballo implements transporte{
    constructor(public nombre: string){}
}
class automovil implements transporte{
    constructor(public nombre: string){}
}
type constructortransporte={
    new (nombre: string): transporte;
};
function construirtransporte(ctr:constructortransporte,nombre:string) {
    return new ctr(nombre);
}
const micaballo = construirtransporte(caballo,"paso fino");
const miautomovil = construirtransporte(automovil,"toyota");

console.log("mi caballo se llama " + micaballo.nombre);
console.log("mi automovil es un " + miautomovil.nombre);