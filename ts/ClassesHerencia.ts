interface encendible{
    encender():void;
}

class television implements encendible{
    encender():void{
        console.log("el televisor se ha encendido");
    }
}