class video{
    titulo:string;
    constructor(titulo:string){
        this.titulo = titulo;
    }
    reproducir():void{
        console.log(`${this.titulo} se esta reproduciendo`);
    }
}

const mivideo = new video("ano nuevo");
mivideo.reproducir();

let titulo2= "mi graduacion";
class video2{
    titulo2:string;
    asignartitulo(nuevotitulo:string){
        titulo2 = nuevotitulo;
        this.titulo2 = nuevotitulo;
    }
}

