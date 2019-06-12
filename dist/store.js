"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Store {
    constructor() {
        this._traces = [];
        this._cracks = [];
        this._cgrid = [];
    }
    static getInstance() {
        if (!Store.instance) {
            Store.instance = new Store();
        }
        return Store.instance;
    }
    get traces() {
        return this._traces;
    }
    // set traces(t: CrackTracer){
    //   this._traces = [...this._traces, t];
    // }
    addTrace(t) {
        this._traces.push(t);
    }
    get cracks() {
        return this._cracks;
    }
    addCrack(c) {
        this._cracks.push(c);
    }
    get cgrid() {
        return this._cgrid;
    }
    setCgridVal(i, val) {
        this._cgrid[i] = val;
    }
}
exports.Store = Store;
//# sourceMappingURL=Store.js.map