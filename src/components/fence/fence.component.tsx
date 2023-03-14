import { FenceHorizontalItem } from "./fence-horizontal-item.component";
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

    return (
        <group
            rotation={[xRotation, yRotation, zRotation]}
        >
            <FenceVerticalItem position={[xPosition - 2*distanceVerticalItem, yPosition, zPosition]} />
            <FenceVerticalItem position={[xPosition - 1*distanceVerticalItem, yPosition, zPosition]} />
            <FenceVerticalItem position={[xPosition, yPosition, zPosition]} />
            <FenceVerticalItem position={[xPosition + 1*distanceVerticalItem, yPosition, zPosition]} />
            <FenceVerticalItem position={[xPosition + 2*distanceVerticalItem, yPosition, zPosition]} />


            <FenceHorizontalItem position={[xPosition, yPosition, zPosition]} distanceVertical={distanceVerticalItem} />
        </group>
    );
}