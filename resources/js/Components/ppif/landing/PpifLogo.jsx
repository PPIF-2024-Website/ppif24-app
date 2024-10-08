/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 ppif-logo.glb 
*/

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function PpifLogo(props) {
    const { nodes, materials } = useGLTF("/ppif/3d/ppif-logo.glb");
    const logoRef = useRef(null);

    useFrame(() => {
        if (logoRef.current) logoRef.current.rotation.y += 0.01;
    });

    return (
        <group {...props} dispose={null} ref={logoRef}>
            <mesh
                geometry={nodes.Curve010.geometry}
                material={materials["SVGMat.172"]}
                position={[-0.289, -0.168, 0.427]}
                rotation={[1.571, 0, 0]}
                scale={13.986}
            >
                <meshStandardMaterial
                    attach="material"
                    color={materials["SVGMat.172"].color}
                    emissive="#ff00d8"
                    emissiveIntensity={1}
                    metalness={materials["SVGMat.172"].metalness}
                    roughness={materials["SVGMat.172"].roughness}
                />
            </mesh>
            <mesh
                geometry={nodes.Curve.geometry}
                material={materials["SVGMat.001"]}
                position={[-0.013, 0.066, 0.432]}
                rotation={[1.571, 0, 0]}
                scale={13.986}
            >
                <meshStandardMaterial
                    attach="material"
                    color={materials["SVGMat.001"].color}
                    emissive="#ff6600"
                    emissiveIntensity={2}
                    metalness={materials["SVGMat.001"].metalness}
                    roughness={materials["SVGMat.001"].roughness}
                />
            </mesh>
            <mesh
                geometry={nodes.Curve001.geometry}
                material={materials["SVGMat.002"]}
                position={[-0.283, -0.186, 0.431]}
                rotation={[1.571, 0, 0]}
                scale={13.986}
            >
                <meshStandardMaterial
                    attach="material"
                    color={materials["SVGMat.002"].color}
                    emissive="#ff00d8"
                    emissiveIntensity={1.5}
                    metalness={materials["SVGMat.002"].metalness}
                    roughness={materials["SVGMat.002"].roughness}
                />
            </mesh>
            <mesh
                geometry={nodes.Curve007.geometry}
                material={materials["SVGMat.008"]}
                position={[0.212, -0.583, 0.431]}
                rotation={[1.571, 0, 0]}
                scale={13.986}
            >
                <meshStandardMaterial
                    attach="material"
                    color={materials["SVGMat.008"].color}
                    emissive="#003cff"
                    emissiveIntensity={8}
                    metalness={materials["SVGMat.008"].metalness}
                    roughness={materials["SVGMat.008"].roughness}
                />
            </mesh>
        </group>
    );
}

useGLTF.preload("/ppif/3d/ppif-logo.glb");
