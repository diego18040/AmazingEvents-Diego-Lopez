
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
  import {loadCarruselhome, loadFooter, loadNavbar, renderEvents} from "./index.js";

  document.addEventListener("DOMContentLoaded", function() {
      // Cargar componentes de la página
      loadNavbar();
      loadFooter();
      loadCarruselhome();
  
      // Función para cargar datos desde la API
      async function loadData() {
          try {
              const response = await fetch('https://aulamindhub.github.io/amazing-api/events.json');
              const data = await response.json();
  
              // Ordenar eventos
              bubbleSortEvents(data.events);
  
              // Clasificar en eventos pasados y futuros
              let presentEvents = [];
              let pastEvents = [];
              let currentDate = new Date(data.currentDate);
  
              for (let event of data.events) {
                  let eventDate = new Date(event.date);
                  if (eventDate >= currentDate) {
                      presentEvents.push(event);
                  } else {
                      pastEvents.push(event);
                  }
              }
  
              console.log("Eventos Presentes:");
              console.log(presentEvents);
              console.log("\nEventos Pasados:");
              console.log(pastEvents);
  
              // Extraer categorías únicas
              const categories = [...new Set(data.events.map(event => event.category))];
  
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
  
                  const filteredEvents = data.events.filter(event => {
                      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(event.category);
                      const matchesSearchText = event.name.toLowerCase().includes(searchText) || event.description.toLowerCase().includes(searchText);
                      return matchesCategory && matchesSearchText;
                  });
  
                  renderEvents(filteredEvents);
              }
  
              // Renderizar todos los eventos inicialmente
              renderEvents(data.events);
  
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
  // Diego Lopez 04-08-2024
