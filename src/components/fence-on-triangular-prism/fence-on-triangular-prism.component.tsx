import { Fence } from "../fence/fence.component";
import { TriangularPrism } from "../triangular-prism/triangular-prism.component";
import { FenceOnTriangularPrismProps } from "./fence-on-triangular-prism.interface";

export function FenceOnTriangularPrism(props: FenceOnTriangularPrismProps) {
    const X_INDEX = 0;
    const Y_INDEX = 1;
    const Z_INDEX = 2;

    const x = props.position[X_INDEX];
    const y = props.position[Y_INDEX];
    const z = props.position[Z_INDEX];

    const DEGREE = 20;
    const TO_PI_BIAS = Math.PI / 180;
    const FENCE_ITEM_DISTANCE = 0.75;
    const FENCE_ITEM_ROOT_RADIUS = 0.15;
    const NUMBER_FENCE_ITEM = 5;
    const TRIANGULAR_PRISM_LENGTH = FENCE_ITEM_DISTANCE * NUMBER_FENCE_ITEM;
    const height = Math.tan(DEGREE * TO_PI_BIAS) * TRIANGULAR_PRISM_LENGTH;

    return (
        <group>
                <Fence 
                    position={[x + FENCE_ITEM_DISTANCE * NUMBER_FENCE_ITEM / 2 - FENCE_ITEM_DISTANCE / 2, y + height, z + FENCE_ITEM_ROOT_RADIUS]} 
                    distanceVertical={FENCE_ITEM_DISTANCE} 
                    rotation={[0, 0, -DEGREE * TO_PI_BIAS]}
                />
                <TriangularPrism 
                    position={[x, y, z]} 
                    angleDegree={DEGREE} 
                    length={TRIANGULAR_PRISM_LENGTH} 
                    hexColor="#3d3d3d"
                    depth={2} />
        </group>
    );
}