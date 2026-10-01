import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface Hero3DCanvasProps {
  className?: string;
}

export const Hero3DCanvas: React.FC<Hero3DCanvasProps> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 6.2;

    // Renderer
    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.1;
      container.appendChild(renderer.domElement);
    } catch {
      // WebGL not supported or failed
      return;
    }

    // Lights
    // Key Light - Warm Champagne Gold
    const keyLight = new THREE.DirectionalLight(0xd6b779, 3.2);
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);

    // Fill Light - Electric Blue
    const fillLight = new THREE.DirectionalLight(0x7c9dff, 2.4);
    fillLight.position.set(-5, -3, -2);
    scene.add(fillLight);

    // Rim Light - Cool Soft White
    const rimLight = new THREE.PointLight(0xf5f5f2, 2.0, 15);
    rimLight.position.set(0, 4, -4);
    scene.add(rimLight);

    // Ambient Light
    const ambientLight = new THREE.AmbientLight(0x11141c, 1.2);
    scene.add(ambientLight);

    // Master Group for 3D Centerpiece
    const centerpieceGroup = new THREE.Group();
    scene.add(centerpieceGroup);

    // 1. Core Faceted Jewel (Icosahedron)
    const coreGeo = new THREE.IcosahedronGeometry(1.35, 1);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x151922,
      emissive: 0x1d1710,
      roughness: 0.18,
      metalness: 0.88,
      reflectivity: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: false,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    centerpieceGroup.add(coreMesh);

    // 2. Wireframe Lattice Overlay for High-Tech Luxury
    const wireGeo = new THREE.IcosahedronGeometry(1.42, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xd6b779,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    centerpieceGroup.add(wireMesh);

    // 3. Orbiting Gyroscopic Ring 1 (Gold Torus)
    const ring1Geo = new THREE.TorusGeometry(2.1, 0.025, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0xd6b779,
      roughness: 0.25,
      metalness: 0.9,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    centerpieceGroup.add(ring1);

    // 4. Orbiting Gyroscopic Ring 2 (Electric Blue Torus)
    const ring2Geo = new THREE.TorusGeometry(2.45, 0.02, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0x7c9dff,
      roughness: 0.3,
      metalness: 0.85,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 3;
    centerpieceGroup.add(ring2);

    // 5. Orbiting Spherical Nodes on Rings
    const nodeGeo = new THREE.SphereGeometry(0.08, 16, 16);
    const nodeMatGold = new THREE.MeshBasicMaterial({ color: 0xffe7b3 });
    const nodeMatBlue = new THREE.MeshBasicMaterial({ color: 0x9bb5ff });

    const node1 = new THREE.Mesh(nodeGeo, nodeMatGold);
    const node2 = new THREE.Mesh(nodeGeo, nodeMatBlue);
    ring1.add(node1);
    ring2.add(node2);
    node1.position.set(2.1, 0, 0);
    node2.position.set(0, 2.45, 0);

    // 6. Ambient Floating Particles (Gold & Electric Blue Stardust)
    const particleCount = 95;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const goldColor = new THREE.Color(0xd6b779);
    const blueColor = new THREE.Color(0x7c9dff);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.8 + Math.random() * 2.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);

      const isGold = Math.random() > 0.45;
      const c = isGold ? goldColor : blueColor;
      particleColors[i * 3] = c.r;
      particleColors[i * 3 + 1] = c.g;
      particleColors[i * 3 + 2] = c.b;
    }

    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    particlesGeo.setAttribute(
      "color",
      new THREE.BufferAttribute(particleColors, 3)
    );

    const particlesMat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particleSystem);

    // Mouse Tracking Parallax
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      mouseRef.current.targetX = (clientX / rect.width - 0.5) * 2;
      mouseRef.current.targetY = -(clientY / rect.height - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Resize Handler
    const handleResize = () => {
      if (!container || !renderer) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Damped mouse movement
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      const speedMultiplier = prefersReducedMotion ? 0.2 : 1.0;

      // Centerpiece rotations
      coreMesh.rotation.y += 0.25 * delta * speedMultiplier;
      coreMesh.rotation.x += 0.15 * delta * speedMultiplier;

      wireMesh.rotation.y -= 0.18 * delta * speedMultiplier;
      wireMesh.rotation.z += 0.12 * delta * speedMultiplier;

      ring1.rotation.z += 0.45 * delta * speedMultiplier;
      ring2.rotation.z -= 0.35 * delta * speedMultiplier;

      particleSystem.rotation.y = elapsed * 0.05 * speedMultiplier;
      particleSystem.rotation.x = elapsed * 0.02 * speedMultiplier;

      // Floating gentle bobbing
      centerpieceGroup.position.y = Math.sin(elapsed * 1.2) * 0.12;

      // Subtle parallax tilt from mouse
      centerpieceGroup.rotation.y = mouseRef.current.x * 0.4;
      centerpieceGroup.rotation.x = -mouseRef.current.y * 0.4;

      if (renderer) {
        renderer.render(scene, camera);
      }
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      if (renderer) {
        renderer.dispose();
        if (renderer.domElement && renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
      }

      coreGeo.dispose();
      coreMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      nodeGeo.dispose();
      nodeMatGold.dispose();
      nodeMatBlue.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[380px] lg:min-h-[500px] flex items-center justify-center select-none ${className}`}
      aria-label="Interactive 3D Geometric Centerpiece"
      role="img"
    >
      {/* Background ambient lighting halo behind 3D object */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full pointer-events-none blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(214,183,121,0.4) 0%, rgba(124,157,255,0.2) 50%, transparent 70%)",
        }}
      />
    </div>
  );
};
