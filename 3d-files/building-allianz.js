import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, logarithmicDepthBuffer: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('building-allianz').appendChild(renderer.domElement);

const loader = new GLTFLoader();

loader.load( './assets/3d-models/building-allianz.glb', function ( gltf ) {

    gltf.scene.position.set(1.5, -4.25, -4.7);
    gltf.scene.scale.set(0.05, 0.05, 0.05);
    gltf.scene.rotation.set(0, 5.3, 0);

    let ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);
	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

camera.position.z = 0;
camera.position.x = 0;
camera.position.y = 0;
camera.far = 1000000;
camera.updateProjectionMatrix();

// Variable pour le temps écoulé
let elapsedTime = 0;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();