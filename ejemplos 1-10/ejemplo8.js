var MarcaDeAutos;
(function (MarcaDeAutos) {
    MarcaDeAutos[MarcaDeAutos["Toyota"] = 0] = "Toyota";
    MarcaDeAutos[MarcaDeAutos["Chevrolet"] = 1] = "Chevrolet";
    MarcaDeAutos[MarcaDeAutos["Ford"] = 2] = "Ford";
})(MarcaDeAutos || (MarcaDeAutos = {}));
var tacoma = MarcaDeAutos.Toyota;
var Aveo = MarcaDeAutos.Chevrolet;
var foocus = MarcaDeAutos.Ford;
console.log(tacoma);
console.log(Aveo);
console.log(foocus);
