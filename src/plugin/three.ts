import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
//control camera on Web
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
export default class Experience {
    canvas: any;

    constructor(canvas: any) {
        this.canvas = canvas;

        //basic setting
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer({
            canvas: canvas as HTMLCanvasElement,
            // antialias: true,
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.setZ(40);

        renderer.render(scene, camera);

        //light
        // const poinLight = new THREE.PointLight(0xffffff);
        // poinLight.position.set(15, 5, 5);

        // const ambientLight = new THREE.AmbientLight(0xffffff);
        // scene.add(poinLight, ambientLight);

        // const lightHelper = new THREE.PointLightHelper(poinLight);
        // const gridHelper = new THREE.GridHelper(200, 50);
        // scene.add(lightHelper, gridHelper);

        // const controls = new OrbitControls(camera, renderer.domElement);

        //make torus
        // const geometry = new THREE.TorusGeometry(10, 3, 35, 100);
        // const material = new THREE.MeshStandardMaterial({ color: 0x44a88 }); //light apply to standardMaterial
        // const torus = new THREE.Mesh(geometry, material);

        // scene.add(torus);
        // // scene.background = new THREE.Color(0xffffff);

        // Instantiate a loader
        const loader = new GLTFLoader();

        // Load a glTF resource
        loader.load(
            // resource URL
            'assets/monitor.gltf',
            // called when the resource is loaded
            function (gltf) {
                scene.add(gltf.scene);
                function animate() {
                    requestAnimationFrame(animate);

                    //animation
                    // torus.rotation.x += 0.01;
                    // torus.rotation.y += 0.01;
                    // torus.rotation.z += 0.01;

                    renderer.render(scene, camera);
                }

                animate();
            }
        );

        // function animate() {
        //     requestAnimationFrame(animate);

        //     //animation
        //     // torus.rotation.x += 0.01;
        //     // torus.rotation.y += 0.01;
        //     // torus.rotation.z += 0.01;

        //     renderer.render(scene, camera);
        // }

        // animate();
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
