let ofertasContainer = document.querySelector(".ofertas-container");

fetch("https://agusvj.github.io/Tp2-Web/excursiones/data.json")
  .then((response) => response.json())
  .then((data) => {
    let excursiones = data;

    excursiones.forEach((excursion) => {
      if (excursion.oferta) {
        let template = `
      <article
          class="product-card d-flex flex-column justify-content-between h-100"
        >
          <p class="text-center m-0">Excursion ${excursion.tipoExcursion}</p>
          <div class="w-100 position-relative">
            <span class="position-absolute badge p-2 rounded-circle">
              <span>Oferta</span>
            </span>
            <img src="${excursion.imagen}" alt="" />
          </div>
          <h2>${excursion.titulo}</h2>
          <div
            class="d-flex flex-row justify-content-between align-items-center"
          >
            <p class="m-0">Precio</p>
            <span class="price">$${excursion.precio}</span>
          </div>
          <div class="w-100 d-flex justify-content-center mt-3">
            <a class="btn orange" href="ficha.html?name=${excursion.titulo}">Ver Mas</a>
          </div>
        </article>
      `;

        ofertasContainer.innerHTML += template;
      } else {
        let template = `
      <article
          class="product-card d-flex flex-column justify-content-between h-100"
        >
          <p class="text-center m-0">Excursion ${excursion.tipoExcursion}</p>
          <div class="w-100 position-relative">
            <img src="${excursion.imagen}" alt="" />
          </div>
          <h2>${excursion.titulo}</h2>
          <div
            class="d-flex flex-row justify-content-between align-items-center"
          >
            <p class="m-0">Precio</p>
            <span class="price">$${excursion.precio}</span>
          </div>
          <div class="w-100 d-flex justify-content-center mt-3">
            <a class="btn orange" href="ficha.html?name=${excursion.titulo}">Ver Mas</a>
          </div>
        </article>
      `;

        ofertasContainer.innerHTML += template;
      }
    });
  });
