import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

function Page1() {
  const mountRef = useRef(null);
  const nav1 = useRef(null)
  const nav2 = useRef(null)
  const magnetArray = [nav1 , nav2]
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
     magnetArray.forEach((elem)=>{
        const xTo = gsap.quickTo(elem.current, "x", {duration: 1, ease: "elastic.out(1, 0.3)"})
        const yTo = gsap.quickTo(elem.current, "y", {duration: 1, ease: "elastic.out(1, 0.3)"})
    
        elem.current.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e;
            const {height, width, left, top} = elem.current.getBoundingClientRect();
            const x = clientX - (left + width/2)
            const y = clientY - (top + height/2)
            xTo(x);
            yTo(y)
        })
        elem.current.addEventListener("mouseleave", (e) => {
            xTo(0);
            yTo(0)
        })
     })

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Load texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('/bg.png'); // Adjust path as needed

    // Shader material with mouse-responsive distortion
    const shaderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: texture },
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uTexture;
        uniform float uTime;
        uniform vec2 uMouse;
        varying vec2 vUv;

        void main() {
          vec2 uv = vUv;
          float dist = distance(uv, uMouse);
          uv.y += sin(uv.x * 10.0 + uTime) * 0.05 * (1.0 - dist * 2.0); // Reduced speed by changing 0.1 to 0.05
          gl_FragColor = texture2D(uTexture, uv);
        }
      `,
    });

    // Plane geometry with 100vw width and height adjusted for aspect ratio
    const geometry = new THREE.PlaneGeometry(20, 18 * (height / width)); // 10 represents 100vw width in Three.js units
    const plane = new THREE.Mesh(geometry, shaderMaterial);
    scene.add(plane);

    camera.position.z = 5;

    // Animation loop
    const animate = function () {
      requestAnimationFrame(animate);
      shaderMaterial.uniforms.uTime.value += 0.01; // Reduced animation speed
      shaderMaterial.uniforms.uMouse.value = new THREE.Vector2(mouse.current.x, mouse.current.y);
      renderer.render(scene, camera);
    };
    animate();

    // Update mouse position on mouse move
    const onMouseMove = (e) => {
      mouse.current.x = e.clientX / width;
      mouse.current.y = 1 - e.clientY / height; // Flip Y-axis for shader coordinates
    };

    window.addEventListener('mousemove', onMouseMove);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);


  return (
    <div className="page1 h-screen w-screen bg-black relative">
      {/* Canvas for shader */}
      <div ref={mountRef} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 10 }} />

      {/* Nav and other content */}
      <div className="nav z-20 px-10 flex flex-row justify-between items-center h-[9vh] w-full fixed top-0">
        <p></p>
        <p ref={nav1} className="head text-[16px] font-normal text-white font-['PP Neue Montreal'] italic p-5 m-3">lm</p>
        <p ref={nav2} className='text-white text-[12px]'>FR — <span className='text-sm'>©2024</span></p>
      </div>
      <div className="pg-1-info w-full h-full pointer-events-none absolute z-50 flex justify-center items-center top-0 left-0 flex-col">
        <h1 className='text-[32px] italic font-thin text-white w-[12vw] text-center tracking-tighter leading-[25px] block'>leopold manguette</h1>
        <p className='text-[16px] normal font-normal text-white block relative top-[20vh]'>creative developer</p>
      </div>
    </div>
  );
}

export default Page1;
