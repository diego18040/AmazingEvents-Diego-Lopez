export function loadNavbar() {
    const Navbar = `
     <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
              <a class="navbar-brand col-4 col-sm-2 col-md-1" href="./Home.html">
                <img src="./Recursos_Amazing_Events_Task_1/amazing_brand.png" alt="Bootstrap" width="100" height="24">
              </a>
              <button class="navbar-toggler p-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <a class="nav-link" href="./Home.html">Home</a>
                  <a class="nav-link" href="./UpcomingEvents.html">Upcoming Events</a>
                  <a class="nav-link" href="./PastEvents.html">Past Events</a>
                  <a class="nav-link" href="./Contact.html">Contact</a>
                  <a class="nav-link" href="./Stats.html">Stats</a>
                </div>
              </div>
          </div>
          </nav>
    `;
    const navbarContainer = document.getElementById('navbar');
    navbarContainer.innerHTML = Navbar;
}

export function loadCarruselhome() {
    const Carrusel = `
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="./Recursos_Amazing_Events_Task_1/optional_banner_1.jpg" class="d-block w-100" alt="optional_banner_1">
          <div class="carousel-caption d-md-block">
            <h1 class="fw-bold fs-1">Home</h1>
          </div>
        </div>
        <div class="carousel-item">
          <img src="./Recursos_Amazing_Events_Task_1/optional_banner_2.jpg" class="d-block w-100" alt="optional_banner_2">
          <div class="carousel-caption d-md-block">
            <h1 class="fw-bold fs-1">Upcoming Events</h1>
          </div>
        </div>
        <div class="carousel-item">
          <img src="./Recursos_Amazing_Events_Task_1/optional_banner_3.jpg" class="d-block w-100" alt="optional_banner_3">
          <div class="carousel-caption d-md-block">
            <h1 class="fw-bold fs-1">Past Events</h1>
          </div>
        </div>
        <div class="carousel-item">
          <img src="./Recursos_Amazing_Events_Task_1/optional_banner_4.jpg" class="d-block w-100" alt="optional_banner_4">
          <div class="carousel-caption d-md-block">
            <h1 class="fw-bold fs-1">Contact</h1>
          </div>
        </div>
        <div class="carousel-item">
          <img src="./Recursos_Amazing_Events_Task_1/optional_banner_5.jpg" class="d-block w-100" alt="optional_banner_5">
          <div class="carousel-caption d-md-block">
            <h1 class="fw-bold fs-1">Stats</h1>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden"></span>
      </button>
    `;
    const carruselContainer = document.getElementById('carouselExampleCaptions');
    carruselContainer.innerHTML = Carrusel;
}
export function loadCarruselpast() {
  const Carrusel = `
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" class="active" aria-current="true"  aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item">
        <img src="./Recursos_Amazing_Events_Task_1/optional_banner_1.jpg" class="d-block w-100" alt="optional_banner_1">
        <div class="carousel-caption d-md-block">
          <h1 class="fw-bold fs-1">Home</h1>
        </div>
      </div>
      <div class="carousel-item">
        <img src="./Recursos_Amazing_Events_Task_1/optional_banner_2.jpg" class="d-block w-100" alt="optional_banner_2">
        <div class="carousel-caption d-md-block">
          <h1 class="fw-bold fs-1">Upcoming Events</h1>
        </div>
      </div>
      <div class="carousel-item active">
        <img src="./Recursos_Amazing_Events_Task_1/optional_banner_3.jpg" class="d-block w-100" alt="optional_banner_3">
        <div class="carousel-caption d-md-block">
          <h1 class="fw-bold fs-1">Past Events</h1>
        </div>
      </div>
      <div class="carousel-item">
        <img src="./Recursos_Amazing_Events_Task_1/optional_banner_4.jpg" class="d-block w-100" alt="optional_banner_4">
        <div class="carousel-caption d-md-block">
          <h1 class="fw-bold fs-1">Contact</h1>
        </div>
      </div>
      <div class="carousel-item">
        <img src="./Recursos_Amazing_Events_Task_1/optional_banner_5.jpg" class="d-block w-100" alt="optional_banner_5">
        <div class="carousel-caption d-md-block">
          <h1 class="fw-bold fs-1">Stats</h1>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden"></span>
    </button>
  `;
  const carruselContainer = document.getElementById('carouselExampleCaptions');
  carruselContainer.innerHTML = Carrusel;
}

export function loadCarruselup() {
  const Carrusel = `
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" class="active" aria-current="true"   aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item">
        <img src="./Recursos_Amazing_Events_Task_1/optional_banner_1.jpg" class="d-block w-100" alt="optional_banner_1">
        <div class="carousel-caption d-md-block">
          <h1 class="fw-bold fs-1">Home</h1>
        </div>
      </div>
      <div class="carousel-item active">
        <img src="./Recursos_Amazing_Events_Task_1/optional_banner_2.jpg" class="d-block w-100" alt="optional_banner_2">
        <div class="carousel-caption d-md-block">
          <h1 class="fw-bold fs-1">Upcoming Events</h1>
        </div>
      </div>
      <div class="carousel-item">
        <img src="./Recursos_Amazing_Events_Task_1/optional_banner_3.jpg" class="d-block w-100" alt="optional_banner_3">
        <div class="carousel-caption d-md-block">
          <h1 class="fw-bold fs-1">Past Events</h1>
        </div>
      </div>
      <div class="carousel-item">
        <img src="./Recursos_Amazing_Events_Task_1/optional_banner_4.jpg" class="d-block w-100" alt="optional_banner_4">
        <div class="carousel-caption d-md-block">
          <h1 class="fw-bold fs-1">Contact</h1>
        </div>
      </div>
      <div class="carousel-item">
        <img src="./Recursos_Amazing_Events_Task_1/optional_banner_5.jpg" class="d-block w-100" alt="optional_banner_5">
        <div class="carousel-caption d-md-block">
          <h1 class="fw-bold fs-1">Stats</h1>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden"></span>
    </button>
  `;
  const carruselContainer = document.getElementById('carouselExampleCaptions');
  carruselContainer.innerHTML = Carrusel;
}

export function loadCarruselstats() {
  const Carrusel = `
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"    aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" class="active" aria-current="true" aria-label="Slide 5"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item">
        <img src="./Recursos_Amazing_Events_Task_1/optional_banner_1.jpg" class="d-block w-100" alt="optional_banner_1">
        <div class="carousel-caption d-md-block">
          <h1 class="fw-bold fs-1">Home</h1>
        </div>
      </div>
      <div class="carousel-item ">
        <img src="./Recursos_Amazing_Events_Task_1/optional_banner_2.jpg" class="d-block w-100" alt="optional_banner_2">
        <div class="carousel-caption d-md-block">
          <h1 class="fw-bold fs-1">Upcoming Events</h1>
        </div>
      </div>
      <div class="carousel-item">
        <img src="./Recursos_Amazing_Events_Task_1/optional_banner_3.jpg" class="d-block w-100" alt="optional_banner_3">
        <div class="carousel-caption d-md-block">
          <h1 class="fw-bold fs-1">Past Events</h1>
        </div>
      </div>
      <div class="carousel-item">
        <img src="./Recursos_Amazing_Events_Task_1/optional_banner_4.jpg" class="d-block w-100" alt="optional_banner_4">
        <div class="carousel-caption d-md-block">
          <h1 class="fw-bold fs-1">Contact</h1>
        </div>
      </div>
      <div class="carousel-item active">
        <img src="./Recursos_Amazing_Events_Task_1/optional_banner_5.jpg" class="d-block w-100" alt="optional_banner_5">
        <div class="carousel-caption d-md-block">
          <h1 class="fw-bold fs-1">Stats</h1>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden"></span>
    </button>
  `;
  const carruselContainer = document.getElementById('carouselExampleCaptions');
  carruselContainer.innerHTML = Carrusel;
}

export function loadFooter() {
    const Footer = `
        <ul class="nav col-12 col-md-6 justify-content-center justify-content-md-start list-unstyled d-flex mb-4">
        <li class="ms-3"><a class="text-body-secondary d-flex justify-content-center align-items-center" href="#">
            <img src="./Recursos_Amazing_Events_Task_1/facebook.png" class="img-fluid w-50" alt="Facebook">
          </a>
        </li>
        <li class="ms-3"><a class="text-body-secondary d-flex justify-content-center align-items-center" href="#">
            <img src="./Recursos_Amazing_Events_Task_1/instagram.png" class="img-fluid w-50" alt="Instagram">
        </a></li>
        <li class="ms-3"><a class="text-body-secondary d-flex justify-content-center align-items-center" href="#">
            <img src="./Recursos_Amazing_Events_Task_1/whatsapp.png" class="img-fluid w-50" alt="whatsapp">
        </a></li>
      </ul>
      <!--Contenedor del Logo y empresa-->
      <div class="col-12 col-md-6 d-flex flex-column align-items-center align-items-md-end">
        <a href="index.html" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1 d-flex justify-content-center justify-content-md-end logo-footer">
          <img src="./Recursos_Amazing_Events_Task_1/amazing_brand.png" class="img-fluid" alt="Amazing Brand" width="200" height="100">
        </a>
        <span class="mb-3 mb-md-0 text-body-secondary pe-2">© 2024 Company, Inc</span>
      </div>
    `;
    const footerContainer = document.getElementById('footer');
    footerContainer.innerHTML = Footer;
}

export function renderEvents(events) {
    const cardContainer = document.getElementById('card-temple');
    if (events.length === 0) {
        cardContainer.innerHTML = `
          <div class="no-results">
            <h3>"UPSS.... " Lo sentimos al parecer, no hay buenas coincidencias para tu búsqueda.</h3>
            <ul>
              <li>Revisa la ortografía de la palabra.</li>
              <li>Asegurate de escribir sin carácteres especiales.</li>
              <li>Desactiva las casillas para mayores resultados.</li>
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

