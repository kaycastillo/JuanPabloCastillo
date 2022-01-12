function impeti(etiqueta: {label:string}){
    console.log(etiqueta.label);
}
let mietiquet = {numero: 10, label: "esta es mi etiqueta"};
impeti(mietiquet);

interface etiqueta2{
    label: string;
}


function impeti2(etiqueta2: {label:string}){
    console.log(etiqueta2.label);
}
let mietiquet2 = {numero: 10, label: "esta es mi etiqueta"};
impeti(mietiquet2);