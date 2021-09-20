console.log("Hola mundo desde app.js");

const url = window.location.href;
let swPath = '/20213-PWA-U2-P1/sw.js';

if (navigator.serviceWorker) {
    console.log("Muy bien, podemos jugar :D");

    if (url.includes('localhost')) {
        swPath='/sw.js'
    }

    navigator.serviceWorker.register(swPath);
} else {
    console.log("Lastima cambia de navegador");    
}