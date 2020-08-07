// planet by terrain 
document.addEventListener('DOMContentLoaded', () => {

    //variable para el id del grid
    const div = document.getElementById('grid-cards');
    //función de llamada al API
    const API = 'https://swapi.dev/api/';
    // https://swapi.dev/api/
    fetch(API + 'planets/', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        },
    }) // respuesta al en formato JSON y formato de data a crear
        .then((response) => response.json())
        .then((data) => {
            for (let i = 0; i < data.results.length; i++) {
                let planet = data.results[i];
                let t = `<div class="card">
        <div class="information">
          <h1 id="name">${planet.name}</h1>
          <h3 id="terrain">Terrain: ${planet.terrain}</h3>
          <p id="rotation_period">Rotation Period: ${planet.rotation_period}</p>
          <p id="diameter">Diameter: ${planet.diameter}</p>
          <p id="gravity">Gravity: ${planet.gravity}</p>
          <p id="population">Population: ${planet.population}</p>
          <p id="climate">Climate: ${planet.climate}</p>
        </div>
      </div>`;
                div.innerHTML += t;
                console.log(t);
            }
        });
});