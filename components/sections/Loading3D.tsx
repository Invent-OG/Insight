"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import earthTexture from "@/public/assets/earthmap1k.jpg"; // Next.js StaticImageData

const RealisticEarthLoader = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 12;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Earth
    const geometry = new THREE.SphereGeometry(7, 64, 64);
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(earthTexture.src);

    const material = new THREE.MeshPhongMaterial({
      map: texture,
    });
    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    // Lights
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(20, 20, 20);
    scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0x333333);
    scene.add(ambientLight);

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      earth.rotation.y += 0.002;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      mount.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-screen bg-gradient-to-br from-neutral-950 via-slate-100 to-red-600"
    />
  );
};

export default RealisticEarthLoader;
