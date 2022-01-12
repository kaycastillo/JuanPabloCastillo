class saludo{
    readonly nombre:string= "mundo";
    constructor(nuevonombre:string){
        if(!!nuevonombre){
            this.nombre = nuevonombre;
        }
    }
    asignatnuevonombre(nuevonombre:string){
        this.nombre = nuevonombre;
    }
}

const minombre = new saludo("helio");
minombre.nombre = "alejandro";