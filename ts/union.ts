function imprimirid(id:number | string) {
    console.log(`el id es ${id}`);

}

imprimirid(1);
imprimirid('abc');

function imprimirid2(id:number | string) {
    if (typeof id === "string"){
        console.log(`el id es ${(id as string).toUpperCase()}`);
    }else{
        console.log(`el id es ${(id as number).toFixed(2)}`);
    }
    console.log(`el id es ${id}`);

}

imprimirid2('este_es_mi_id');
imprimirid2(100.234234123);
