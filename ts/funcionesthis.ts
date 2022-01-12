const usuario={
    id:123,
    admin:false,
    volverseradmin:function () {
        this.admin=true;
    },
};
console.log(usuario.admin);
usuario.volverseradmin();
console.log(usuario.admin);

const usuario2={
    id:123,
    admin:false,
    volverseradmin2:function () {
        this.admin=true;
    },
};
console.log(usuario.admin);
usuario2.volverseradmin2();
console.log(usuario.admin);