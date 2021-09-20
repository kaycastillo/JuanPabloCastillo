function error(mensaje) {
    throw new Error(mensaje);
}
function fallo() {
    return error("reportar fallo");
}
function loopinfinito() {
    while (true) { }
}
loopinfinito();
