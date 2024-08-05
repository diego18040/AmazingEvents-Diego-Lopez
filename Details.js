import { loadNavbar, loadFooter, loadCarrusel } from "./index.js";

document.addEventListener("DOMContentLoaded", async function() {
  loadNavbar();
  loadFooter();
  loadCarrusel();

  // Obtener el ID del evento desde la URL
  const params = new URLSearchParams(window.location.search);
  const eventId = params.get('id');
  const numericEventId = Number(eventId); // Convertir el ID a número

  console.log("ID del evento obtenido de la URL:", numericEventId); // Log para verificar el ID de la URL

  if (!eventId) {
    showError("No se encontró el evento.");
    return;
  }

  try {
    const response = await fetch('https://aulamindhub.github.io/amazing-api/events.json');
    const data = await response.json();
    console.log("Datos cargados:", data);

    // Log para verificar los IDs de los eventos en los datos
    data.events.forEach(event => console.log("ID del evento en los datos:", event._id));

    // Buscar el evento por ID
    const event = data.events.find(event => event._id === numericEventId);
    console.log("Evento encontrado:", event);

    if (event) {
      showEventDetails(event);
    } else {
      showError("No se encontró el evento.");
    }
  } catch (error) {
    console.error("Error loading event details:", error);
    showError("Hubo un error al cargar los detalles del evento.");
  }
});

function showEventDetails(event) {
  const detailsContainer = document.getElementById("details-container");
  detailsContainer.innerHTML = `
    <div class="col">
      <img src="${event.image}" class="card-img-top img-fluid rounded-start" alt="${event.name}">
    </div>
    <div class="col">
      <h5 class="card-title text-center">${event.name}</h5>
      <p class="card-text text-center">${event.description}</p>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Category: ${event.category}</li>
        <li class="list-group-item">Place: ${event.place}</li>
        <li class="list-group-item">Date: ${event.date}</li>
        <li class="list-group-item">Price: ${event.price} $</li>
        <li class="list-group-item">Capacity: ${event.capacity}</li>
        ${event.assistance ? `<li class="list-group-item">Assistance: ${event.assistance}</li>` : ''}
        ${event.estimate ? `<li class="list-group-item">Estimate: ${event.estimate}</li>` : ''}
      </ul>
    </div>
  `;
}

function showError(message) {
  const detailsContainer = document.getElementById("details-container");
  detailsContainer.innerHTML = `
    <div class="alert alert-danger" role="alert">
      ${message}
    </div>
  `;
}
