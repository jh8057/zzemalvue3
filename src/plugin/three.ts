import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default class Experience {
    canvas: any;

    constructor(canvas: any) {
        // if(Experience.instance){
        //     return Experience.instance
        // }
        // Experience.instance = this

        this.canvas = canvas;

        //basic setting
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        //make cube
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x44a88 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        scene.background = new THREE.Color(0xffffff);

        camera.position.z = 5;

        function animate() {
            requestAnimationFrame(animate);

            //animation
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        }

        animate();
    }
}

// export default class Experience {
//     canvas: any;

//     constructor(canvas: any) {
//         // if(Experience.instance){
//         //     return Experience.instance
//         // }
//         // Experience.instance = this

//         this.canvas = canvas;

//         //basic setting
//         const scene = new THREE.Scene();
//         const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//         const renderer = new THREE.WebGLRenderer({ antialias: true });
//         renderer.setPixelRatio(window.devicePixelRatio);
//         renderer.setSize(window.innerWidth, window.innerHeight);
//         document.body.appendChild(renderer.domElement);

//         //make cube
//         const geometry = new THREE.BoxGeometry(1, 1, 1);
//         const material = new THREE.MeshBasicMaterial({ color: 0x44a88 });
//         const cube = new THREE.Mesh(geometry, material);
//         scene.add(cube);
//         // scene.background = new THREE.Color(0xffffff)

//         //light
//         const light = new THREE.PointLight(0xff0000, 1, 100);
//         light.position.set(50, 50, 50);
//         scene.add(light);

//         camera.position.z = 5;

//         function animate() {
//             requestAnimationFrame(animate);

//             //animation
//             cube.rotation.x += 0.01;
//             cube.rotation.y += 0.01;

//             renderer.render(scene, camera);
//         }

//         animate();
//     }
// }
