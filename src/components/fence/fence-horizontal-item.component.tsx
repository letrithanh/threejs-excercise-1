import { FenceProps } from "./fence.interface";

export function FenceHorizontalItem(props: FenceProps) {

    const X_INDEX = 0;
    const Y_INDEX = 1;
    const Z_INDEX = 2;

    const x = props.position[X_INDEX];
    const y = props.position[Y_INDEX];
    const z = props.position[Z_INDEX];

    const DISTANCE_VERTICAL_ITEM = props.distanceVertical ? props.distanceVertical : 0.8;

    const HORIZONTAL_ITEM_RADIUS = 0.08;
    const HORIZONTAL_ITEM_HEIGHT = 5 * DISTANCE_VERTICAL_ITEM;

    const MIDDLE_HEIGHT = 1;

    const SMALL_TOP_HEIGHT = 0.2;

    const TOP_HEIGHT = 0.02;

    const WRAPPER_HORIZONTAL_HEIGHT = 0.1;
    const WRAPPER_HORIZONTAL_RADIUS = 0.1;

    return (
        <>
            <mesh
                position={[x-5 * DISTANCE_VERTICAL_ITEM/2, y + MIDDLE_HEIGHT + SMALL_TOP_HEIGHT/2 + TOP_HEIGHT/2 + HORIZONTAL_ITEM_RADIUS, z]}
                rotation={[0, 0, Math.PI/2]}
            >
                <cylinderGeometry args={[WRAPPER_HORIZONTAL_RADIUS, WRAPPER_HORIZONTAL_RADIUS, WRAPPER_HORIZONTAL_HEIGHT, 32, 1, false, 0, 2*Math.PI]}  />
                <meshStandardMaterial color="#B1C1C0" />
            </mesh>
            <mesh
                position={[x, y + MIDDLE_HEIGHT + SMALL_TOP_HEIGHT/2 + TOP_HEIGHT/2 + HORIZONTAL_ITEM_RADIUS, z]}
                rotation={[0, 0, Math.PI/2]}
            >
                <cylinderGeometry args={[HORIZONTAL_ITEM_RADIUS, HORIZONTAL_ITEM_RADIUS, HORIZONTAL_ITEM_HEIGHT, 32, 1, false, 0, 2*Math.PI]}  />
                <meshStandardMaterial color="#B1C1C0" />
            </mesh>
            <mesh
                position={[x+5 * DISTANCE_VERTICAL_ITEM/2, y + MIDDLE_HEIGHT + SMALL_TOP_HEIGHT/2 + TOP_HEIGHT/2 + HORIZONTAL_ITEM_RADIUS, z]}
                rotation={[0, 0, Math.PI/2]}
            >
                <cylinderGeometry args={[WRAPPER_HORIZONTAL_RADIUS, WRAPPER_HORIZONTAL_RADIUS, WRAPPER_HORIZONTAL_HEIGHT, 32, 1, false, 0, 2*Math.PI]}  />
                <meshStandardMaterial color="#B1C1C0" />
            </mesh>
        </>
    );
}