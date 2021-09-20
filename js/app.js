console.log("Hola mundo desde app.js");

if (navigator.serviceWorker) {
    console.log("Muy bien, podemos jugar :D");
    navigator.serviceWorker.register('/sw.js');
} else {
    console.log("Lastima cambia de navegador");    
}