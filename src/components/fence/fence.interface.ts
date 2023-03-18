import { FenceType } from "./fence-type.enum";

export interface FenceProps {
    /**
     * [x, y, z] in 3D
     */
    position: number[];

    /**
     * [x, y, z] in 3D. Default is [0, 0, 0]
     */
    rotation?: number[];

    /**
     * [x, y, z] in 3D. Default is [0, 0, 0]
     */
    rootRotation?: number[];

    /**
     * Distance between two vertical item.
     * Default: 0.8
     */
    distanceVertical?: number;

    /**
     * Index of fence vertical item
     */
    index?: number;

    /**
     * Type of vertical item
     */
    type?: FenceType;


}