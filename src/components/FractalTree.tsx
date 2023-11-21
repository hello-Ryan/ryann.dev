/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */

// inspired by coding train
import React from "react";
import { type Sketch, type P5CanvasInstance } from "@p5-wrapper/react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";

const sketch: Sketch = (p5: P5CanvasInstance) => {
    const axiom = "F";
    let sentence = axiom;
    const angle = p5.radians(25);
    let len = 100;

    const grammar = [
        {
            a: "F",
            b: "FF+[+F-F-F]-[-F+F+F]",
        },
    ];

    const generate = () => {
        len *= 0.56;
        let nextSentence = "";
        for (let i = 0; i < sentence.length; i++) {
            const current = sentence.charAt(i);

            let flag = false;
            for (let j = 0; j < grammar.length; j++) {
                if (current == grammar[j]?.a) {
                    flag = true;
                    nextSentence += grammar[j]?.b;
                    break;
                }
            }

            if (!flag) {
                nextSentence += current;
            }
        }
        sentence = nextSentence;
        // p5.createP(nextSentence);
        turtle();
    };

    const turtle = () => {
        p5.background(51);
        p5.resetMatrix();
        p5.translate(p5.width / 2, p5.height);
        p5.stroke(255,100);
        for (let x = 0; x < sentence.length; x++) {
            const current = sentence.charAt(x);
            if (current === "F") {
                p5.line(0, 0, 0, -len);
                p5.translate(0, -len);
            } else if (current === "+") {
                p5.rotate(angle);
            } else if (current === "-") {
                p5.rotate(-angle);
            } else if (current === "[") {
                p5.push();
            } else if (current === "]") {
                p5.pop();
            }
        }
    };

    p5.setup = () => {
        p5.createCanvas(600, 600);
        p5.background(51);
        p5.createP(axiom);
        turtle();
        const button = p5.createButton("generate");
        button.mousePressed(generate);
    };
};

const FractalTree = () => {
    return (
        <div className="text-white">
            <NextReactP5Wrapper sketch={sketch} />
        </div>
    );
};

export default FractalTree;
