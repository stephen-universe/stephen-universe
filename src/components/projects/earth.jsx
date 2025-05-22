import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function EarthBackground() {
  const containerRef = useRef(null);
  const sphereRef = useRef(null);
  const animationRef = useRef();

  useEffect(() => {
    const container = containerRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 2.8;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 3.5);
    directionalLight.position.set(1, 0, -0.25);
    scene.add(ambientLight, directionalLight);

    const loader = new THREE.TextureLoader();
    loader.load('/assets/color.jpg', (color) => {
      loader.load('/assets/normal.png', (normal) => {
        loader.load('/assets/occlusion.jpg', (aoMap) => {
          const geometry = new THREE.SphereGeometry(1, 64, 64);
          const material = new THREE.MeshStandardMaterial({
            map: color,
            normalMap: normal,
            aoMap: aoMap
          });

          const sphere = new THREE.Mesh(geometry, material);
          sphere.scale.set(1.5, 1.5, 1.5);
          scene.add(sphere);
          sphereRef.current = sphere;

          animate();
        });
      });
    });

    const animate = () => {
      if (sphereRef.current) {
        sphereRef.current.rotation.y += 0.0015;
      }
      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationRef.current);
      if (container) container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
}
