let fichaContainer = document.querySelector(".ficha-container");

let urlParams = new URLSearchParams(window.location.search);
let paramId = urlParams.get("id");

fetch("https://agusvj.github.io/Tp2-Web/excursiones/data.json")
  .then((response) => response.json())
  .then((data) => {
    let excursiones = data;

    console.log(excursiones);

    console.log(paramId);

    let excursionEncontrada = excursiones.find(
      (excursion) => excursion.id == paramId
    );

    console.log(excursionEncontrada);

    let template = `
        <figure
        class="row flex-md-row align-items-center mb-5 contrast rounded"
      >
        <div class="col-12 col-lg-6 p-0">
          <img
            src="${excursionEncontrada.imagen}"
            alt="${excursionEncontrada.titulo}"
            class="img-fluid rounded"
          />
        </div>
        <div class="col-12 col-lg-6 px-4 px-md-5 py-4">
          <h3>${excursionEncontrada.titulo}</h3>

          <h6 class="orange">${excursionEncontrada.subtitulo}</h6>
          <ul>
            <li>Dificultad: ${excursionEncontrada.dificultad}</li>
            <li>${excursionEncontrada.comida}</li>
            <li>${excursionEncontrada.transporte}</li>
            <li>${excursionEncontrada.guia}</li>
          </ul>
          <p class="parag-light">
            ${excursionEncontrada.descripcion}
          </p>
          <p class="fw-bold">Precio: <span class="orange">$${excursionEncontrada.precio}</span></p>
          <button class="btn orange">Agregar al Carrito</button>
        </div>
      </figure>
    `;

    fichaContainer.innerHTML += template;
  });
