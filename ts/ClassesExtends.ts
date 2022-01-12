class animal{
    moverse(){
        console.log("el animal se mueve");
    }
}
class perro extends animal{
    ladrar(){
        console.log("el perro ladra");
    }
}

const miperro = new perro();
miperro.moverse();
miperro.ladrar();
