let urlParams = new URLSearchParams(window.location.search);
let tipo = urlParams.get("tipo");
let tablaBody = document.getElementById("tabla-excursiones");
let titulo = document.getElementById("titulo-lista");

fetch("https://agusvj.github.io/Tp2-Web/excursiones/data.json")
  .then((response) => response.json())
  .then((excursiones) => {
    let filtradas;
    if (tipo) {
      filtradas = excursiones.filter((exc) => exc.tipoExcursion === tipo);
    } else {
      filtradas = excursiones;
    }

    if (tipo) {
      titulo.textContent =
        "Excursiones " + tipo[0].toUpperCase() + tipo.slice(1) + "s";
    } else {
      titulo.textContent = "Todas las Excursiones";
    }
    filtradas.forEach((exc) => {
      let precioFinal = exc.oferta ? exc.precio * 0.6 : exc.precio;
      let fila = `
    <tr>
    <td>${exc.titulo}</td>
    <td>${exc.subtitulo}</td> 
    <td>$${precioFinal}
    ${exc.oferta ? ' <span class="etiqueta-oferta">🔥 40% OFF</span>' : ""}
    </td>  
    <td>
      <ul class="list-unstyled mb-0">
      <li>Dificultad: ${exc.dificultad}</li>
      <li> ${exc.comida}</li>
      <li> ${exc.transporte}</li>
      <li> ${exc.guia}</li>
      
      </ul>
    </td>
    <td>
    <a href="ficha.html?id=${exc.id}" class="btn orange">Ver más</a> 
    </td>
    </tr>
    `;
      tablaBody.innerHTML += fila;
    });
  });
