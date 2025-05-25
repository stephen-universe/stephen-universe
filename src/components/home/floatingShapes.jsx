import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import FooterQuote from "../home/footerQuote";

export default function ThreeShape() {
  const mountRef = useRef(null);
  const boxRef = useRef(null);

  const handleMouseMove = (e) => {
    const box = boxRef.current;
    if (box) {
      const rect = box.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      box.style.backgroundPosition = `${x}% ${y}%`;
    }
  };

  useEffect(() => {
    const scene = new THREE.Scene();
    let width = mountRef.current.clientWidth;
    let height = mountRef.current.clientHeight;

    const handleResize = () => {
      width = mountRef.current.clientWidth;
      height = mountRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    scene.fog = new THREE.Fog(0x0b001a, 10, 30);

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
    camera.position.z = 14;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.autoClear = false; // ← add this line
    renderer.setClearColor(0x000000, 0); // ← add this line for transparent background
    mountRef.current.appendChild(renderer.domElement);

    const gemColors = [
      "#FF89BB",
      "#9B5DE5",
      "#F15BB5",
      "#00BBF9",
      "#00F5D4",
      "#FEE440",
      "#F3722C",
      "#6A4C93",
    ];

    const geometries = [
      new THREE.IcosahedronGeometry(1, 1),
      new THREE.OctahedronGeometry(1, 1),
      new THREE.DodecahedronGeometry(1, 0),
      new THREE.TetrahedronGeometry(1, 0),
    ];

    const ambient = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambient);

    const directional = new THREE.DirectionalLight(0xffffff, 0.9);
    directional.position.set(6, 10, 10);
    scene.add(directional);

    const rimLight = new THREE.PointLight(0xffccff, 0.4);
    rimLight.position.set(-4, -6, 6);
    scene.add(rimLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.4);
    fillLight.position.set(-6, -5, 8);
    scene.add(fillLight);

    const gems = [];

    const positions = [
      [-6, 8, -3.2],
      [7.6, 4.8, -4],
      [-8, -9.6, 4],
      [-6.4, 8.8, 6.4],
      [-8, -5.6, 4.8],
      [-11.2, 6.4, -7.2],
      [-2.4, -4, -4.8],
      [12, -1.6, -5.6],
      [8.8, 1.6, 8],
      [10.4, -8, 6.4],
      [4.8, -8.8, -4.8],
      [-9.6, 4, -1.6],
    ];

    for (let i = 0; i < positions.length; i++) {
      const scaleFactor = (Math.random() * 0.4 + 0.6) * 1.65 * 1.25; // 25% larger
      const geo =
        geometries[Math.floor(Math.random() * geometries.length)].clone();
      geo.scale(scaleFactor, scaleFactor, scaleFactor);

      const color = gemColors[Math.floor(Math.random() * gemColors.length)];

      const mat = new THREE.MeshPhysicalMaterial({
        color,
        roughness: 0.1,
        metalness: 0.6,
        reflectivity: 0.9,
        clearcoat: 1,
        clearcoatRoughness: 0.05,
        transmission: 0.35,
        thickness: 1.2,
        flatShading: true,
      });

      const mesh = new THREE.Mesh(geo, mat);
      const [x, y, z] = positions[i];
      mesh.position.set(x, y, z);

      scene.add(mesh);
      gems.push({ mesh, speed: Math.random() * 0.4 + 0.2 });

      const spriteMat = new THREE.SpriteMaterial({
        map: new THREE.TextureLoader().load(
          "https://threejs.org/examples/textures/lensflare/lensflare0.png"
        ),
        color: color,
        transparent: true,
        opacity: 0,
        depthWrite: false,
      });

      const sprite = new THREE.Sprite(spriteMat);
      sprite.scale.set(2, 2, 1);
      sprite.position.copy(mesh.position);
      sprite.position.z -= 0.3;
      scene.add(sprite);
    }

    const sparkleCount = 400;
    const sparkleGeometry = new THREE.BufferGeometry();
    const sparklePositions = new Float32Array(sparkleCount * 3);

    for (let i = 0; i < sparkleCount * 3; i++) {
      sparklePositions[i] = (Math.random() - 0.5) * 25;
    }

    sparkleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(sparklePositions, 3)
    );

    const sparkleMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.07,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const sparkles = new THREE.Points(sparkleGeometry, sparkleMaterial);
    scene.add(sparkles);

    // Mouse interaction
    let mouse = { x: 0, y: 0 };

    const onMouseMove = (e) => {
      const rect = mountRef.current.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };

    window.addEventListener("mousemove", onMouseMove);

    const animate = () => {
      renderer.clear(); // ← clear previous frame

      gems.forEach(({ mesh, speed }, i) => {
        mesh.rotation.x += 0.004 * speed;
        mesh.rotation.y += 0.005 * speed;
        mesh.position.x += Math.sin(Date.now() * 0.001 + i) * 0.002 * speed;
        mesh.position.y += Math.cos(Date.now() * 0.0012 + i) * 0.002 * speed;
        mesh.position.z += Math.sin(Date.now() * 0.0015 + i) * 0.001 * speed;
      });

      camera.position.x += (mouse.x * 2 - camera.position.x) * 0.02;
      camera.position.y += (mouse.y * 2 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      sparkles.rotation.y += 0.0005;
      sparkles.rotation.x += 0.0003;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);

      if (mountRef.current && renderer) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        ref={mountRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 1,
        }}
      />
      <div
        ref={boxRef}
        onMouseMove={handleMouseMove}
        className="quote-background"
      >
        <FooterQuote />
      </div>
    </div>
  );
}
