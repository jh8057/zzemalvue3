import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
//control camera on Web
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { AxesHelper } from 'three';
import backgroundImg from '../assets/space.jpeg';
import sun from '../assets/sun.jpeg';
import mirrorball from '../assets/mirror.jpeg';
import water from '../assets/water.jpeg';
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
        camera.position.setZ(10);
        camera.position.setY(10);
        camera.position.setX(5);

        renderer.shadowMap.enabled = true;

        renderer.render(scene, camera);

        //light
        const poinLight = new THREE.PointLight(0xae9366, 3, 20);
        poinLight.position.set(4.4, 6.8, 0.2);

        const poinLight2 = new THREE.PointLight(0xffffff, 2, 30);
        poinLight2.position.set(-1, 8, -18);

        // const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
        scene.add(poinLight, poinLight2);
        // scene.add(poinLight, ambientLight);

        // helpers
        // const lightHelper = new THREE.PointLightHelper(poinLight);
        // const lightHelper2 = new THREE.PointLightHelper(poinLight2);
        // const gridHelper = new THREE.GridHelper(200, 50);
        // scene.add(lightHelper, lightHelper2, gridHelper);
        // const axeHelper = new THREE.AxesHelper(5);
        // scene.add(axeHelper);

        const controls = new OrbitControls(camera, renderer.domElement);

        const textureLoader = new THREE.TextureLoader();
        scene.background = textureLoader.load(backgroundImg);

        // // make torus
        const geometry = new THREE.TorusGeometry(28, 2, 55, 100);
        const material = new THREE.MeshStandardMaterial({ color: 0xae9366 }); //light apply to standardMaterial
        const torus = new THREE.Mesh(geometry, material);
        // torus.castShadow = true;

        scene.add(torus);
        // scene.background = new THREE.Color(0xffffff);

        // // make Sphere
        const sphereGeometry = new THREE.SphereGeometry(4);
        const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, wireframe: false, map: textureLoader.load(water) }); //light apply to standardMaterial
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.set(0, 10, -10);
        // torus.castShadow = true;

        //make plane
        const planeGeometry = new THREE.PlaneGeometry(30, 30);
        const splaneMaterial = new THREE.MeshStandardMaterial({ color: 0xae9366 }); //light apply to standardMaterial
        const plane = new THREE.Mesh(planeGeometry, splaneMaterial);
        plane.rotation.x = -0.5 * Math.PI;
        // plane.receiveShadow = true;

        scene.add(sphere, plane);
        // scene.background = new THREE.Color(0xffffff);

        const sphereID = sphere.id;
        //mouse Click
        const mousePosition = new THREE.Vector2();

        window.addEventListener('mousemove', function (e) {
            mousePosition.x = (e.clientX / window.innerWidth) * 2 - 1;
            mousePosition.y = (e.clientY / window.innerHeight) * 2 - 1;
        });

        const rayCaster = new THREE.Raycaster();

        //animation
        let step = 0;
        let speed = 0.01;

        // Instantiate a loader
        const loader = new GLTFLoader();

        // Load a glTF resource
        loader.load(
            // resource URL
            '/blender/mountain_deck.gltf',
            // called when the resource is loaded
            function (gltf) {
                scene.add(gltf.scene);
                function animate() {
                    requestAnimationFrame(animate);

                    //animation
                    torus.rotation.x += 0.01;
                    torus.rotation.y += 0.01;
                    torus.rotation.z += 0.01;

                    //ray
                    rayCaster.setFromCamera(mousePosition, camera);
                    const intersects = rayCaster.intersectObjects(scene.children);
                    // console.log(intersects);

                    for (let i = 0; i < intersects.length; i++) {
                        if (intersects[i].object.id === sphereID) {
                            ((intersects[i].object as THREE.Mesh).material as THREE.MeshStandardMaterial).color.set(0xff0000);
                        }
                    }

                    step += speed;
                    sphere.position.x = 3 * Math.sin(step);

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
