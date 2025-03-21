import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, PerspectiveCamera, OrbitControls, Float } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function Nebula() {
  const nebulaRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (nebulaRef.current) {
      nebulaRef.current.rotation.x += 0.0005;
      nebulaRef.current.rotation.y += 0.0003;
    }
  });

  return (
    <mesh ref={nebulaRef} position={[0, 0, -50]}>
      <sphereGeometry args={[100, 64, 64]} />
      <meshBasicMaterial
        color="#1a1a2e"
        transparent
        opacity={0.8}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

function FloatingPlanets() {
  const planetsRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (planetsRef.current) {
      planetsRef.current.rotation.y += 0.001;
      planetsRef.current.children.forEach((planet, index) => {
        planet.rotation.y += 0.002 * (index + 1);
      });
    }
  });

  return (
    <group ref={planetsRef}>
      {[0, 1, 2].map((_, index) => (
        <Float
          key={index}
          speed={1.5}
          rotationIntensity={0.5}
          floatIntensity={0.5}
        >
          <mesh position={[
            Math.cos(index * Math.PI * 2 / 3) * 20,
            Math.sin(index * Math.PI * 2 / 3) * 20,
            -30
          ]}>
            <sphereGeometry args={[2 + index, 32, 32]} />
            <meshStandardMaterial
              color={['#4ecdc4', '#45b7d1', '#ff6b6b'][index]}
              metalness={0.3}
              roughness={0.4}
              emissive={['#4ecdc4', '#45b7d1', '#ff6b6b'][index]}
              emissiveIntensity={0.2}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function InteractiveStars() {
  const starsRef = useRef<THREE.Points>(null);
  const count = 3000;

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Distribute stars across a larger area
      positions[i * 3] = (Math.random() - 0.5) * 400;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 400;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 300;

      // Create a mix of white and blue stars
      const isBlueStar = Math.random() > 0.7;
      colors[i * 3] = isBlueStar ? 0.5 + Math.random() * 0.5 : 1;
      colors[i * 3 + 1] = isBlueStar ? 0.5 + Math.random() * 0.5 : 1;
      colors[i * 3 + 2] = isBlueStar ? 1 : 1;
    }

    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (!starsRef.current) return;

    const positions = starsRef.current.geometry.attributes.position.array as Float32Array;
    const time = Date.now() * 0.001;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Create a more dynamic wave-like motion
      positions[i3 + 1] += Math.sin(time + positions[i3] * 0.1) * 0.01;
      positions[i3] += Math.cos(time + positions[i3 + 1] * 0.1) * 0.01;
    }

    starsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes.position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes.color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

export const SpaceBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 50]} />
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Nebula />
        <InteractiveStars />
        <FloatingPlanets />
        <Stars radius={400} depth={200} count={20000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  );
};