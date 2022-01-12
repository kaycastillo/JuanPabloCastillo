interface perro{
    readonly raza:string;
}
const micachorro:perro={raza:"shitzu"};
console.log(`la raza de mi cahorro es:${micachorro.raza}`);


interface perro2{
    readonly raza2:string;
}
const micachorro2:perro2={raza2:"shitzu"};
console.log(`la raza de mi cahorro es:${micachorro2.raza2}`);
micachorro.raza2='pitbull';

interface persona{
    edad: number;
}
interface edadnoescribible{
    readonly edad:number;
}
const luis:persona = {edad:20};
const pedro:edadnoescribible = luis;
luis.edad++;

console.log(luis);
console.log(pedro);