import { Crack } from './Crack';
import { CrackTracer } from './CrackTracer';

export class Store {

  public static getInstance() {
    if (!Store.instance) {
      Store.instance = new Store();
    }
    return Store.instance;
  }
  private static instance: Store;
  private _traces: CrackTracer[] = [];
  private _cracks: Crack[] = [];
  private _cgrid: number[] = [];

  private constructor() { }

  get traces() {
    return this._traces;
  }
  // set traces(t: CrackTracer){
  //   this._traces = [...this._traces, t];
  // }
  public addTrace(t: CrackTracer) {
    this._traces.push(t);
  }
  get cracks() {
    return this._cracks;
  }
  public addCrack(c: Crack) {
    this._cracks.push(c);
  }
  get cgrid() {
    return this._cgrid;
  }
  public setCgridVal(i: number, val: number) {
    this._cgrid[i] = val;
  }
}
