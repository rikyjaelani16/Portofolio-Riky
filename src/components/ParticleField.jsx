import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles({ count = 2000 }) {
  const mesh = useRef();
  const light = useRef();

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    const colorPalette = [
      new THREE.Color('#8b5cf6'),
      new THREE.Color('#06b6d4'),
      new THREE.Color('#f43f5e'),
      new THREE.Color('#6366f1'),
      new THREE.Color('#a855f7'),
    ];

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 50;
      positions[i3 + 1] = (Math.random() - 0.5) * 50;
      positions[i3 + 2] = (Math.random() - 0.5) * 50;

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      sizes[i] = Math.random() * 3 + 0.5;
    }

    return { positions, colors, sizes };
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.x = time * 0.02;
      mesh.current.rotation.y = time * 0.03;

      const positions = mesh.current.geometry.attributes.position.array;
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += Math.sin(time + positions[i3]) * 0.002;
      }
      mesh.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function FloatingOrb({ position, color, speed = 1, scale = 1 }) {
  const mesh = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.position.y = position[1] + Math.sin(time * speed) * 1.5;
      mesh.current.position.x = position[0] + Math.cos(time * speed * 0.7) * 0.8;
      mesh.current.rotation.x = time * 0.3;
      mesh.current.rotation.z = time * 0.2;
    }
  });

  return (
    <mesh ref={mesh} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.3}
        emissive={color}
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

function TorusKnot() {
  const mesh = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.x = time * 0.1;
      mesh.current.rotation.y = time * 0.15;
    }
  });

  return (
    <mesh ref={mesh} position={[6, -2, -8]} scale={1.2}>
      <torusKnotGeometry args={[1, 0.3, 128, 16]} />
      <meshStandardMaterial
        color="#8b5cf6"
        wireframe
        transparent
        opacity={0.15}
        emissive="#8b5cf6"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

export default function ParticleField() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      pointerEvents: 'none',
    }}>
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#8b5cf6" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#06b6d4" />

        <Particles count={1500} />

        <FloatingOrb position={[-8, 3, -5]} color="#8b5cf6" speed={0.8} scale={1.5} />
        <FloatingOrb position={[7, -3, -7]} color="#06b6d4" speed={0.6} scale={1.2} />
        <FloatingOrb position={[-4, -5, -3]} color="#f43f5e" speed={1} scale={0.8} />
        <FloatingOrb position={[5, 5, -10]} color="#6366f1" speed={0.5} scale={2} />

        <TorusKnot />
      </Canvas>
    </div>
  );
}
