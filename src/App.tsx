import "./App.css";
import { Canvas } from "react-three-fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Cube } from "./components/cube/cube.component";

function App() {

    return (
        <div className="h-screen w-full">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
            >
                <Cube position={[0, 0, 0]} />


                <pointLight position={[0, 10, 10]} />
                <gridHelper />
                <Environment preset="dawn" background blur={0.7} />
                <OrbitControls makeDefault />
            </Canvas>
        </div>
    );
}

export default App;
