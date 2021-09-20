function error(mensaje: string): never
{
    throw new Error(mensaje);
}

function fallo(): never{
    return error("reportar fallo");
}

function loopinfinito(): never
{
    while(true){}
}

loopinfinito();
