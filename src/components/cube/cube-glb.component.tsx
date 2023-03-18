import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function CubeGLB(props: any) {
    const gltf = useLoader(GLTFLoader, '/cube.glb')
    return (
        <primitive object={gltf.scene} {...props} scale={0.5} />
    );
}