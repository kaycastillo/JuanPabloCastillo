class Saludo{
    protected getdestinatario(){
        return "amigos";
    }
}

class Saludoespecial extends Saludo{
    saludar(){
        console.log(`hola ${this.getdestinatario()}`);
    }
}

const saludo: Saludoespecial = new Saludoespecial();
saludo.saludar();
saludo.getdestinatario();