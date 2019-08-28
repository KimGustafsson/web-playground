import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);

let geometry = new THREE.BoxGeometry(1, 1, 1);
let material = new THREE.MeshStandardMaterial({
  color: 0xff0051,
});
let cube = new THREE.Mesh(geometry, material);
let ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
let pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(25, 50, 25);
let wireframeCube;

scene.add(pointLight);
scene.add(ambientLight);
scene.add(cube);
wireframeCube = createSecondBox();
scene.add(wireframeCube);
camera.position.z = 5;

function createSecondBox() {
  let geometry = new THREE.BoxGeometry(3, 3, 3);
  let material = new THREE.MeshBasicMaterial({
    color: "#dadada",
    wireframe: true
  });
  return new THREE.Mesh(geometry, material);
}

function animate() {
  requestAnimationFrame(animate)
  cube.rotation.x += 0.04;
  cube.rotation.y += 0.04;
  wireframeCube.rotation.x += 0.01;
  wireframeCube.rotation.y += 0.01;
  renderer.render(scene, camera)
}

window.addEventListener('resize', () => {
  let width = window.innerWidth;
  let height = window.innerHeight;

  renderer.setSize(width, height);
  camera.aspect = width / height;
  scene.updateWorldMatrix();
  camera.updateProjectionMatrix();
})

document.body.appendChild( renderer.domElement );

animate();