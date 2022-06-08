import { Canvas, GroupProps, MeshProps, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";

const MacBook = (props: MeshProps) => {
  const { scene } = useGLTF("/models/macbook.gltf");
  return <primitive object={scene} {...props} />;
};

const Book = (props: MeshProps) => {
  const { scene } = useGLTF("/models/book.gltf");
  return <primitive object={scene} {...props} />;
};

const Dog = (props: MeshProps) => {
  const { scene } = useGLTF("/models/dog.gltf");
  return <primitive object={scene} {...props} />;
};

const Models = () => {
  const group = useRef<GroupProps>();

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y -= 0.01;
    }
  });

  return (
    <group ref={group}>
      <MacBook receiveShadow scale={1.4} position={[0, -2.3, 0]} />
      <Book scale={4} position={[2, 0.5, 0]} rotation={[1, 0, 0]} />
      <Dog castShadow scale={1.4} position={[-1.6, -1.5, 0]} />
    </group>
  );
};

export default function Scene() {
  return (
    <Canvas shadows>
      <ambientLight />
      <pointLight castShadow position={[10, 10, 10]} />
      <OrbitControls />
      <Models />
    </Canvas>
  );
}
