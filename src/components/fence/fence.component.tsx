import { FenceHorizontalItem } from "./fence-horizontal-item.component";
import { FenceType } from "./fence-type.enum";
import { FenceVerticalItemType1 } from "./fence-vertical-item-1.component";
import { FenceVerticalItemType2 } from "./fence-vertical-item-2.component";
import { FenceVerticalItemType3 } from "./fence-vertical-item-3.component";
import { FenceVerticalItem } from "./fence-vertical-item.component";
import { FenceProps } from "./fence.interface";

export function Fence(props: FenceProps) {

    const X_INDEX = 0;
    const Y_INDEX = 1;
    const Z_INDEX = 2;

    const xPosition = props.position[X_INDEX];
    const yPosition = props.position[Y_INDEX];
    const zPosition = props.position[Z_INDEX];

    const distanceVerticalItem = props.distanceVertical ? props.distanceVertical : 0.8;
    const rotation = props.rotation && props.rotation.length === 3 ? props.rotation : [0, 0, 0];

    const xRotation = rotation[X_INDEX];
    const yRotation = rotation[Y_INDEX];
    const zRotation = rotation[Z_INDEX];

    function selectVerticalFenceIten(type: FenceType, index: number){
        if (type === FenceType.TYPE_1) {
            return <FenceVerticalItemType1 key={`fence-${index + 1}`} position={[xPosition + (index - 2)*distanceVerticalItem, yPosition, zPosition]} index={index + 1} />
        }

        if (type === FenceType.TYPE_2) {
            return <FenceVerticalItemType2 key={`fence-${index + 1}`} position={[xPosition + (index - 2)*distanceVerticalItem, yPosition, zPosition]} index={index + 1} />
        }

        if (type === FenceType.TYPE_3) {
            return <FenceVerticalItemType3 key={`fence-${index + 1}`} position={[xPosition + (index - 2)*distanceVerticalItem, yPosition, zPosition]} index={index + 1} />
        }

        return <FenceVerticalItem key={`fence-${index + 1}`} position={[xPosition + (index - 2)*distanceVerticalItem, yPosition, zPosition]} index={index + 1} />
    }

    const fenceType = props.type ? props.type : FenceType.DEFAULT;
    return (
        <group
            rotation={[xRotation, yRotation, zRotation]}
        >
            {
                Array.from(Array(5).keys()).map(each => (
                    selectVerticalFenceIten(fenceType, each)
                ))
            }


            <FenceHorizontalItem position={[xPosition, yPosition, zPosition]} distanceVertical={distanceVerticalItem} />
        </group>
    );
}