
import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, PerspectiveCamera, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

// A simplified school building model
const SchoolModel = (props: any) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime() * 0.2;
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.position.y = Math.sin(time) * 0.05;
      meshRef.current.rotation.y += 0.001;
    }
  });

  // Simple geometry-based school building
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group {...props} dispose={null} scale={0.5}>
        {/* Main Building Body */}
        <mesh
          ref={meshRef}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[3, 1.5, 2]} />
          <meshStandardMaterial color="#f5f5f5" />
        </mesh>
        
        {/* Roof */}
        <mesh position={[0, 1, 0]} castShadow>
          <coneGeometry args={[2.2, 1, 4]} />
          <meshStandardMaterial color="#0074cc" />
        </mesh>
        
        {/* Windows Row 1 */}
        <mesh position={[-1, 0.2, 1.01]} castShadow>
          <boxGeometry args={[0.4, 0.4, 0.05]} />
          <meshStandardMaterial color="#48cae4" />
        </mesh>
        
        <mesh position={[0, 0.2, 1.01]} castShadow>
          <boxGeometry args={[0.4, 0.4, 0.05]} />
          <meshStandardMaterial color="#48cae4" />
        </mesh>
        
        <mesh position={[1, 0.2, 1.01]} castShadow>
          <boxGeometry args={[0.4, 0.4, 0.05]} />
          <meshStandardMaterial color="#48cae4" />
        </mesh>
        
        {/* Door */}
        <mesh position={[0, -0.4, 1.01]} castShadow>
          <boxGeometry args={[0.6, 0.7, 0.05]} />
          <meshStandardMaterial color="#e63946" />
        </mesh>
        
        {/* Flag */}
        <mesh position={[1.5, 1.8, 0]} castShadow>
          <boxGeometry args={[0.05, 1, 0.05]} />
          <meshStandardMaterial color="#343a40" />
        </mesh>
        
        <mesh position={[1.75, 1.6, 0]} castShadow>
          <boxGeometry args={[0.5, 0.3, 0.02]} />
          <meshStandardMaterial color="#e63946" />
        </mesh>

        {/* Ground/Campus */}
        <mesh position={[0, -0.8, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial color="#6a994e" />
        </mesh>
      </group>
    </Float>
  );
};

// Main Component
const SchoolModel3D = () => {
  return (
    <div className="h-[400px] md:h-[500px] w-full rounded-xl overflow-hidden shadow-xl">
      <Canvas shadows dpr={[1, 2]}>
        <fog attach="fog" args={['#f5f5f5', 5, 15]} />
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1} 
          castShadow 
          shadow-mapSize-width={1024} 
          shadow-mapSize-height={1024}
        />
        <PerspectiveCamera makeDefault position={[0, 1, 5]} fov={40} />
        <group position={[0, -0.5, 0]}>
          <SchoolModel />
        </group>
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 4}
        />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
};

export default SchoolModel3D;
