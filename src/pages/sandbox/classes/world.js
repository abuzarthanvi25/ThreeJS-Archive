import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"

export default class World {
    constructor({canvasRef}) {
        this.ref = canvasRef;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ canvas: this.ref.current, antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.pixelRatio = window.devicePixelRatio;
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
        
        // RESIZE
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });

        this.animate();
    }

    animate = () => {
        this.controls.update();
        this.renderer.render(this.scene, this.camera);

        requestAnimationFrame(this.animate)
    }

    init = async () => {
        this.camera.position.z = 5;

        // CUBE
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x2E8B57 }); // Seafoam teal color
        const cube = new THREE.Mesh(geometry, material);
        cube.scale.set(3, 3, 3)
        this.scene.add(cube);

    }
    

    dispose = () => {
        this.renderer.dispose();
    }
}