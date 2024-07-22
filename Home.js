document.addEventListener("DOMContentLoaded", function() {
  // Manera de corregir si no carga DOM
  const data = {
    currentDate: "2023-01-01",
    events: [
      {
        _id: "639c723b992482e5f2834be9",
        name: "Collectivities Party",
        image: "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
        date: "2022-12-12",
        description:
          "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
        category: "Food Fair",
        place: "Room A",
        capacity: 45000,
        assistance: 42756,
        price: 5,
        __v: 0,
      },
      {
        _id: "639c723b992482e5f2834beb",
        name: "Korean style",
        image: "https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
        date: "2023-08-12",
        description:
          "Enjoy the best Korean dishes, with international chefs and awesome events.",
        category: "Food Fair",
        place: "Room A",
        capacity: 45000,
        price: 10,
        __v: 0,
        estimate: 42756,
      },
      {
        _id: "639c723c992482e5f2834bed",
        name: "Jurassic Park",
        image: "https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
        date: "2022-11-02",
        description:
          "Let's go meet the biggest dinosaurs in the paleontology museum.",
        category: "Museum",
        place: "Field",
        capacity: 82000,
        price: 15,
        __v: 0,
        assistance: 65892,
      },
      {
        _id: "639c723c992482e5f2834bef",
        name: "Parisian Museum",
        image: "https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
        date: "2023-11-02",
        description:
          "A unique tour in the city of lights, get to know one of the most iconic places.",
        category: "Museum",
        place: "Paris",
        capacity: 8200,
        estimate: 8200,
        price: 3500,
        __v: 0,
      },
      {
        _id: "639c723c992482e5f2834bf1",
        name: "Comicon",
        image: "https://i.postimg.cc/KYD0jMf2/comicon.jpg",
        date: "2022-02-12",
        description:
          "For comic lovers, all your favourite characters gathered in one place.",
        category: "Costume Party",
        place: "Room C",
        capacity: 120000,
        assistance: 110000,
        price: 54,
        __v: 0,
      },
      {
        _id: "639c723c992482e5f2834bf3",
        name: "Halloween Night",
        image: "https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
        date: "2023-02-12",
        description: "Come with your scariest costume and win incredible prizes.",
        category: "Costume Party",
        place: "Room C",
        capacity: 12000,
        estimate: 9000,
        price: 12,
        __v: 0,
      },
      {
        _id: "639c723c992482e5f2834bf5",
        name: "Metallica in concert",
        image: "https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
        date: "2023-01-22",
        description: "The only concert of the most emblematic band in the world.",
        category: "Music Concert",
        place: "Room A",
        capacity: 138000,
        estimate: 138000,
        price: 150,
        __v: 0,
      },
      {
        _id: "639c723c992482e5f2834bf7",
        name: "Electronic Fest",
        image: "https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
        date: "2022-01-22",
        description:
          "The best national and international DJs gathered in one place.",
        category: "Music Concert",
        place: "Room A",
        capacity: 138000,
        assistance: 110300,
        price: 250,
        __v: 0,
      },
      {
        _id: "639c723d992482e5f2834bf9",
        name: "10K for life",
        image: "https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
        date: "2022-03-01",
        description: "Come and exercise, improve your health and lifestyle.",
        category: "Race",
        place: "Soccer field",
        capacity: 30000,
        assistance: 25698,
        price: 3,
        __v: 0,
      },
      {
        _id: "639c723d992482e5f2834bfb",
        name: "15K NY",
        image: "https://i.postimg.cc/zv67r65z/15kny.jpg",
        date: "2023-03-01",
        description:
          "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
        category: "Race",
        place: "New York",
        capacity: 3000000,
        price: 3,
        __v: 0,
        estimate: 2569800,
      },
      {
        _id: "639c723d992482e5f2834bfd",
        name: "School's book fair",
        image: "https://i.postimg.cc/Sst763n6/book1.jpg",
        date: "2023-10-15",
        description: "Bring your unused school book and take the one you need.",
        category: "Book Exchange",
        place: "Room D1",
        capacity: 150000,
        estimate: 123286,
        price: 1,
        __v: 0,
      },
      {
        _id: "639c723d992482e5f2834bff",
        name: "Just for your kitchen",
        image: "https://i.postimg.cc/05FhxHVK/book4.jpg",
        date: "2022-11-09",
        description:
          "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
        category: "Book Exchange",
        place: "Room D6",
        capacity: 130000,
        assistance: 90000,
        price: 100,
        __v: 0,
      },
      {
        _id: "639c723d992482e5f2834c01",
        name: "Batman",
        image: "https://i.postimg.cc/vH52y81C/cinema4.jpg",
        date: "2022-03-11",
        description: "Come see Batman fight crime in Gotham City.",
        category: "Cinema",
        place: "Room D1",
        capacity: 11000,
        assistance: 9300,
        price: 225,
        __v: 0,
      },
      {
        _id: "639c723d992482e5f2834c03",
        name: "Avengers",
        image: "https://i.postimg.cc/T3C92KTN/scale.jpg",
        date: "2023-10-15",
        description:
          "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
        category: "Cinema",
        place: "Room D1",
        capacity: 9000,
        estimate: 9000,
        price: 250,
        __v: 0,
      },
  ],
  };
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
  
  function bubbleSortEvents(events) {
  let len = data.events.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (new Date(data.events[j].date) > new Date(data.events[j + 1].date)) {
        // BARRIDO
        let temp = data.events[j];
        data.events[j] = data.events[j + 1];
        data.events[j + 1] = temp;
      }
    }
  }
  console.log (data.events);
  }
  bubbleSortEvents(data.events);
  
      // Clasificar en eventos pasado y futuros 
      let presentEvents = [];
      let pastEvents = [];
      let currentDate = new Date (data.currentDate)
      
      for (let event of data.events) {
          let eventDate = new Date(event.date);
          if (eventDate >= currentDate) {
             presentEvents.push(event);
          } else {
              pastEvents.push(event);
          }
      }
      //
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
  
    function renderEvents(events) {
      const cardContainer = document.getElementById("card-temple");
  
      if (events.length === 0) {
        cardContainer.innerHTML = `
          <div class="no-results">
            <h3>No hay publicaciones que coincidan con tu búsqueda.</h3>
        <ul>
          <li>Revisa la ortografía de la palabra.</li>
          <li>Utiliza palabras más genéricas o menos palabras.</li>
          <li>Navega por las categorías para encontrar un producto similar.</li>
        </ul>
          </div>
        `;
        return;
      }
      cardContainer.innerHTML = events.map(event => `
        <div class="col-11 col-md-5 col-lg-2 p-0 m-3">
          <div class="card mx-auto h-100">
            <img src="${event.image}" class="card-img-top img-fluid" alt="${event.name}">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title text-center">${event.name}</h5>
              <p class="card-text text-center">${event.description}</p>
              <div class="mt-auto">
                <div class="d-flex justify-content-between align-items-center">
                  <p class="mb-0">${event.price} $</p>
                  <a href="./Details.html?id=${event._id}" class="btn btn-primary">Details</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      `).join("");
    }
    // Renderizar todos los eventos inicialmente
    renderEvents(data.events);
  });
  // Diego Lopez 05-07-2024
  // Diego Lopez 22-07-2024