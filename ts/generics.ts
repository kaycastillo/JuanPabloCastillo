interface caja{
    contenido:any;
}
interface caja2{
    contenido:unknown;
}
let x:caja={
    contenido:"holamundo",
};
if (typeof x.contenido === "string") {
    console.log(x.contenido.toLocaleLowerCase());
}
console.log((x.contenido as string).toLocaleLowerCase());

interface cajanumber{
    contenido:number;
}
interface cajastring{
    contenido:string;
}
interface cajaboolean{
    contenido:boolean;
}
function setcontenido(caja:cajanumber,nuevocontenido:string):void;
function setcontenido(caja:cajastring,nuevocontenido:number):void;
function setcontenido(caja:cajaboolean,nuevocontenido:boolean):void;
 function setcontenido(caja:{contenido:any},nuevocontenido:any){
    caja.contenido=nuevocontenido;
}