enum MarcasDeAutos{
    Toyota,
    Chevrolet,
    Ford
}

let tacoma: MarcasDeAutos = MarcasDeAutos.Toyota;
console.log(tacoma);

enum MarcasDeAutos2{
    Toyota2 = 100,
    Chevrolet,
    Ford
}

let tacoma2: MarcasDeAutos2 = MarcasDeAutos2.Toyota2;
console.log(tacoma2);

console.log(MarcasDeAutos2[0])

enum anenum{
    one = 1,
    two,
    ergke = 4
}
let stringone =anenum[1];
let stringtwo =anenum[anenum.two];

let id: number =anenum.ergke;
console.log(stringone);
console.log(stringtwo);
console.log(id);