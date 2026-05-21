import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

interface BoxProps {
  color?: string;
}

function RotatingBox(props: BoxProps) {
  // avoid requiring `@types/three` here by using a generic ref type
  const meshRef = useRef<any>(null);
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh {...props} ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={props.color || 'hotpink'} />
    </mesh>
  );
}

export default function Hero3DModel() {
  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <RotatingBox color="#3b82f6" /> {/* Using a blue color */}
    </Canvas>
  );
}
