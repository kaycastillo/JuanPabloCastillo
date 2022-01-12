class Caja2{
    contenido = "";
    set(valor: string){
        this.contenido=valor;
        return this;
    }
}

const micaja2: Caja2 = new Caja2();
const valorretornado= micaja2.set("joyas");
console.log(micaja2);
console.log(valorretornado);


class Caja3{
    contenido2 = "";
    constructor(contenido2 : string){
        this.contenido2 = contenido2;
    }
    igualque(otro: this){
        return otro.contenido2 === this.contenido2;
    }
}

const caja1 = new Caja3("joyas");
const caja2 = new Caja3("joyas");
const caja3 = new Caja3("maquillaje");

console.log(caja1.igualque(caja2));
console.log(caja1.igualque(caja3));

class Caja4{
    contenido3 = "";
    
    igualque(otro: this){
        return this.contenido3 === otrainstancia.contenido3;
    }
}
class cajaderivada extends Caja4{
    otrocontenido="";
}

const base = new Caja4();
const derivada = new cajaderivada();
derivada.igualque(base);