import { IVector } from './common';
import { CrackTracer } from './CrackTracer';
import { makeCrack } from './index';
import { Store } from './Store';
const store = Store.getInstance();

export class Crack {
  public x: number = 0;
  public y: number = 0;
  public t: number = 0;
  public pstart: IVector = { x: 0, y: 0 };
  public dimx: number;
  public dimy: number;
  // public cgrid: number[] | undefined = undefined;
  // private makeCrack: () => void;
  constructor(dimx: number, dimy: number) {
    this.dimx = dimx;
    this.dimy = dimy;
    // console.log(store.cgrid);
    this.findStart();
    // this.cgrid = cgrid;
  }
  public findStart() {
    // console.log('in find start');
    let px: number = 0;
    let py: number = 0;
    let found: boolean = false;
    let timeout: number = 0;
    while ((!found) || (timeout++ > 1000)) {
      px = Math.floor(Math.random() * this.dimx);
      py = Math.floor(Math.random() * this.dimy);
      // console.log(store.cgrid[py * this.dimx + px]);
      if (store.cgrid[py * this.dimx + px] < 10000) {
        found = true;
      }
    }
    if (found) {
      // start crack
      let start = store.cgrid[py * this.dimx + px];

      if (Math.random() * 100 < 50) {

        start -= 90 + Math.floor((Math.random() * 4.1) - 2);
      } else {

        start += 90 + Math.floor((Math.random() * 4.1) - 2);
      }
      this.startCrack(px, py, start);
    } else {
      // println("timeout: "+timeout);
    }
  }
  public startCrack(X: number, Y: number, T: number) {
    this.x = X;
    this.y = Y;
    this.t = T; // %360;
    this.x += 0.61 * Math.cos(this.t * Math.PI / 180);
    this.y += 0.61 * Math.sin(this.t * Math.PI / 180);
    // ellipse(this.x, this.y, 10, 10);
    // delay(100);
    this.pstart = { x: this.x, y: this.y };
  }
  public move() {
    // continue cracking
    this.x += 0.42 * Math.cos(this.t * Math.PI / 180);
    this.y += 0.42 * Math.sin(this.t * Math.PI / 180);
    // console.log(this.x, this.y);
    // x = (int) (sin(radians(x))) * 50;
    // y = (int) (sin(radians(y))) * 50;
    // bound check
    // const z = 0.33;
    const cx = Math.floor(this.x); // int(x+random(-z, z));  // add fuzz
    const cy = Math.floor(this.y); // int(y+random(-z, z));
    // console.log(cy,cx);
    // draw sand painter
    //regionColor();

    // draw black crack
    // stroke(0, 85);

    // point(this.x + random(-z, z), this.y + random(-z, z));

    // constrain to area
    // console.log(this.dimx, this.dimy);
    if ((cx >= 0) && (cx < this.dimx) && (cy >= 0) && (cy < this.dimy)) {
      // safe to check
      if ((store.cgrid[cy * this.dimx + cx] > 10000) || (Math.abs(store.cgrid[cy * this.dimx + cx] - this.t) < 5)) {
        // console.log('cracking');
        // continue cracking
        store.setCgridVal(cy * this.dimx + cx,  Math.floor(this.t));
      } else if (Math.abs(store.cgrid[cy * this.dimx + cx] - this.t) > 2) {

        // crack encountered (not self), stop cracking
        // tracer.end = new PVector(this.x, this.y);
        // console.log('Stop cracking at', cx, cy);

        store.addTrace(new CrackTracer(this.pstart, { x: this.x, y: this.y }));
        this.findStart();
        makeCrack();
      }
    } else {
      // out of bounds, stop cracking
      // tracer.end = new PVector(this.x, this.y);
      // ellipse(cx,cy, 10,10);
      store.addTrace(new CrackTracer(this.pstart, { x: this.x, y: this.y }));
      this.findStart();
      makeCrack();
    }
  }
}
