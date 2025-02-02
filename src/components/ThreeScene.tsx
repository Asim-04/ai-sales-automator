import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useScroll } from 'framer-motion';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { scrollYProgress } = useScroll();

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Rotate based on scroll position
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
    
    // Scale based on scroll position
    const scale = 1 + scrollYProgress.get() * 0.5;
    meshRef.current.scale.set(scale, scale, scale);
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]}>
      <MeshDistortMaterial
        color="#8B5CF6"
        attach="material"
        distort={0.5}
        speed={2}
      />
    </Sphere>
  );
};

const ThreeScene = () => {
  return (
    <div className="absolute inset-0 -z-10 opacity-60">
      <Canvas
        camera={{ position: [0, 0, 5] }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
};

export default ThreeScene;