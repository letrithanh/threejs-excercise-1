import { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { Box } from "@react-three/drei";
import { Mesh } from "three";

export function Scene() {
    const meshRef = useRef<Mesh>();

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
        }
    });

    return (
        <Box ref={meshRef}>
            <meshStandardMaterial attach="material" color="hotpink" />
        </Box>
    );
}
