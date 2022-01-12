function saludar(nombre) {
    return "Hola, " + nombre;
}
console.log(saludar("Geovany"));
//BOOL
var isTrue = true;
var isFalse = false;
console.log("Verdadero: " + isTrue);
console.log("Falso: " + isFalse);
//NUMBER
var edad = 18;
var color = 0xFF0040;
var veinte = 20;
var once = 11;
console.log("Edad: " + edad);
console.log("Color: " + color);
console.log("No. Veinte: " + veinte);
console.log("No. Once: " + once);
//STRING
var firstName = "Pito";
var lastName = 'Perez';
console.log("Me llamo " + firstName + " " + lastName);
//SOMETHING STRING
var Name = "Charmander";
var Type = "Fire";
var HP = 309;
var Attack = 52;
var Pokemon = "\n    Nombre: " + Name + "\n    Tipo: " + Type + "\n    Vida: " + HP + "\n    Ataque: " + Attack + "\n    ";
console.log(Pokemon);
//ARRAY
var lista = [1, 2, 3];
lista.push();
var lista2 = [1, 2, 3];
//TUPLE (arrays con distintos tipos)
var futbolista;
futbolista = ['Raul Jimenes', 28];
console.log("El nombre es " + futbolista[0]);
console.log("La edad es " + futbolista[1]);
//ENUM
var MarcaDeAutos;
(function (MarcaDeAutos) {
    MarcaDeAutos[MarcaDeAutos["Toyota"] = 100] = "Toyota";
    MarcaDeAutos[MarcaDeAutos["Ford"] = 101] = "Ford";
    MarcaDeAutos[MarcaDeAutos["Chevrolet"] = 102] = "Chevrolet";
})(MarcaDeAutos || (MarcaDeAutos = {}));
var tacoma = MarcaDeAutos.Ford;
console.log(tacoma);
console.log(MarcaDeAutos[0]);
//ANY 
var variableSinTipo = 'hola pedrito';
variableSinTipo = 100;
//UNKNOWN
var valorDesconocido = 4;
valorDesconocido = true;
//VOID
function saludar2() {
    console.log("Hola mundo...");
}
saludar2();
//NULL-UNDEFINED
var variableSinDefinir = undefined;
var variableNula = null;
//NEVER
function error(mensaje) {
    throw new Error(mensaje);
}
crear({ prop: 0 });
crear(null);
crear(undefined);
crear([]);
//UNIONS (puede combinar tipos)
function imprimirID(id) {
    console.log("El ID es " + id);
}
imprimirID(1);
imprimirID('abc');
//TYPEOF(identifica el tipo de la variable) typeof _var === string
//ASSERTION
var algunValor = "esto es un string";
var longitudDelString = algunValor.length;
var longitudDelString2 = algunValor.length;
//FUNCTION
function saludar3(nombre) {
    console.log("Hola " + nombre);
}
saludar3("Nubia");
//ANONYM FUNCTION
var nombres = ["Juan", "Pedro", "Luis"];
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
function imprimirCoordenada(punto) {
    console.log("La coordenada x es : " + punto.x);
    console.log("La coordenada y es : " + punto.y);
}
imprimirCoordenada({ x: 10, y: 25 });
