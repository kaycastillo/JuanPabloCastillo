class desfile{
    private _participantes=0;
    get participantes():number{
        return this._participantes;
    }

    set participantes(v:number){
        this._participantes = v;
    }
}
const desfilehoy = new desfile();
desfilehoy.participantes = 100;
console.log(desfilehoy.participantes);