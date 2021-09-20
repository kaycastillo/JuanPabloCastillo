function imprimirId(id) {
    if (typeof id === "string") {
        console.log("el id es " + id.toUpperCase());
    }
    else {
        console.log("el id es " + id.toFixed(2));
    }
}
imprimirId('este_es_mi_id');
imprimirId(100.234234123);
