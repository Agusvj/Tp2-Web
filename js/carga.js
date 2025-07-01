let excursiones = [];

fetch("https://agusvj.github.io/Tp2-Web/excursiones/data.json")
  .then((response) => response.json())
  .then((data) => {
    excursiones = data;
  })
  .catch((error) => console.error("Error al cargar JSON:", error));

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.querySelector("#nombre-excursion").value;
  const subtitulo = document.querySelector("#subtitulo-excursion").value;
  const descripcion = document.querySelectorAll("#description")[0].value;
  const descripcionLista = document.querySelectorAll("#description")[1].value;
  const tipoExcursion = document.querySelector("#productType").value;
  const precio = document.querySelector("#price").value.toString();

  const dificultadRaw =
    document.querySelector("input[name='Dificultad']:checked")?.value || "";
  const dificultad =
    dificultadRaw.charAt(0).toUpperCase() +
    dificultadRaw.slice(1).toLowerCase();

  const transporteChecked = document.querySelector(
    "input[name='Transporte']:checked"
  )?.value;
  const transporte =
    transporteChecked === "si" ? "Con Transporte" : "Sin Transporte";

  const comida = document.querySelector("#vianda").checked
    ? "Con Vianda"
    : "Sin Vianda";
  const guia = document.querySelector("#guia").checked
    ? "Con Guía"
    : "Sin Guía";
  const oferta = document.querySelector("#fotografia").checked;

  // Imagen a partir del input file
  const archivoImagen = document.querySelector("#img").files[0];
  const imagen = archivoImagen
    ? `./imagenes/${archivoImagen.name}`
    : "./imagenes/default.jpg";

  const nuevaExcursion = {
    id: excursiones.length + 1,
    titulo: nombre,
    subtitulo: subtitulo,
    tipoExcursion,
    dificultad,
    comida,
    transporte,
    guia,
    descripcion,
    precio,
    descLista: descripcionLista,
    oferta,
    imagen,
  };

  excursiones.push(nuevaExcursion);

  console.log("Nueva excursión agregada:", nuevaExcursion);
  console.log("Array completo:", excursiones);

  alert("Excursión agregada (simulación). Ver consola.");
});
