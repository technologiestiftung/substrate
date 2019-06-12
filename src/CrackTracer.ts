import { IVector } from './common';

export class CrackTracer {
  public start: IVector = { x: 0, y: 0 };
  public end: IVector = { x: 0, y: 0 };
  constructor(s: IVector, e: IVector) {
    this.start = s;
    this.end = e;
  }
}
