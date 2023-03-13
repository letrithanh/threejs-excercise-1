export interface FenceProps {
    /**
     * [x, y, z] in 3D
     */
    position: number[];

    /**
     * Distance between two vertical item.
     * Default: 0.8
     */
    distanceVertical?: number;
}