function sumar(num) {
    return num.a + num.b + num.c;
}
const numeros = {a:1,b:2,c:3};
console.log(sumar(numeros));

function sumar2({a,b,c}):number {
    return a + b + c;
}

console.log(sumar2({a:1,b:2,c:3}));

function sumar3({a,b,c}:{a:number;b:number;c:number}):number {
    return a + b + c;
}

console.log(sumar3({a:1,b:2,c:3}));