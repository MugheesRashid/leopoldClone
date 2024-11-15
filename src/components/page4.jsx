import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function Page4() {
    const mountRef = useRef(null);

    useEffect(() => {
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(width, height);
        mountRef.current.appendChild(renderer.domElement);

        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load('/bg.png'); // Adjust path as needed

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

        const geometry = new THREE.PlaneGeometry(10, 10 * (height / width)); // 10 represents 100vw width in Three.js units
        const plane = new THREE.Mesh(geometry, shaderMaterial);
        scene.add(plane);

        camera.position.z = 4;

        // Animation loop
        const animate = function () {
            requestAnimationFrame(animate);
            shaderMaterial.uniforms.uTime.value += 0.03; // Reduced animation speed
            renderer.render(scene, camera);
        };
        animate();

        // Cleanup function to remove the canvas when the component unmounts
        return () => {
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div className="w-screen h-screen bg-black flex items-center justify-center relative">
            <div ref={mountRef} style={{ width: '70%', height: '80%', position: 'absolute', top: '50%', left: "50%", transform: "translate(-50%, -50%)", zIndex: 10 }} />
            <div className="last w-[40%] relative h-[34%] border-lg z-[999]">
                <img className='gif absolute top-[-13%] left-[-6%] w-[13%]' src="https://leopoldmanguette.com/_nuxt/baby-poldo2.BiNGnQya.png" alt="" />
                <div className="absolute p-8 para text-white/60">
                    <p className='mb-4 text-sm'> Hello, je suis  <span className="text-white italic relative">Léopold Manguette <span className="absolute rounded-lg span h-[22vh] w-[10vw] bg-[url('https://leopoldmanguette.com/_nuxt/gif_sunglasses.p3t8zvCi.gif')] bg-center bg-cover bg-no-repeat top-[-9vh] left-0"></span></span>, développeur de 25 ans.</p>
                    <p className='mb-4 text-sm'>Développer des solutions front est un moyen pour moi de combiner plusieurs disciplines qui me tiennent à coeur : penser des
                        <span className='text-white relative'> expériences optimales <span className="absolute rounded-lg span h-[22vh] w-[10vw] bg-[url('https://leopoldmanguette.com/_nuxt/gif_bathinking.DeRjx8D2.gif')] bg-center bg-cover bg-no-repeat top-[-9vh] left-0"></span></span>,<span className='text-white relative'>instaurer un dialogue avec l'utilisateur<span className="absolute rounded-lg span h-[22vh] w-[10vw] bg-[url('https://leopoldmanguette.com/_nuxt/gif_quiche.DgbxTE3B.gif')] bg-center bg-cover bg-no-repeat top-[-9vh] left-0"></span></span> et proposer des sites innovants et performants
                    </p>
                    <p className='text-sm'>
                        À côté, je me nourris du <span className='text-white relative'>crossfit<span className="absolute rounded-lg span h-[22vh] w-[10vw] bg-[url('https://leopoldmanguette.com/_nuxt/gif_brad.DPfe5IZi.gif')] bg-center bg-cover bg-no-repeat top-[-9vh] left-0"></span></span> et du, <span className='text-white relative'>cinéma<span className="absolute rounded-lg span h-[22vh] w-[10vw] bg-[url('https://leopoldmanguette.com/_nuxt/gif_cinema.DNGMuaYS.gif')] bg-center bg-cover bg-no-repeat top-[-9vh] left-0"></span></span> <span className='italic'>It's shooowtime!</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Page4;
