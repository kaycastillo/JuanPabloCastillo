interface direccion{
    nombre:string;
    calle:string;
    numero:number;
    ciudad:string;
    pais:string;
    codigopostal:string;
}

interface direccionapartamento{
    nombre:string;
    calle:string;
    numero:number;
    unidad:string;
    ciudad:string;
    pais:string;
    codigopostal:string;
}

interface direcciondeundepartamentos extends direccion{
    unidad:string;
}