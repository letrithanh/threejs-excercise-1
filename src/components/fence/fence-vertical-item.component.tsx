import { FenceProps } from "./fence.interface";

export function FenceVerticalItem(props: FenceProps) {

    const X_INDEX = 0;
    const Y_INDEX = 1;
    const Z_INDEX = 2;

    const xPosition = props.position[X_INDEX];
    const yPosition = props.position[Y_INDEX];
    const zPosition = props.position[Z_INDEX];

    const rootRotation = props.rootRotation && props.rootRotation.length === 3 ? props.rootRotation : [0, 0, 0];
    const rootXRotation = rootRotation[X_INDEX];
    const rootYRotation = rootRotation[Y_INDEX];
    const rootZRotation = rootRotation[Z_INDEX];

    const ROOT_HEIGHT = 0.085;
    const ROOT_RADIUS = 0.15;

    const MIDDLE_HEIGHT = 1;
    const MIDDLE_RADIUS = 0.12;

    const SMALL_TOP_HEIGHT = 0.2;
    const SMALL_TOP_RADIUS = 0.05;

    const TOP_HEIGHT = 0.03;
    const TOP_WIDTH = 0.15;
    
    return (
        <>
            <mesh
                position={[xPosition, yPosition, zPosition]}
                rotation={[rootXRotation, rootYRotation, rootZRotation]}
            >
                <cylinderGeometry 
                    args={[ROOT_RADIUS, ROOT_RADIUS, ROOT_HEIGHT, 32, 1, false, 0, 2*Math.PI]}  />
                <meshStandardMaterial color="#B1C1C0" />
            </mesh>
            <mesh
                position={[xPosition, yPosition + MIDDLE_HEIGHT/2, zPosition]}
            >
                <cylinderGeometry args={[MIDDLE_RADIUS, MIDDLE_RADIUS, MIDDLE_HEIGHT, 32, 1, false, 0, 2*Math.PI]}  />
                <meshStandardMaterial color="#B1C1C0" />
            </mesh>
            <mesh
                position={[xPosition, yPosition + MIDDLE_HEIGHT, zPosition]}
            >
                <cylinderGeometry args={[SMALL_TOP_RADIUS, SMALL_TOP_RADIUS, SMALL_TOP_HEIGHT, 32, 1, false, 0, 2*Math.PI]}  />
                <meshStandardMaterial color="#B1C1C0" />
            </mesh>
            <mesh
                position={[xPosition, yPosition + MIDDLE_HEIGHT + SMALL_TOP_HEIGHT/2, zPosition]}
                rotation={[rootXRotation, rootYRotation, rootZRotation]}
            >
                <boxGeometry args={[TOP_WIDTH, TOP_HEIGHT, TOP_WIDTH]} />
                <meshStandardMaterial color="#B1C1C0" />
            </mesh>
        </>
    );
}