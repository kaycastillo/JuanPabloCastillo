declare function crear(o:object): void;

crear({prop: 0})
crear(null)
crear(undefined)
crear([])

//false es tipo primitivo

crear(false);