function saludar(nombre) {
    return "Hola, " + nombre;
}

    console.log(saludar("Geovany"));

    //BOOL
    let isTrue = true;
    let isFalse = false;

    console.log("Verdadero: " + isTrue);
    console.log("Falso: " + isFalse);

    //NUMBER
    let edad : number = 18;
    let color : number = 0xFF0040;
    let veinte: number = 0o24;
    let once: number = 0b1011;

    console.log("Edad: " + edad);
    console.log("Color: " + color);
    console.log("No. Veinte: " + veinte);
    console.log("No. Once: " + once);

    //STRING
    let firstName : string = "Pito";
    let lastName : string = 'Perez';

    console.log("Me llamo " + firstName + " " + lastName);

    //SOMETHING STRING
    let Name : string = "Charmander";
    let Type : string = "Fire";
    let HP : number = 309;
    let Attack : number = 52;
    let Pokemon : String = `
    Nombre: ${Name}
    Tipo: ${Type}
    Vida: ${HP}
    Ataque: ${Attack}
    `;

    console.log(Pokemon);

    //ARRAY
    let lista : number[] = [1,2,3];
    lista.push();

    let lista2 : Array<number> = [1,2,3];

    //TUPLE (arrays con distintos tipos)
    let futbolista: [string, number];

    futbolista = ['Raul Jimenes', 28];

    console.log(`El nombre es ${futbolista[0]}`);
    console.log(`La edad es ${futbolista[1]}`);

    //ENUM
    enum MarcaDeAutos {
        Toyota = 100,
        Ford,
        Chevrolet
    }

    let tacoma: MarcaDeAutos = MarcaDeAutos.Ford;
    console.log(tacoma);
    console.log(MarcaDeAutos[0]);

    //ANY 
    let variableSinTipo : any = 'hola pedrito';
    variableSinTipo = 100;

    //UNKNOWN
    let valorDesconocido: unknown = 4;
    valorDesconocido = true;

    //VOID
    function saludar2(): void{
        console.log("Hola mundo...")
    }

    saludar2();

    //NULL-UNDEFINED
    let variableSinDefinir: undefined = undefined;
    let variableNula: null = null;

    //NEVER
    function error(mensaje: string): never{
        throw new Error(mensaje);
    }

    //OBJECTS
    declare function crear(o:object): void;

    crear({prop: 0});
    crear(null);
    crear(undefined);
    crear([]);

    //UNIONS (puede combinar tipos)
    function imprimirID(id:number | string) {
        console.log(`El ID es ${id}`);
    }
    
    imprimirID(1);
    imprimirID('abc');

        //TYPEOF(identifica el tipo de la variable) typeof _var === string
        
    //ASSERTION
    let algunValor: unknown = "esto es un string";
    let longitudDelString: number = (algunValor as string).length;
    let longitudDelString2: number = (<string>algunValor).length;

    //FUNCTION
    function saludar3(nombre: string){
        console.log(`Hola ${nombre}`);
    }

    saludar3("Nubia");

    //ANONYM FUNCTION
    const nombres = ["Juan", "Pedro", "Luis"];

    nombres.forEach(function (s){
        console.log(s.toUpperCase());
    });

    nombres.forEach((s) => {
        console.log(s.toUpperCase());
    });

    //ALIAS
    type Punto = {
        x: number;
        y: number;
    }

    function imprimirCoordenada(punto: Punto) {
        console.log(`La coordenada x es : ${punto.x}`);
        console.log(`La coordenada y es : ${punto.y}`);
    }

    imprimirCoordenada({ x: 10, y: 25});
