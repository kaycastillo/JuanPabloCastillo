interface computadora{
    os:'windows' | 'linux' | 'mac';
    monitor?: 'crt' | ' led'
    memoria: number;
    procesador: 'intel' | 'amd'
}

function imprimir(computador:computadora) {
    console.log(`sistema operativo: ${computador.os}`);
    console.log(`memoria: ${computador.memoria}`);
    console.log(`procesador: ${computador.procesador}`);
}

imprimir({
    os:'windows',
    memoria:8,
    procesador:'intel',
});

