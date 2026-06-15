"use client";
import { useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Text, Billboard } from "@react-three/drei";
//@ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

export default function Three() {
  // Current scroll-driven velocity. Mutated imperatively so it never triggers
  // re-renders; the useFrame loops read .current every frame.
  const velocity = useRef(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const delta = window.scrollY - lastScrollY.current;
      lastScrollY.current = window.scrollY;
      // Add the scroll delta into the velocity so fast scrolling spins faster.
      velocity.current += delta * 0.00005;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -100,
      }}
    >
      <Stars velocity={velocity} />
      <Stars2 velocity={velocity} />
      <FloatingTexts velocity={velocity} />
    </Canvas>
  );
}

function FloatingTexts(props: any) {
  const ref = useRef<any>(null);

  useFrame(() => {
    const v = props.velocity.current;
    // Same rotation as the starfield so the labels orbit along with it.
    ref.current!.rotation.x -= v;
    ref.current!.rotation.y -= v * 0.66;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <group ref={ref}>
        <Billboard position={[-0.5, 0.4, 0.2]}>
          <Text
            fontSize={0.06}
            color="#393939"
            anchorX="center"
            anchorY="middle"
            textAlign="center"
          >
            {"vim btw"}
          </Text>
        </Billboard>

        <Billboard position={[0.5, -0.4, -0.2]}>
          <Text
            fontSize={0.06}
            color="#525252"
            anchorX="center"
            anchorY="middle"
            textAlign="center"
          >
            {"arch btw"}
          </Text>
        </Billboard>
      </group>
    </group>
  );
}

function Stars(props: any) {
  const ref = useRef<any>(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(300), { radius: 1.5 }),
  );

  useFrame((state, delta) => {
    const v = props.velocity.current;
    //@ts-ignore
    ref.current!.rotation.x -= v;
    //@ts-ignore
    ref.current!.rotation.y -= v * 0.66;
    // Exponential decay -> lingering coast that settles back to fully static.
    props.velocity.current = v * Math.pow(0.955, delta * 60);
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <group ref={ref}>
        <Points positions={sphere} stride={3} frustumCulled={false}>
          <PointMaterial
            transparent={true}
            color="#000000"
            size={0.1}
            sizeAttenuation={true}
            depthWrite={false}
          />
        </Points>
      </group>
    </group>
  );
}

function Stars2(props: any) {
  const ref = useRef<any>(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(300), { radius: 1.5 }),
  );

  useFrame(() => {
    const v = props.velocity.current;
    //@ts-ignore
    ref.current!.rotation.x -= v;
    //@ts-ignore
    ref.current!.rotation.y -= v * 0.66;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <group ref={ref}>
        <Points positions={sphere} stride={3} frustumCulled={false}>
          <PointMaterial
            transparent={true}
            color="#222222"
            size={0.1}
            sizeAttenuation={true}
            depthWrite={false}
          />
        </Points>
      </group>
    </group>
  );
}
