class Caja<T>{
    contenido: T;
    constructor(value:T){
        this.contenido = value;
        console.log(this.contenido);
    }
}
type juguete = {
    nombre: string;
};
const misjuguetes: juguete[]=[];
misjuguetes.push({nombre: "pelota"});
misjuguetes.push({nombre: "consola"});
const micajadejueguetes: Caja<juguete[]> = new Caja(misjuguetes);
type maquillaje={
    nombre: string;
};

const mimaquillaje: maquillaje[]=[];
mimaquillaje.push({nombre: "sombras"});
mimaquillaje.push({nombre: "labial"});
const micajademaquillaje: Caja<maquillaje[]> = new Caja(mimaquillaje);


