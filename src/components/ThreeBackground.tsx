"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleOrbits({ scrollY }: { scrollY: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const orbit1Ref = useRef<THREE.Group>(null);
  const orbit2Ref = useRef<THREE.Group>(null);
  const orbit3Ref = useRef<THREE.Group>(null);

  // Generate coordinate lists for concentric orbits
  const generateRing = (count: number, radius: number) => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + Math.random() * 0.1;
      const x = Math.cos(angle) * radius + (Math.random() - 0.5) * 0.2;
      const y = Math.sin(angle) * radius + (Math.random() - 0.5) * 0.2;
      const z = (Math.random() - 0.5) * 0.5;
      
      arr[i * 3] = x;
      arr[i * 3 + 1] = y;
      arr[i * 3 + 2] = z;
    }
    return arr;
  };

  const ring1 = generateRing(120, 2.5);
  const ring2 = generateRing(200, 4.0);
  const ring3 = generateRing(300, 5.5);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const scrollFactor = scrollY * 0.001; // Scale scroll effect

    // Rotate orbits over time + scroll trigger influence
    if (orbit1Ref.current) {
      orbit1Ref.current.rotation.z = time * 0.05 + scrollFactor * 0.3;
      orbit1Ref.current.rotation.x = Math.sin(time * 0.1) * 0.2;
    }
    if (orbit2Ref.current) {
      orbit2Ref.current.rotation.z = -time * 0.03 - scrollFactor * 0.2;
      orbit2Ref.current.rotation.y = Math.cos(time * 0.08) * 0.25;
    }
    if (orbit3Ref.current) {
      orbit3Ref.current.rotation.z = time * 0.015 + scrollFactor * 0.1;
      orbit3Ref.current.rotation.x = Math.sin(time * 0.05) * 0.15;
    }
  });

  return (
    <group>
      {/* Ring 1 - Inner */}
      <group ref={orbit1Ref}>
        <Points positions={ring1} stride={3}>
          <PointMaterial
            transparent
            color="#3b82f6"
            size={0.06}
            sizeAttenuation={true}
            depthWrite={false}
            opacity={0.6}
            blending={THREE.AdditiveBlending}
          />
        </Points>
      </group>

      {/* Ring 2 - Middle */}
      <group ref={orbit2Ref}>
        <Points positions={ring2} stride={3}>
          <PointMaterial
            transparent
            color="#06b6d4"
            size={0.05}
            sizeAttenuation={true}
            depthWrite={false}
            opacity={0.5}
            blending={THREE.AdditiveBlending}
          />
        </Points>
      </group>

      {/* Ring 3 - Outer */}
      <group ref={orbit3Ref}>
        <Points positions={ring3} stride={3}>
          <PointMaterial
            transparent
            color="#8b5cf6"
            size={0.04}
            sizeAttenuation={true}
            depthWrite={false}
            opacity={0.4}
            blending={THREE.AdditiveBlending}
          />
        </Points>
      </group>
    </group>
  );
}

export default function ThreeBackground({ scrollY = 0 }: { scrollY?: number }) {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-1 overflow-hidden opacity-45">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <ParticleOrbits scrollY={scrollY} />
      </Canvas>
    </div>
  );
}
