import { ExtrudeGeometry, Shape } from "three";
import { TriangularPrismProps } from "./triangular-prism.interface";

export function TriangularPrism(props: TriangularPrismProps) {

    const X_INDEX = 0;
    const Y_INDEX = 1;
    const Z_INDEX = 2;

    const x = props.position[X_INDEX];
    const y = props.position[Y_INDEX];
    const z = props.position[Z_INDEX];

    const TO_PI_BIAS = Math.PI / 180;

    const angle = props.angleDegree && props.angleDegree < 90 ? props.angleDegree : 30;
    const length = props.length && props.length > 0 ? props.length : 1;
    const height = Math.tan(angle * TO_PI_BIAS) * length;

    const shape = new Shape();
    shape.moveTo(0, 0);
    shape.lineTo(length, 0);
    shape.lineTo(0, height);

    const depthLevel = props.depth ? props.depth : 1;
    const extrudeSettings = {
        depth: depthLevel,
        bevelEnabled: false,
    };

    const geometry = new ExtrudeGeometry(shape, extrudeSettings);

    return (
        <mesh 
            geometry={geometry}
            position={[x, y, z]}
        >
            <meshStandardMaterial color="#B1C1C0" />
        </mesh>
    );
}
