import {loadCarruselpast, loadFooter, loadNavbar, renderEvents} from "./index.js";


document.addEventListener("DOMContentLoaded", function() {
  loadNavbar();
  loadFooter();
  loadCarruselpast();
  // Manera de corregir si no carga DOM

  // manera de corregir si no cumple YYYY-MM-DD
  //data.events.forEach(event => {
      //let parts = event.date.split('-');
      //if (parts[1].length === 1) {
        //parts[1] = '0' + parts[1]; // Agregar cero al mes si es necesario
      //}
      //if (parts[2].length === 1) {
        //parts[2] = '0' + parts[2]; // Agregar cero al día si es necesario
      //}
    //  event.date = parts.join('-');
  //  });
 
 
  async function loadData() {
    try {
      const response = await fetch("https://aulamindhub.github.io/amazing-api/events.json");
      const data = await response.json();

      // Corregir fechas si no cumplen con el formato YYYY-MM-DD
      data.events.forEach(event => {
        let parts = event.date.split('-');
        if (parts[1].length === 1) {
          parts[1] = '0' + parts[1]; // Agregar cero al mes si es necesario
        }
        if (parts[2].length === 1) {
          parts[2] = '0' + parts[2]; // Agregar cero al día si es necesario
        }
        event.date = parts.join('-');
      });

      // Ordenar eventos
      bubbleSortEvents(data.events);

      // Clasificar en eventos pasados
      let pastEvents = [];
      let currentDate = new Date(data.currentDate);

      for (let event of data.events) {
        let eventDate = new Date(event.date);
        if (eventDate < currentDate) {
          pastEvents.push(event);
        }
      }

      console.log("\nEventos Pasados:");
      console.log(pastEvents);

      // Extraer categorías únicas de eventos pasados
      const categories = [...new Set(pastEvents.map(event => event.category))];

      // Generar checkboxes dinámicamente
      const checkboxContainer = document.querySelector(".checkbox-container");
      checkboxContainer.innerHTML = categories.map(category => `
        <div class="checkbox-item">
          <input type="checkbox" id="${category}" value="${category}">
          <label for="${category}">${category}</label>
        </div>
      `).join("");

      // Evento de cambio en los checkboxes
      const checkboxes = document.querySelectorAll(".checkbox-item input");
      checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", filterEvents);
      });
      const searchInput = document.querySelector('.form-control');
      searchInput.addEventListener('input', filterEvents);

      function filterEvents() {
        const selectedCategories = Array.from(checkboxes)
          .filter(checkbox => checkbox.checked)
          .map(checkbox => checkbox.value);

        const searchText = searchInput.value.toLowerCase();

        const filteredEvents = pastEvents.filter(event => {
          const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(event.category);
          const matchesSearchText = event.name.toLowerCase().includes(searchText) || event.description.toLowerCase().includes(searchText);
          return matchesCategory && matchesSearchText;
        });

        renderEvents(filteredEvents);
      }

      // Renderizar solo eventos pasados inicialmente
      renderEvents(pastEvents);

    } catch (error) {
      console.error("Error loading data:", error);
    }
  }

  loadData();

  function bubbleSortEvents(events) {
    let len = events.length;
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (new Date(events[j].date) > new Date(events[j + 1].date)) {
          // BARRIDO
          let temp = events[j];
          events[j] = events[j + 1];
          events[j + 1] = temp;
        }
      }
    }
  }


  });
// Diego Lopez 05-07-2024
// Diego Lopez 22-07-2024
// Diego Lopez 05-08-2024