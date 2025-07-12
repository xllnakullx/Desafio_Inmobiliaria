const propiedadesVenta = {
  venta: true,
  propiedades: [
    {
      img: './assets/img/venta-1.jpg',
      title: 'Apartamento de lujo en zona exclusiva',
      description: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
      location: '123 Luxury Lane, Prestige Suburb, CA 45678',
      bedrooms: 4,
      bathrooms: 4,
      cost: 5000,
      smoke: true,
      pets: false,
    },
    {
      img: './assets/img/venta-2.webp',
      title: 'Apartamento acogedor en la montaña',
      description: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
      location: '789 Mountain Road, Summit Peaks, CA 23456',
      bedrooms: 2,
      bathrooms: 1,
      cost: 1200,
      smoke: true,
      pets: true,
    },
    {
      img: './assets/img/venta-3.avif',
      title: 'Departamento en pisos altos con vista al mar',
      description: 'Este departamento en los pisos altos ofrece una vista espectacular al mar',
      location: '666 Ocean View, Highrise City, CA 56789',
      bedrooms: 2,
      bathrooms: 2,
      cost: 2500,
      smoke: true,
      pets: true,
    },
    {
      img: './assets/img/venta-4.jpg',
      title: 'Departamento moderno con vista al mar',
      description: 'Este departamento moderno ofrece una vista espectacular al mar',
      location: '222 Ocean Drive, Beachfront, CA 34567',
      bedrooms: 3,
      bathrooms: 3,
      cost: 4500,
      smoke: false,
      pets: true,
    },
    {
      img: './assets/img/venta-5.webp',
      title: 'Departamento de lujo con terraza panorámica',
      description: 'Este departamento de lujo cuenta con una terraza panorámica con vista a la ciudad',
      location: '6752 Skyline Avenue, Cityscape, CA 45678',
      bedrooms: 4,
      bathrooms: 4,
      cost: 6500,
      smoke: true,
      pets: true,
    }
  ]
}

const propiedadesAlquiler = {
  venta: false,
  propiedades: [{
    img: './assets/img/alquiler-1.avif',
    title: 'Apartamento en el centro de la ciudad',
    description: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo',
    location: '123 Main Street, Anytown, CA 91234',
    bedrooms: 2,
    bathrooms: 2,
    cost: 5000,
    smoke: false,
    pets: true,
  },
  {
    img: './assets/img/alquiler-2.avif',
    title: 'Apartamento luminoso con vista al mar',
    description: 'Este hermoso apartamento ofrece una vista impresionante al mar',
    location: '456 Ocean Avenue, Seaside Town, CA 56789',
    bedrooms: 3,
    bathrooms: 3,
    cost: 2500,
    smoke: true,
    pets: false,
  },
  {
    img: './assets/img/alquiler-3.avif',
    title: 'Condominio moderno en zona residencial',
    description: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    location: '123 Main Street, Anytown, CA 91234',
    bedrooms: 2,
    bathrooms: 2,
    cost: 2200,
    smoke: false,
    pets: false,
  },
  {
    img: './assets/img/alquiler-4.jpg',
    title: 'Departamento con vista al parque',
    description: 'Este departamento de 2 habitaciones tiene una vista hermosa al parque',
    location: '456 Park Avenue, Parkside, CA 34567',
    bedrooms: 2,
    bathrooms: 1,
    cost: 1500,
    smoke: true,
    pets: true,
  }
    ,
  {
    img: './assets/img/alquiler-5.jpg',
    title: 'Departamento de lujo en zona exclusiva con vista al parque',
    description: 'Este departamento de lujo está ubicado en una exclusiva zona residencial con vista al parque',
    location: '456 Park Avenue, Otro lado, BA 22312',
    bedrooms: 5,
    bathrooms: 3,
    cost: 5600,
    smoke: false,
    pets: true,
  }
  ]
}

const venta = document.querySelector('#venta')
const alquiler = document.querySelector('#alquiler')

const renderPropiedades = (obj, container, cantidad) => {
  console.log(obj, container);

  const h1 = document.createElement('h1')
  h1.textContent = `Propiedades en ${obj.venta ? 'venta' : 'alquiler'}`
  container.appendChild(h1)

  const divRow = document.createElement('div')
  divRow.classList.add('row', 'mb-4')
  container.appendChild(divRow)

  const propiedades = obj.propiedades.slice(0, cantidad)

  for (const { img, title, description, location, bedrooms, bathrooms, cost, smoke, pets } of propiedades) {
    const smokeClass = smoke ? 'text-success' : 'text-danger'
    const smokeText = smoke ? 'Se permite fumar' : 'No se permite fumar'
    const smokeIcon = smoke ? 'fa-smoking' : 'fa-smoking-ban'
    const petsClass = pets ? 'text-success' : 'text-danger'
    const petsText = pets ? 'Mascotas permitidas' : 'No se permiten mascotas'
    const petsIcon = pets ? 'fas fa-paw' : 'fa-solid fa-ban'

    const div = document.createElement('div')
    div.classList.add('col-md-4', 'mb-4')
    div.innerHTML = `
          <div class="card">
            <img src="${img}" class="card-img-top" alt="Imagen del departamento" />
            <div class="card-body">
              <h5 class="card-title">
                ${title}
              </h5>
              <p class="card-text">
                ${description}
              </p>
              <p>
                <i class="fas fa-map-marker-alt"></i> ${location}
              </p>
              <p>
                <i class="fas fa-bed"></i> ${bedrooms} Habitaciones |
                <i class="fas fa-bath"></i> ${bathrooms} Baños
              </p>
              <p><i class="fas fa-dollar-sign"></i> ${cost}</p>
              <p class="${smokeClass}">
                <i class="fas ${smokeIcon}"></i> ${smokeText}
              </p>
              <p class="${petsClass}">
                <i class="${petsIcon}"></i> ${petsText}
              </p>
            </div>
          </div> 
          `
    divRow.appendChild(div)
  }

  if (cantidad) {
    const href = obj.venta ? 'propiedades_venta.html' : 'propiedades_alquiler.html'
    const btnText = obj.venta ? 'venta' : 'alquiler'
    const btnVerTodo = document.createElement('a')
    btnVerTodo.href = href
    btnVerTodo.classList.add('btn', 'btn-dark')
    btnVerTodo.textContent = `Ver más propiedades en ${btnText}`
    container.appendChild(btnVerTodo)
  }
}
