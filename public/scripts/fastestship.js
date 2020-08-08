
// Fastest Ship
document.addEventListener('DOMContentLoaded', () => {
    //variables para el grid, input de pasajeros y el botón de request
    const div = document.getElementById('grid-cards');
    const passengersInput = document.getElementById('passengers');
    const btn = document.getElementById('btn-request');

    // función de obtencion de los datos de las naves
    const obtenerDatos = async () => {

        let passengers = Number(passengersInput.value);
        let naves = [];
        let url = 'https://swapi.dev/api/starships/?page=1'

        while (url !== null) {
            let response = await fetch(url, {
                'method': 'GET',
                'Content-type': 'application/json',
            });
            let data = await response.json();
            url = data.next;

            for (let i = 0; i < data.results.length; i++) {
                naves.push(data.results[i]);
            }
        }
        let filtrado = [];

        // Filtrado de naves segun los requerimientos
        naves.forEach(el => {
            if (el.passengers >= passengers &&
                el.consumables !== '5 days' && (
                    el.films.includes("http://swapi.dev/api/films/4/") ||
                    el.films.includes("http://swapi.dev/api/films/5/") ||
                    el.films.includes("http://swapi.dev/api/films/6/"))
            )
                filtrado.push(el)
        });
        div.innerHTML = '';

        console.log(filtrado);

        if (filtrado.length === 0) {
            div.innerHTML = 'No se han encontrado resultados.';
        }

        // Se muestran los resultados
        filtrado.forEach(el => {

            let t = `<div class="card">
                <div class="information">
                <h1 id="title-starship">${el.name}</h1>
                <h3 id="passengers">Passengers: ${el.passengers}</h3>
                <h3 id="max_speed">Max Speed: ${el.max_atmosphering_speed}</h3>
                <h4 id="model">Model: ${el.model}</h5>
                <p id="manufacturer">Manufacturer: ${el.manufacturer}</p>
                <p id="consumables">Consumables: ${el.consumables}</p>
                </div>
            </div>`;

            div.innerHTML += t;
        })
    }

    btn.onclick = obtenerDatos;
});

