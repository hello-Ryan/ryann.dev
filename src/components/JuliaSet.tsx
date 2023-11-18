/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */


// inspired by coding train
import React from "react";
import { type Sketch, type P5CanvasInstance } from "@p5-wrapper/react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";

const sketch: Sketch = (p5: P5CanvasInstance) => {
  p5.setup = () => {
    p5.createCanvas(400, 400);

  };
  let angle = 0;
  const maxIterations = 100;
  p5.draw = () => {
    p5.pixelDensity(1);
    p5.loadPixels();

    for (let x = 0; x < p5.width; x++) {
      for (let y = 0; y < p5.height; y++) {
        let a = p5.map(x, 0, p5.width, -1.5, 1.5);
        let b = p5.map(y, 0, p5.height, -1.5, 1.5);

        let n = 0;
        // let ca = p5.map(p5.mouseX, 0, p5.width, -1, 1)
        // let cb = p5.map(p5.mouseY, 0, p5.height, -1, 1)

        let ca = -0.8
        let cb = -0.156

        while (n < maxIterations) {
          let aa = a * a - b * b;
          let bb = 2 * a * b;

          a = aa + ca;
          b = bb + cb;

          if (p5.abs(a + b) > 16) {
            break;
          }
          n++;
        }
        let bright = p5.map(n, 0, maxIterations, 0, 1);
        bright = p5.map(p5.sqrt(bright), 0, 1, 0, 255);

        if (n === maxIterations) {
          bright = 0;
        }

        let pix = (x + y * p5.width) * 4;

        p5.pixels[pix] = bright;
        p5.pixels[pix + 1] = 0;
        p5.pixels[pix + 2] = 0;
        p5.pixels[pix + 3] = 255;
      }
    }
    p5.updatePixels();
    angle += 0.02;
  };
};

const JuliaSet = () => {
  return (
    <div>
      <NextReactP5Wrapper sketch={sketch} />
    </div>
  );
};

export default JuliaSet;
