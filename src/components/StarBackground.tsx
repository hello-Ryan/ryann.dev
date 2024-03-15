"use client";
import { OrbitControls, Stars, Sparkles, Stats } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React from "react";
import { Camera, Color, Vector2, Vector3 } from "three";


const StarBackground = () => {
    const lightBlue = new Color("rgb(0, 255, 255)")
    // const Parralax = () => {
    //     const { camera, mouse } = useThree();

    //     const vec = new Vector3();

    //     return useFrame(() => {
    //         camera.position.lerp(
    //             vec.set(mouse.x, mouse.y , camera.position.z),
    //             0.01
    //         );
    //         camera.lookAt(0, 0, 0);
    //     });
    // };
    return (
        <div className="h-full w-full">
            <Canvas camera={{ position: [0, 0, 0.5] }}>
                <mesh>

                    {/* <Parralax /> */}
                    <Sparkles count={100} color={lightBlue} speed={0.15}/>
                    <meshStandardMaterial />
                    <Stats />
                </mesh>
            </Canvas>
        </div>
    );
};

export default StarBackground;
