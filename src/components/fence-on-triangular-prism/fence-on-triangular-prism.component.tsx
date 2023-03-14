import { FenceHorizontalItem } from "../fence/fence-horizontal-item.component";
import { FenceVerticalItem } from "../fence/fence-vertical-item.component";
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
    const FENCE_ITEM_ROOT_HEIGHT = 0.085;
    const NUMBER_FENCE_ITEM = 5;
    const TRIANGULAR_PRISM_LENGTH = FENCE_ITEM_DISTANCE * NUMBER_FENCE_ITEM;
    const height = Math.tan(DEGREE * TO_PI_BIAS) * TRIANGULAR_PRISM_LENGTH;
    const fenceShiftX = NUMBER_FENCE_ITEM * FENCE_ITEM_DISTANCE / 2;
    const fenceShiftYHeight = Math.tan(DEGREE * TO_PI_BIAS) * FENCE_ITEM_DISTANCE;
    const fenceShiftZ = FENCE_ITEM_ROOT_RADIUS;

    return (
        <group>
            <FenceVerticalItem 
                position={[x - 2*FENCE_ITEM_DISTANCE + fenceShiftX, y - 0.5*fenceShiftYHeight + height - FENCE_ITEM_ROOT_HEIGHT/2, z + fenceShiftZ]} 
                rootRotation={[0, 0, -DEGREE * TO_PI_BIAS]}/>
            <FenceVerticalItem position={[x - 1*FENCE_ITEM_DISTANCE + fenceShiftX, y - 1.5*fenceShiftYHeight + height - FENCE_ITEM_ROOT_HEIGHT/2, z + fenceShiftZ]} 
                rootRotation={[0, 0, -DEGREE * TO_PI_BIAS]} />
            <FenceVerticalItem position={[x + fenceShiftX, y - 2.5*fenceShiftYHeight + height - FENCE_ITEM_ROOT_HEIGHT/2, z + fenceShiftZ]} 
                rootRotation={[0, 0, -DEGREE * TO_PI_BIAS]} />
            <FenceVerticalItem position={[x + 1*FENCE_ITEM_DISTANCE + fenceShiftX, y - 3.5*fenceShiftYHeight + height - FENCE_ITEM_ROOT_HEIGHT/2, z + fenceShiftZ]} 
                rootRotation={[0, 0, -DEGREE * TO_PI_BIAS]} />
            <FenceVerticalItem position={[x + 2*FENCE_ITEM_DISTANCE + fenceShiftX, y - 4.5*fenceShiftYHeight + height - FENCE_ITEM_ROOT_HEIGHT/2, z + fenceShiftZ]} 
                rootRotation={[0, 0, -DEGREE * TO_PI_BIAS]} />

            <FenceHorizontalItem 
                position={[x + fenceShiftX - FENCE_ITEM_DISTANCE, y + height - fenceShiftYHeight/2 - FENCE_ITEM_ROOT_HEIGHT/2, z + fenceShiftZ]} 
                distanceVertical={FENCE_ITEM_DISTANCE} 
                rotation={[0, 0, -DEGREE * TO_PI_BIAS]} />
            <TriangularPrism 
                position={[x, y, z]} 
                angleDegree={DEGREE} 
                length={TRIANGULAR_PRISM_LENGTH} 
                hexColor="#3d3d3d"
                depth={2} />
        </group>
    );
}