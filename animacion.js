const canvas = document.getElementById("personaje");
const ctx = canvas.getContext("2d");

const canvas_ancho = canvas.width = personajes[posi].ancho;
const canvas_alto = canvas.height = personajes[posi].alto;
const jugador = new Image();
jugador.src = `personajes/${personajes[posi].nombre}/inactivo.png`;


let framex = 0;
let framey = 0;
let frames = 0;
const alternadorframes = 12;

function animar(){

   ctx.clearRect(0, 0, canvas_ancho, canvas_alto);  //limpia el rectangulo
   let posicion = Math.floor(frames/alternadorframes) % personajes[posi].sprites;   //con math.floor asegura que siempre sea un numero entero, y el % hace que el resultado se reinicie a 0 (el ultimo valor es la cantidad de sprites)
   framex = canvas_ancho * posicion;   
               //(imagen, inicio de imagen horiizontal, inicio de imagen vertical, tamaño horizontal de imagen, tamaño vertical de imagen, nd,nd,nd,nd)
   ctx.drawImage(jugador, framex, framey * canvas_alto, canvas_ancho, canvas_alto, 0, 0, canvas_ancho, canvas_alto);
   
   frames++; //60 por segundo
   requestAnimationFrame(animar);
};

animar();