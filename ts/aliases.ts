type punto = {
    x: number;
    y: number;
}
function imprimircoordenada(punto:punto) {
    console.log(`la coordenada x es : ${punto.x}`);
    console.log(`la coordenada y es : ${punto.y}`);
}

imprimircoordenada({x:10, y:25});