import { FenceHorizontalItem } from "../fence/fence-horizontal-item.component";
import { FenceType } from "../fence/fence-type.enum";
import { FenceVerticalItemType1 } from "../fence/fence-vertical-item-1.component";
import { FenceVerticalItemType2 } from "../fence/fence-vertical-item-2.component";
import { FenceVerticalItemType3 } from "../fence/fence-vertical-item-3.component";
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

    function selectVerticalFenceIten(type: FenceType, index: number){
        if (type === FenceType.TYPE_1) {
            return <FenceVerticalItemType1 
                    key={`fence-item-${index}`}
                    position={[x + (index - 2)*FENCE_ITEM_DISTANCE + fenceShiftX, y - (index + 0.5)*fenceShiftYHeight + height - FENCE_ITEM_ROOT_HEIGHT/2, z + fenceShiftZ]} 
                    rootRotation={[0, 0, -DEGREE * TO_PI_BIAS]}
                    index={index+1} />
        }

        if (type === FenceType.TYPE_2) {
            return <FenceVerticalItemType2 
                    key={`fence-item-${index}`}
                    position={[x + (index - 2)*FENCE_ITEM_DISTANCE + fenceShiftX, y - (index + 0.5)*fenceShiftYHeight + height - FENCE_ITEM_ROOT_HEIGHT/2, z + fenceShiftZ]} 
                    rootRotation={[0, 0, -DEGREE * TO_PI_BIAS]}
                    index={index+1} />
        }

        if (type === FenceType.TYPE_3) {
            return <FenceVerticalItemType3 
                    key={`fence-item-${index}`}
                    position={[x + (index - 2)*FENCE_ITEM_DISTANCE + fenceShiftX, y - (index + 0.5)*fenceShiftYHeight + height - FENCE_ITEM_ROOT_HEIGHT/2, z + fenceShiftZ]} 
                    rootRotation={[0, 0, -DEGREE * TO_PI_BIAS]}
                    index={index+1} />
        }

        return <FenceVerticalItem 
                key={`fence-item-${index}`}
                position={[x + (index - 2)*FENCE_ITEM_DISTANCE + fenceShiftX, y - (index + 0.5)*fenceShiftYHeight + height - FENCE_ITEM_ROOT_HEIGHT/2, z + fenceShiftZ]} 
                rootRotation={[0, 0, -DEGREE * TO_PI_BIAS]}
                index={index+1} />
    }

    const fenceType = props.fenceType ? props.fenceType : FenceType.DEFAULT;

    return (
        <group>
            {
                Array.from(Array(5).keys()).map(each => (
                    selectVerticalFenceIten(fenceType, each)
                ))
            }

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