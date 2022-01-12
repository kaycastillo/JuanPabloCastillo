class a{
    private x = 10;
    public imprimirx(otra:a){
        console.log(otra.x);
    }
}

const b = new a();

b.imprimirx(new a());