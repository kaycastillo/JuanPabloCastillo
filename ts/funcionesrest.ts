function multiplicar(n:number, ...m:number[]): number {
    return m.reduce((p,c) =>{
        return p*c;
    },n);
}
console.log(multiplicar(2,2));
console.log(multiplicar(2,2,3));
console.log(multiplicar(2,2,3,4));