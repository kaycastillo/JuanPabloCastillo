class base{
    private x= 0;
}
class derivada1 extends base{
    imprimirx(){
        console.log(this.x);
    }
}

const b = new base();
console.log(b.x);