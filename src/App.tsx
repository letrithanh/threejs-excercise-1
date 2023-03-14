import "./App.css";
import { Canvas } from "react-three-fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Fence } from "./components/fence/fence.component";
import { TriangularPrism } from "./components/triangular-prism/triangular-prism.component";

function App() {

    const DEGREE = 20;
    const TO_PI_BIAS = Math.PI / 180;
    const FENCE_ITEM_DISTANCE = 0.75;
    const FENCE_ITEM_ROOT_RADIUS = 0.15;
    const NUMBER_FENCE_ITEM = 5;
    const TRIANGULAR_PRISM_LENGTH = FENCE_ITEM_DISTANCE * NUMBER_FENCE_ITEM;
    const height = Math.tan(DEGREE * TO_PI_BIAS) * TRIANGULAR_PRISM_LENGTH;

    return (
        <div className="h-screen w-full">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
            >
                <Fence 
                    position={[0 + FENCE_ITEM_DISTANCE * NUMBER_FENCE_ITEM / 2 - FENCE_ITEM_DISTANCE / 2, 0 + height, 0 + FENCE_ITEM_ROOT_RADIUS]} 
                    distanceVertical={FENCE_ITEM_DISTANCE} 
                    rotation={[0, 0, -DEGREE * TO_PI_BIAS]}
                />
                <TriangularPrism position={[0, 0, 0]} angleDegree={DEGREE} length={TRIANGULAR_PRISM_LENGTH} />

                <pointLight position={[0, 10, 10]} />
                <gridHelper />
                <Environment preset="dawn" background blur={0.7} />
                <OrbitControls makeDefault />
            </Canvas>
        </div>
    );
}

export default App;
