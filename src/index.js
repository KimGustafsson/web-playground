import * as THREE from 'three';
import './style.css';

// Register a service worker to make the app work offline
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationerror => {
      console.log('SW registration failed: ', registrationerror);
    });
  });
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);

let geometry = new THREE.BoxGeometry(1, 1, 1);
let material = new THREE.MeshBasicMaterial({
  color: 0xff0051,
});
let cube = new THREE.Mesh(geometry, material);

scene.add(cube);
camera.position.z = 5;
renderer.render(scene, camera);

document.body.appendChild(renderer.domElement);