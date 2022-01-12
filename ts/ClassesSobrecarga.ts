class padre{
    saludar(){
        console.log("hola");
    }
}

class Hijo extends padre{
    saludar(nombre?: string){
        if (!!nombre){
            console.log(`hola ${nombre}`);
        }else{
            super.saludar();
        }
    }
}

const hijo = new Hijo();
const h:padre = new Hijo();
hijo.saludar();
hijo.saludar("luis");