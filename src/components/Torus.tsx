"use client";
import React, { useEffect, useRef } from "react";
import type * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import circle from "../assets/circle.png";
import { PerspectiveCamera, Text } from "@react-three/drei";

const Torus = () => {
    const Shape = () => {
        const pointsRef = useRef<THREE.Points>(null);

        useFrame(() => {
            if (!pointsRef.current) {
                return;
            }

            pointsRef.current.rotation.x += 0.01;
            pointsRef.current.rotation.y -= 0.01;
        });

        return (
            <points ref={pointsRef}>
                <torusGeometry args={[0.7, 0.2, 32, 100]} />
                <pointsMaterial size={0.004} />
            </points>
        );
    };

    return (
        <div className="h-screen w-screen">
            <Canvas>
                <PerspectiveCamera
                    makeDefault
                    fov={75}
                    position={[0, 0, 1.8]}
                />
                <pointLight position={[2, 3, 4]} />
                <Shape />
            </Canvas>
        </div>
    );
};

export default Torus;
