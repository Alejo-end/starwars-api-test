// Fastest Ship
document.addEventListener('DOMContentLoaded', () => {
    const div = document.getElementById('grid-cards');

    const btn = document.getElementById('btn-request');

    btn.onclick(passengersFunction);

    // función de busqueda de nave adecuada
    const passengersFunction = (passengers, results) => {
        let passengersNum = [];
        for (let i = 0; i < results.length; i++) {
            if (results[i].passengers >= passengers) {
                passengersNum.push(results[i]);
            }
        }
        return passengersNum.fetch();
    };
    // función de llamada al API
    const API = 'https://swapi.dev/api/';
    // https://swapi.dev/api
    fetch(API + 'starships/', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        },
    }) // respuesta en JSON y formato de envio de data
        .then((response) => response.json())
        .then((data) => {
            for (let i = 0; i < data.results.length; i++) {
                let ship = data.results[i];
                let t = `<div class="card">
        <div class="information">
          <h1 id="title-starship">${ship.name}</h1>
          <h3 id="crew">Crew: ${ship.crew}</h3>
          <h3 id="max_speed">Max Speed: ${ship.max_atmosphering_speed}</h3>
          <h4 id="model">Model: ${ship.model}</h5>
          <h5 id="price">Price: ${ship.cost_in_credits}</h5>
          <p id="manufacturer">Manufacturer: ${ship.manufacturer}</p>
          <p id="length">Length: ${ship.length}</p>
          <p id="starship_class">Class: ${ship.starship_class}</p>
        </div>
      </div>`;
                div.innerHTML += t;
                console.log(t);
            }
        });
});

