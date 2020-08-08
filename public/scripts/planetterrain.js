// planet by terrain 
document.addEventListener('DOMContentLoaded', () => {

    const div = document.getElementById('grid-cards');
    const terrainInput = document.getElementById('terrain');
    const btn = document.getElementById('btn-request');

    // request al API
    btn.onclick = fetchAPI;
    //función de filtrado recibiendo datos de edad y array
    const terrainFunction = (terrain, results) => {
        let filtrado = [];
        for (let i = 0; i < results.length; i++) {
            if (results[i].terrain >= terrain) {
                filtrado.push(results[i]);
            }
        }
        return filtrado;
    }
    if (filtrado.length) {
        if (filtrado.length > 1) {
            const cleanedfiltrado = filtrado.filter(
                (planet) => planet.population !== "unknown"
            );

            cleanedfiltrado.sort(
                (a, b) => parseInt(b.population) - parseInt(a.population)
            );
            return cleanedMatchingPlanets[0].name;
        } else {
            return matchingPlanets[0].name;
        }
    }
    else {
        return "";
    }

    //función de llamada al API
    const API = 'https://swapi.dev/api/';
    // https://swapi.dev/api/
    function fetchAPI() {
        const terrain = String(terrainInput.value);

        fetch(API + 'planets/', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        }) // respuesta al en formato JSON y formato de data a crear
            .then((response) => response.json())
            .then((data) => {
                div.innerHTML = '';
                data.results = terrainFunction(terrain, data.results);
                if (data.results.length == 0) {
                    div.innerHTML = 'No se han encontrado resultados. Intente con otro tipo de terreno.';
                } else {
                    for (let i = 0; i < data.results.length && i < 5; i++) {
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
                }
            });
    }
});