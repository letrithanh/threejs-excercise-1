import { FenceType } from "../fence/fence-type.enum";

export interface FenceOnTriangularPrismProps {

    /**
     * [x, y, z] in 3D
     */
    position: number[];

    /**
     * Type of vertical item
     */
    fenceType?: FenceType;
}