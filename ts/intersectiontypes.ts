interface computadora{
    memoria:string;
    procesador:string;
    hdd:string;
}
interface sistemaoperativo{
    so:string;
    version:string;
}

type portatil = computadora & sistemaoperativo;

const mackbookpro:portatil={
    memoria:"16g",
    procesador:"intel",
    hdd:"1tb",
    so:"osx",
    version:"catalina",
};