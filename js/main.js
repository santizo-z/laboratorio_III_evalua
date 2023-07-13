// Función asincrónica para recuperar los valores utilizando fetch
async function getUsuarios() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Error:', error);
    }
  }
  
  // Función para crear un componente individual por cada ítem de los datos
  function crearComponentes(data) {
    const container = document.getElementById('container');
  
    // Utilizando un bucle for para iterar sobre los datos
    data.forEach(item => {
      // Crear el componente individual
      const componente = document.createElement('div');
      componente.classList.add('componente');
  
      // Agregar contenido al componente
      const profilePicture = document.createElement('div');
      profilePicture.classList.add('profile-picture');
  
      const username = document.createElement('div');
      username.classList.add('username');
      username.textContent = item.username;
  
      const nombre = document.createElement('h2');
      nombre.textContent = item.name;
  
      const email = document.createElement('p');
      email.textContent = item.email;
  
      const telefono = document.createElement('p');
      telefono.textContent = item.phone;
  
      const compañia = document.createElement('p');
      compañia.textContent = item.company.name;
  
      // Agregar elementos al componente
      componente.appendChild(profilePicture);
      componente.appendChild(username);
      componente.appendChild(nombre);
      componente.appendChild(email);
      componente.appendChild(telefono);
      componente.appendChild(compañia);
  
      // Agregar componente al contenedor principal
      container.appendChild(componente);
    });
  }
  
  // Llamar a la función asincrónica y crear los componentes cuando se obtengan los datos
  getUsuarios()
    .then(data => crearComponentes(data))
    .catch(error => console.log(error));
  