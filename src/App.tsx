import "./App.css";
import { Canvas } from "react-three-fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { FenceType } from "./components/fence/fence-type.enum";
import { FenceOnTriangularPrism } from "./components/fence-on-triangular-prism/fence-on-triangular-prism.component";
import { Button } from "./components/button/button.component";
import { useState } from "react";

function App() {

    const [type, setType] = useState<FenceType>(FenceType.DEFAULT);

    function onTypeClicked(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, fenceType: FenceType) {
        event.preventDefault();

        setType(fenceType);
    }


    return (
        <div className="h-screen w-full">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <FenceOnTriangularPrism
                    position={[0, 0, 0]}
                    fenceType={type}
                />

                {/* <pointLight position={[0, 10, 10]} /> */}
                <gridHelper />
                <Environment preset="dawn" background blur={0.7} />
                <OrbitControls makeDefault />
            </Canvas>

            <div className="fixed z-50 left-2 bottom-2 flex gap-2">
                <Button text="Default" onClick={(event) => onTypeClicked(event, FenceType.DEFAULT)} />
                <Button text="Type 1" onClick={(event) => onTypeClicked(event, FenceType.TYPE_1)} />
                <Button text="Type 2" onClick={(event) => onTypeClicked(event, FenceType.TYPE_2)} />
                <Button text="Type 3" onClick={(event) => onTypeClicked(event, FenceType.TYPE_3)} />
            </div>
        </div>
    );
}

export default App;
