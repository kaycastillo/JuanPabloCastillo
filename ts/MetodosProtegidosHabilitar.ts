class base{
    protected m = 10;
}
class derivada extends base{
    m = 15;
}

const d =new derivada();
console.log(d.m);