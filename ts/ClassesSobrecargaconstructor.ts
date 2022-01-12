class punto{
    x:number;
    y:number;
    s:string;
    
    constructor(x:number, y:number);
    constructor(s:string);
    constructor(xs:number | string, y?:number){
       
    }
}

let mipunto = new punto();
console.log(mipunto.x);
console.log(mipunto.y);
