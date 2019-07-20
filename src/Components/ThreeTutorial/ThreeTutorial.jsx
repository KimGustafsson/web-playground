import React, {Component} from 'react';
import * as THREE from 'three';

class ThreeTutorial extends Component {
  render() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1000 / 800, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      antialias: true
    });
    renderer.setSize(1000, 800);

    let geometry = new THREE.BoxGeometry(1, 1, 1);
    let material = new THREE.MeshBasicMaterial({
      color: 0xff0051,
    });
    let cube = new THREE.Mesh(geometry, material);

    scene.add(cube);
    camera.position.z = 5;
    renderer.render(scene, camera);
    return (
      <div ref={(nodeElement) => {nodeElement && nodeElement.appendChild(renderer.domElement)}}/>
    );
  }
}

export default ThreeTutorial;