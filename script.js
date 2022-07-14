const imagen = document.querySelector("#imagen");
window.onload = () => {
   let animacion = imagen.animate([//funciona igual que un "@keyframe" las prop son ([{from},{to}],{duracion,patron});
      {
         left:"-300px"
      },{
         left:"0px"
      }
   ],{
      duration:2000,
      fill:"forwards"
   }); 
}
//----------------------------------------

const canvas = document.getElementById("personaje");
const ctx = canvas.getContext("2d");
let posi = 0;
const personajes = [
   {
      nombre: "bartholomew kuma",
      ancho: 49,
      alto: 92,
      sprites: 7
   },
   {
      nombre: "barbablanca",
      ancho: 78,
      alto: 114,
      sprites: 6
   },
   {
      nombre: "magellan",
      ancho: 49,
      alto: 93,
      sprites: 4
   },
   {
      nombre: "emporio ivankov",
      ancho: 48,
      alto: 89,
      sprites: 4
   },
   {
      nombre: "vander decken",
      ancho: 58,
      alto: 87,
      sprites: 4
   },
   {
      nombre: "jimbe",
      ancho: 71,
      alto: 79,
      sprites: 4
   },
   {
      nombre: "crocodile",
      ancho: 57,
      alto: 74,
      sprites: 4
   },
   {
      nombre: "shanks",
      ancho: 45,
      alto: 73,
      sprites: 4
   },
   {
      nombre: "koby",
      ancho: 25,
      alto: 64,
      sprites: 4
   },
   {
      nombre: "chopper",
      ancho: 25,
      alto: 39,
      sprites: 4
   }
]

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