"use client";
// taken from https://www.youtube.com/watch?v=wRmeFtRkF-8&list=PLkQj0oVF_lCyCnVRYZMvjhoMSHSre6Dge
import React, { Suspense, useCallback, useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const ParticleTerrain = () => {
    let t = 0;
    const f = 0.002;
    const a = 3;

    const graph = useCallback(
        (x: number, z: number) => {
            return Math.sin(f * (x ** 2 + z ** 2 + t)) * a;
        },
        [t, f, a]
    );

    const count = 40;
    const sep = 3;

    const positions = useMemo(() => {
        const positions = [];
        for (let xi = 0; xi < count; xi++) {
            for (let zi = 0; zi < count; zi++) {
                const x = sep * (xi - count / 2);
                const z = sep * (zi - count / 2);
                const y = graph(x, z);
                positions.push(x, y, z);
            }
        }
        return new Float32Array(positions);
    }, [count, sep, graph]);

    const Points = () => {
        const texture = useLoader(THREE.TextureLoader, "/circle.png");
        const bufferRef = useRef<THREE.BufferAttribute>(null);

        useFrame(() => {
            if (!bufferRef.current) {
                return;
            }

            t += 15;
            const positions = bufferRef.current.array;

            let i = 0;

            for (let xi = 0; xi < count; xi++) {
                for (let zi = 0; zi < count; zi++) {
                    const x = sep * (xi - count / 2);
                    const z = sep * (zi - count / 2);
                    positions[i + 1] = graph(x, z);

                    i += 3;
                }
            }
            bufferRef.current.needsUpdate = true;
        });

        return (
            <points>
                <bufferGeometry>
                    <bufferAttribute
                        ref={bufferRef}
                        attach="attributes-position"
                        array={positions}
                        count={positions.length / 3}
                        itemSize={3}
                    />
                </bufferGeometry>

                <pointsMaterial
                    map={texture}
                    color={0x00aaff}
                    size={0.5}
                    sizeAttenuation
                    transparent={false}
                    alphaTest={0.5}
                    opacity={1}
                />
            </points>
        );
    };

    const AnimationCanvas = () => {
        return (
            <Canvas camera={{ position: [100, 30, 0], fov: 65 }}>
                <OrbitControls />
                <Suspense fallback={null}>
                    <Points />
                </Suspense>
            </Canvas>
        );
    };

    return (
        <div className="h-screen w-screen">
            <AnimationCanvas />;
        </div>
    );
};

export default ParticleTerrain;
