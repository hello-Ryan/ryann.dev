/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */

// inspired by coding train
import React from "react";
import { type Sketch, type P5CanvasInstance } from "@p5-wrapper/react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";

const sketch: Sketch = (p5: P5CanvasInstance) => {
    const grammar = {
        rule1: {
            a: "A",
            b: "AB",
        },
        rule2: {
            a: "B",
            b: "A",
        },
    };
    p5.setup = () => {
        p5.noCanvas();
    };
};

const FractalTree = () => {
    return (
        <div>
            <NextReactP5Wrapper sketch={sketch} />
        </div>
    );
};

export default FractalTree;
