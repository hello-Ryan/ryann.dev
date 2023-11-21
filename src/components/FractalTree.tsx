/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */

// inspired by coding train
import React from "react";
import { type Sketch, type P5CanvasInstance } from "@p5-wrapper/react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";

const sketch: Sketch = (p5: P5CanvasInstance) => {
    const axiom = "X";
    let sentence = axiom;
    const angle = p5.radians(-25);
    let len = 70;

    const grammar = [
        {
            a: "F",
            b: "FF",
        },
        {
            a: "X",
            b: "F+[[X]-X]-F[-FX]+X"
        }
    ];

    const generate = () => {
        len *= 0.6;
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
    };

    const turtle = async () => {
        // p5.background(51);
        p5.resetMatrix();
        p5.translate(p5.width / 2, p5.height);
        p5.stroke(255);
        for (let x = 0; x < sentence.length; x++) {
            const current = sentence.charAt(x);
            // await new Promise(r => setTimeout(r, 1));
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

    p5.setup = async () => {
        p5.createCanvas(700, 700);
        generate()
        generate()
        generate()
        generate()
        generate()
        generate()
        generate()



        await turtle();
    };
};

const FractalTree = () => {
    return (
        <div className="w-6/12">
            <NextReactP5Wrapper sketch={sketch} />
        </div>
    );
};

export default FractalTree;
