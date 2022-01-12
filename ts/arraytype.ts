const imprimirtareas= (v:Array<string>) =>{
    v.forEach((v)=> {
        console.log(v);
    });
};

const mistareas: string[]=[
    "levantarse",
    "lavarse los dientes",
    "sacar al perro",
];

imprimirtareas(mistareas);