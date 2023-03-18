import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { FenceProps } from "./fence.interface";

export function FenceVerticalItemType3(props: FenceProps) {

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

    const SMALL_TOP_HEIGHT = 0.2;

    const TOP_HEIGHT = 0.03;
    const TOP_WIDTH = 0.15;

    const middle = useLoader(GLTFLoader, '/fence-style-3.glb');
    return (
        <>
            {/* Bottom */}
            <mesh
                position={[xPosition, yPosition, zPosition]}
                rotation={[rootXRotation, rootYRotation, rootZRotation]}
            >
                <cylinderGeometry 
                    args={[ROOT_RADIUS, ROOT_RADIUS, ROOT_HEIGHT, 32, 1, false, 0, 2*Math.PI]}  />
                <meshStandardMaterial/>
            </mesh>
            {/* Bottom */}
            {/* Middle */}
            <primitive 
                position={[xPosition, yPosition + 0.55, zPosition]}
                object={middle.scene.clone(true)} 
                rotation={[0, Math.PI / 2, 0]}
                scale={0.55}
            />
            {/* Middle */}
            {/* Top */}
            <mesh
                position={[xPosition, yPosition + MIDDLE_HEIGHT + SMALL_TOP_HEIGHT/2, zPosition]}
                rotation={[rootXRotation, rootYRotation, rootZRotation]}
            >
                <boxGeometry args={[TOP_WIDTH, TOP_HEIGHT, TOP_WIDTH]} />
                <meshStandardMaterial />
            </mesh>
            {/* Top */}
        </>
    );
}