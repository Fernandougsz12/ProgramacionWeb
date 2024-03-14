const menu = document.getElementById("menu");
document.body.appendChild(menu);
menu.style.position = "absolute";
menu.style.right = "0";
menu.style.top = "0";

// Colores para los textos
const titulos = document.querySelectorAll("h1, h2, h3");
const colores = ["#333", "#666", "#999", "#000080", "#800000"];

for (let i = 0; i < titulos.length; i++) {
  titulos[i].style.color = colores[i % 5];
}

// Centrar imágenes
const imagenes = document.querySelectorAll("img");

for (let imagen of imagenes) {
  imagen.style.display = "block";
  imagen.style.margin = "0 auto";
}

// Redondear caja del título
const tituloPrincipal = document.querySelector(".color1");
tituloPrincipal.style.borderRadius = "10px";

// Agregar divs para cada sección
const secciones = document.querySelectorAll(".seccion");

for (let seccion of secciones) {
  const div = document.createElement("div");
  div.appendChild(seccion);
  document.body.appendChild(div);
}

// Citas
const citas = document.querySelectorAll("blockquote");

for (let cita of citas) {
  const fuente = document.createElement("cite");
  fuente.textContent = " - " + cita.getAttribute("data-source");
  cita.appendChild(fuente);
}

// Marquee
const marquee = document.querySelector("marquee");
marquee.style.width = "100%";
marquee.style.textAlign = "center";

// Fecha
const fecha = document.querySelector("#fecha");
fecha.style.display = "none";
