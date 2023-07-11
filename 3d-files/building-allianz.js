import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, logarithmicDepthBuffer: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('building-allianz').appendChild(renderer.domElement);

const loader = new GLTFLoader();

loader.load( './assets/3d-models/building-allianz.glb', function ( gltf ) {

    gltf.scene.position.set(1.5, -4.25, 0.3);
    gltf.scene.scale.set(0.05, 0.05, 0.05);
    gltf.scene.rotation.set(0, 5.25, 0);

    let ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);
	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

camera.position.z = 4.7;
camera.position.x = -1;
camera.far = 1000000;
camera.updateProjectionMatrix();


function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// Position et rotation cibles de la caméra
let targetPosition = new THREE.Vector3(0, 0, 0);
let targetRotationY = Math.PI / 2; // Rotation sur l'axe Y (90 degrés)

// Distance Z cible et vitesse de déplacement
let targetDistanceZ = 0.0006;
let distanceSpeed = 0.0002;

// Animation de la caméra
function animateCamera() {
    // Calcul de la distance actuelle sur l'axe Z
    let currentDistanceZ = Math.abs(camera.position.z - targetPosition.z);

    // Animation du déplacement sur l'axe Z
    if (currentDistanceZ > targetDistanceZ) {
        camera.position.z -= distanceSpeed;
    }

    // Animation de la rotation sur l'axe Y
    if (camera.rotation.y < targetRotationY) {
        camera.rotation.y -= 0.0002; // Ajustez la vitesse de rotation
    }

    // Vérifie si les animations sont en cours
    if (currentDistanceZ > targetDistanceZ || camera.rotation.y < targetRotationY) {
        requestAnimationFrame(animateCamera);
    }
}

animateCamera();
animate();