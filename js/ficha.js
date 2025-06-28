let fichaContainer = document.querySelector(".ficha-container");

fetch("https://agusvj.github.io/Tp2-Web/excursiones/data.json")
  .then((response) => response.json())
  .then((data) => {
    let excursiones = data;

    let template = `
        <figure
        class="row flex-md-row align-items-center mb-5 contrast rounded"
        id="faro"
      >
        <div class="col-12 col-lg-6 p-0">
          <img
            src="./imagenes/faro.jpg"
            alt="Faro del Fin del Mundo"
            class="img-fluid rounded"
          />
        </div>
        <div class="col-12 col-lg-6 px-4 px-md-5 py-4">
          <h3>Paseo al Faro del Fin del Mundo</h3>

          <h6 class="orange">Expedición marítima</h6>
          <ul>
            <li>Dificultad: Baja</li>
            <li>Sin Vianda</li>
            <li>Transporte: No</li>
            <li>Con servicio Fotográfico</li>
          </ul>
          <p class="parag-light">
            Navegá por el Canal Beagle en un cómodo catamarán y descubrí
            paisajes únicos.
          </p>
          <p class="fw-bold">Precio: <span class="orange">$85.000</span></p>
          <button class="btn orange">Agregar al Carrito</button>
        </div>
      </figure>
    `;
  });
