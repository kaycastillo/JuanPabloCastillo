interface verificable{
    verificar(nombre :string):boolean;
}
class nombreverficable implements verificable{
    verificar(nombre):boolean{
        return nombre.toLowerCase();
    }
}