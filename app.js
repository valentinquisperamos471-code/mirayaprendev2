console.log("🎬 Mira y Aprende iniciado");

//==============================
// VARIABLES
//==============================

let asientoElegido = "";
let total = 0;

//==============================
// LOADER
//==============================

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.style.opacity = "0";

loader.style.pointerEvents = "none";

setTimeout(() => {

loader.style.display = "none";

},500);

},1800);

});

//==============================
// MENÚ CELULAR
//==============================

const menuBtn = document.getElementById("menuMovil");
const menu = document.getElementById("menu");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

menu.classList.toggle("mostrarMenu");

});

}

//==============================
// CONTADOR
//==============================

function actualizarContador(){

const ahora = new Date();

const funcion = new Date();

funcion.setHours(16);
funcion.setMinutes(30);
funcion.setSeconds(0);

let diferencia = funcion - ahora;

if(diferencia < 0){

diferencia += 24*60*60*1000;

}

const horas = Math.floor(diferencia/1000/60/60);

const minutos = Math.floor((diferencia/1000/60)%60);

const segundos = Math.floor((diferencia/1000)%60);

const contador = document.getElementById("contadorTiempo");

if(contador){

contador.textContent=

String(horas).padStart(2,"0")+" : "+

String(minutos).padStart(2,"0")+" : "+

String(segundos).padStart(2,"0");

}

}

setInterval(actualizarContador,1000);

actualizarContador();
//==============================
// ASIENTOS
//==============================

const asientos = document.querySelectorAll(".asiento");

asientos.forEach(asiento=>{

asiento.addEventListener("click",()=>{

document.querySelectorAll(".asiento").forEach(a=>{

a.classList.remove("seleccionado");

});

asiento.classList.add("seleccionado");

asientoElegido = asiento.textContent;

const texto = document.getElementById("asientoSeleccionado");

if(texto){

texto.textContent =
"💺 Asiento seleccionado: " + asientoElegido;

}

});

});

//==============================
// CONFIRMAR ASIENTO
//==============================

const confirmar =
document.getElementById("confirmarAsiento");

if(confirmar){

confirmar.addEventListener("click",()=>{

if(asientoElegido===""){

alert("Selecciona un asiento.");

return;

}

alert("✅ Has reservado el asiento " + asientoElegido);

});

}

//==============================
// COMBOS
//==============================

function agregarCombo(nombre,precio){

const lista =
document.getElementById("listaCarrito");

const item =
document.createElement("li");

item.textContent =
nombre + " - S/ " + precio;

lista.appendChild(item);

total += precio;

document.getElementById("total").textContent =
"Total: S/ " + total;

}

window.agregarCombo = agregarCombo;

//==============================
// BOTONES RESERVAR
//==============================

const botones =
document.querySelectorAll(".btnReservar");

botones.forEach(boton=>{

boton.addEventListener("click",()=>{

document
.getElementById("reserva")
.scrollIntoView({

behavior:"smooth"

});

});

});
//==============================
// GENERAR TICKET
//==============================

const btnTicket =
document.getElementById("generarTicket");

if(btnTicket){

btnTicket.addEventListener("click",()=>{

const nombre =
document.getElementById("nombre").value.trim();

const grado =
document.getElementById("grado").value;

const pelicula =
document.getElementById("pelicula").value;

if(nombre===""){

alert("Ingresa tu nombre.");

return;

}

if(grado===""){

alert("Selecciona tu grado.");

return;

}

if(pelicula===""){

alert("Selecciona una película.");

return;

}

if(asientoElegido===""){

alert("Selecciona un asiento.");

return;

}

const numero =
Math.floor(Math.random()*9000)+1000;

const fecha =
new Date().toLocaleDateString("es-PE");

const hora =
new Date().toLocaleTimeString("es-PE");

document.getElementById("ticketFinal").innerHTML=`

<div class="ticket-header">

<h2>🎬 MIRA Y APRENDE</h2>

<p>Cine Reciclable Escolar</p>

</div>

<hr>

<p><strong>🎟 Ticket:</strong> ${numero}</p>

<p><strong>👤 Nombre:</strong> ${nombre}</p>

<p><strong>🎓 Grado:</strong> ${grado}</p>

<p><strong>🎬 Película:</strong> ${pelicula}</p>

<p><strong>💺 Asiento:</strong> ${asientoElegido}</p>

<p><strong>🍿 Combos:</strong> S/ ${total}</p>

<p><strong>♻ Entrada:</strong> 8 Botellas</p>

<p><strong>📅 Fecha:</strong> ${fecha}</p>

<p><strong>🕒 Hora:</strong> ${hora}</p>

<hr>

<h3>

⭐ ¡Disfruta la función!

</h3>

`;

actualizarEstadisticas();

});

}

//==============================
// ESTADÍSTICAS
//==============================

let reservas = 0;
let botellas = 0;

function actualizarEstadisticas(){

reservas++;

botellas += 8;

const r =
document.getElementById("asientosReservados");

const b =
document.getElementById("botellasTotal");

if(r){

r.textContent = reservas;

}

if(b){

b.textContent = botellas;

}

}

//==============================
// USUARIOS CONECTADOS
//==============================

const usuarios =
document.getElementById("usuariosConectados");

if(usuarios){

usuarios.textContent =
Math.floor(Math.random()*25)+15;

}
//==============================
// ANIMACIONES AL HACER SCROLL
//==============================

const secciones = document.querySelectorAll("section");

const observador = new IntersectionObserver((entradas)=>{

entradas.forEach(entrada=>{

if(entrada.isIntersecting){

entrada.target.style.opacity="1";
entrada.target.style.transform="translateY(0px)";

}

});

},{
threshold:0.15
});

secciones.forEach(sec=>{

sec.style.opacity="0";
sec.style.transform="translateY(40px)";
sec.style.transition=".8s";

observador.observe(sec);

});

//==============================
// BOTONES TRÁILER
//==============================

const trailers =
document.querySelectorAll(".btnTrailer");

trailers.forEach(btn=>{

btn.addEventListener("click",(e)=>{

e.preventDefault();

alert("🎬 Próximamente podrás ver el tráiler de esta película.");

});

});

//==============================
// MENÚ RESPONSIVE
//==============================

const enlaces =
document.querySelectorAll("nav a");

enlaces.forEach(link=>{

link.addEventListener("click",()=>{

if(window.innerWidth<=900){

menu.classList.remove("mostrarMenu");

}

});

});

//==============================
// MENSAJE FINAL
//==============================

console.log("✅ Mira y Aprende cargado correctamente.");
