interface computadora{
    memoria:string;
    procesador:string;
    hdd:string;
}
interface sistemaoperativo{
    so:string;
    version:string;
}
interface portatil extends computadora,sistemaoperativo{
    bateria:string;
    monitor:String;
    teclado:string;
}
interface servidor extends computadora,sistemaoperativo{
    conexion:string;
}
const mackbookpro:portatil={
    memoria:"16g",
    procesador:"intel",
    hdd:"1tb",
    so:"osx",
    version:"catalina",
    bateria:"litio",
    monitor:"17 pulgadas",
    teclado:"espanol",

};
const ubuntuserver: servidor={
    memoria:"64g",
    procesador:"intel",
    hdd:"4tb",
    so:"ubuntu",
    version:"trusty",
    conexion:"ethernet",
};