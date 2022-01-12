interface caja<t>{
    contenido:t;
}
let cajadestring:caja<string>={contenido:"hola mundo"};
let cajadenumero:caja<number>={contenido:100};
let cajadefecha:caja<Date>={contenido:new Date()};

interface cajita<t>{
    contenido:t;
}
let cajitadestring:cajita<string>={contenido:"hola mundo"};
let cajitadenumero:cajita<number>={contenido:100};
let cajitadefecha:cajita<Date>={contenido:new Date()};