//import * as THREE from 'three';

import { Rive, EventType, RiveEventType } from '@rive-app/canvas'

/*
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer( { alpha: true });
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xfff000 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}
*/

const r = new Rive({
    src: "/dwtd_-_electrical_wire.riv",
    // OR the path to a discoverable and public Rive asset
    // src: '/public/example.riv',
    canvas: document.getElementById("canvas"),
    autoplay: true,
    // artboard: "Arboard", // Optional. If not supplied the default is selected
    automaticallyHandleEvents: true,
    artboard: "Run",
    stateMachines: "Game machine",
    onLoad: () => {
      r.resizeDrawingSurfaceToCanvas();
    },
});

function onRiveEventReceived(riveEvent) {
  const eventData = riveEvent.data;
  const eventProperties = eventData.properties;
  if (eventData.type === RiveEventType.General) {
    console.log("Event name", eventData.name);
    // Added relevant metadata from the event
    try {
    console.log("Rating", eventProperties.rating);
    console.log("Message", eventProperties.message);
    } catch { console.log("error");}
  } else if (eventData.type === RiveEventType.OpenUrl) {
    console.log("Event name", eventData.name);
    window.open(eventData.url);
  } else {
    console.log("test");
  }
}

// Add event listener and provide callback to handle Rive Event
r.on(EventType.RiveEvent, onRiveEventReceived);

console.log("Prova");
// Can unsubscribe to Rive Events at any time via the off() API like below
// r.off(EventType.RiveEvent, onRiveEventReceived);