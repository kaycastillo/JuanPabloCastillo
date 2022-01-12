class punto{
    x:number;
    y:number;

    constructor(x=10, y=10){
        this.x = x;
        this.y = y;
    }
}

let mipunto = new punto();
console.log(mipunto.x);
console.log(mipunto.y);