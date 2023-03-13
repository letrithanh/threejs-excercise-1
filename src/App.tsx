import "./App.css";
import { Canvas } from "react-three-fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Fence } from "./components/fence/fence.component";

function App() {

    return (
        <div className="h-screen w-full">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
            >
                <Fence position={[0, 0, 0]} distanceVertical={0.75} />

                <pointLight position={[0, 10, 10]} />
                <gridHelper />
                <Environment preset="dawn" background blur={0.7} />
                <OrbitControls makeDefault />
            </Canvas>
        </div>
    );
}

export default App;
