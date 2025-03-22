export default class Cl_padre {
    constructor(atribA) {
        this.atribA = atribA;
    }
    set atribA(a){
        this._atribA = +a;
    }
    get atribA(){
        return this._atribA;
    }
}