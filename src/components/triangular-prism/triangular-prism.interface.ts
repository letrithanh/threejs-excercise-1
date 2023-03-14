export interface TriangularPrismProps {
    /**
     * [x, y, z] in 3D
    */
    position: number[];

    /**
     * Bottom angle. Must be less than 90 degree. Default is 30 degree.
     */
    angleDegree?: number;

    /**
     * Base length to calculate the output. Default is 1.
     */
    length?: number;

    /**
     * Depth level of the output. Default is 1.
     */
    depth?: number;

    /**
     * Hexa color for the output. Default is #B1C1C0.
     * */
    hexColor?: string;
}