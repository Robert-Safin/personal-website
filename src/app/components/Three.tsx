"use client";
import { useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial  } from "@react-three/drei";
//@ts-ignore
import * as random from "maath/random/dist/maath-random.esm";





export default function Three() {
  const [scrollSpeed, setScrollSpeed] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setScrollSpeed(1 + scrollPosition * 2);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 1] }}
      style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: -100 }}
    >
      <Stars scrollSpeed={scrollSpeed} />
      <Stars2 scrollSpeed={scrollSpeed} />
    </Canvas>
  );
}




function Stars(props: any) {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(1500), { radius: 1.5 })
  );

  useFrame((state, delta) => {
    //@ts-ignore
    ref.current!.rotation.x -= delta / 10 * props.scrollSpeed
    //@ts-ignore
    ref.current!.rotation.y -= delta / 15 * props.scrollSpeed
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent={true}
          color='#000000'
          size={.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}


function Stars2(props: any) {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(300), { radius: 1.5 })
  );

  useFrame((state, delta) => {
    //@ts-ignore
    ref.current!.rotation.x -= delta / 10
    //@ts-ignore
    ref.current!.rotation.y -= delta / 15
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent={true}
          color='#222222'
          size={0.1}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
