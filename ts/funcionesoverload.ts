function longitud(a: any[]):number;
function longitud(x: string):number;
function longitud(x: any):number{
    return x.length;
}
console.log(longitud("hola mundo"));
console.log(longitud([1,2,3,4,5]));

function calcularlongitud(x:any[] | string) {
    return x.length;
}
console.log(calcularlongitud("hola mundo"));
console.log(calcularlongitud([1,2,3,4,5]));