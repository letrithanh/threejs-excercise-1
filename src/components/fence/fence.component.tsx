import { FenceHorizontalItem } from "./fence-horizontal-item.component";
import { FenceVerticalItem } from "./fence-vertical-item.component";
import { FenceProps } from "./fence.interface";

export function Fence(props: FenceProps) {

    const X_INDEX = 0;
    const Y_INDEX = 1;
    const Z_INDEX = 2;

    const x = props.position[X_INDEX];
    const y = props.position[Y_INDEX];
    const z = props.position[Z_INDEX];

    const distanceVerticalItem = props.distanceVertical ? props.distanceVertical : 0.8;

    return (
        <>
            <FenceVerticalItem position={[x - 2*distanceVerticalItem, y, z]} />
            <FenceVerticalItem position={[x - 1*distanceVerticalItem, y, z]} />
            <FenceVerticalItem position={[x, y, z]} />
            <FenceVerticalItem position={[x + 1*distanceVerticalItem, y, z]} />
            <FenceVerticalItem position={[x + 2*distanceVerticalItem, y, z]} />


            <FenceHorizontalItem position={[x, y, z]} distanceVertical={distanceVerticalItem} />
        </>
    );
}