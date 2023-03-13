import { MeshProps } from "@react-three/fiber";

export function Cube(props: MeshProps) {
    return (
        <mesh
            {...props}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#B1C1C0" />
        </mesh>
    );
}
