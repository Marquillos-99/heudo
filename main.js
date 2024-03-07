import * as THREE from 'three';
import {OrbitControls} from 
'three/examples/jsm/controls/OrbitControls';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const orbitControls = 
new OrbitControls(camera, renderer.domElement);

camera.position.set(2, 2, 5);
orbitControls.update();

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

//base
const baseGeometry = new THREE.CylinderGeometry(0.5,0.5,0.2,32);
const material = new THREE.MeshBasicMaterial({color: 0x00FF00});
const box = new THREE.Mesh(baseGeometry, material);
scene.add(box);

//articulacion1

const articulacion1Geometry = new THREE.BoxGeometry(1,0.2,0.2);
const articulacion1Material = new THREE.MeshBasicMaterial({color: 0x0000FF});
const articulacion1 = new THREE.Mesh(articulacion1Geometry, articulacion1Material);
scene.add(articulacion1);

articulacion1.position.set(0.3,0.5,0)
articulacion1.rotation.z = Math.PI/3


//articulacion2

const articulacion2Geometry = new THREE.BoxGeometry(0.8,0.2,0.2);
const articulacion2Material = new THREE.MeshBasicMaterial({color: 0xFFA500});
const articulacion2 = new THREE.Mesh(articulacion2Geometry, articulacion2Material);
scene.add(articulacion2);

articulacion2.position.set(0.9,0.9,0)




function animate(time) {
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);