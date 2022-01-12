class Miclase{
    static x = 10;

    static imprimirx(){
        console.log(`el valor de x es: ${this.x}`);
    }

    imprimirx(){
        console.log(`el valor de x en una instancia es: ${Miclase.x}`);
    }

}
Miclase.imprimirx();
console.log(`el valor obtenido de x es: ${Miclase.x}`);
const miclase = new Miclase();
miclase.imprimirx();

class Miclase2{
    private static x = 10;
}
console.log(Miclase2.x );

class Base{
    static saludar(){
        console.log("hola mundo");
    }
}
class derivada extends Base{}

derivada.saludar();