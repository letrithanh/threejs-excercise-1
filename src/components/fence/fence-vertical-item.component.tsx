import { FenceProps } from "./fence.interface";

export function FenceVerticalItem(props: FenceProps) {

    const X_INDEX = 0;
    const Y_INDEX = 1;
    const Z_INDEX = 2;

    const x = props.position[X_INDEX];
    const y = props.position[Y_INDEX];
    const z = props.position[Z_INDEX];

    const ROOT_HEIGHT = 0.1;
    const ROOT_RADIUS = 0.15;

    const MIDDLE_HEIGHT = 1;
    const MIDDLE_RADIUS = 0.12;

    const SMALL_TOP_HEIGHT = 0.2;
    const SMALL_TOP_RADIUS = 0.05;

    const TOP_HEIGHT = 0.02;
    const TOP_WIDTH = 0.12;
    
    return (
        <>
            <mesh
                position={[x, y, z]}
            >
                <cylinderGeometry args={[ROOT_RADIUS, ROOT_RADIUS, ROOT_HEIGHT, 32, 1, false, 0, 2*Math.PI]}  />
                <meshStandardMaterial color="#B1C1C0" />
            </mesh>
            <mesh
                position={[x, y + MIDDLE_HEIGHT/2, z]}
            >
                <cylinderGeometry args={[MIDDLE_RADIUS, MIDDLE_RADIUS, MIDDLE_HEIGHT, 32, 1, false, 0, 2*Math.PI]}  />
                <meshStandardMaterial color="#B1C1C0" />
            </mesh>
            <mesh
                position={[x, y + MIDDLE_HEIGHT, z]}
            >
                <cylinderGeometry args={[SMALL_TOP_RADIUS, SMALL_TOP_RADIUS, SMALL_TOP_HEIGHT, 32, 1, false, 0, 2*Math.PI]}  />
                <meshStandardMaterial color="#B1C1C0" />
            </mesh>
            <mesh
                position={[x, y + MIDDLE_HEIGHT + SMALL_TOP_HEIGHT/2, z]}
            >
                <boxGeometry args={[TOP_WIDTH, TOP_HEIGHT, TOP_WIDTH]} />
                <meshStandardMaterial color="#B1C1C0" />
            </mesh>
        </>
    );
}