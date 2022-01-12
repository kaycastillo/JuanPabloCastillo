interface cuadrado{
    color?: string;
    ancho: number;
}

function crearcuadrador(cuadrado:cuadrado): { area: number} {
    const area = cuadrado.ancho * cuadrado.ancho;
    return {area: area};
}
crearcuadrador({ancho: 10});