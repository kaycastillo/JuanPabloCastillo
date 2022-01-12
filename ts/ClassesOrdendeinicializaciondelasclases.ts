class definicion{
    nombre= "definicion";
    constructor(){
        console.log(`mi nombre es ${this.nombre}`);
    }
}
class implementacion extends definicion{}

const d= new implementacion();