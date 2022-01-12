class base{
    protected x:number = 1;
}

class derivada1 extends base{
    protected x: number = 5;
}

class derivada2 extends base{
    imprimirX(c1: derivada2){
        console.log(c1.x)
    }
}