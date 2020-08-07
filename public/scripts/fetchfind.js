//fetch and find

document.addEventListener('DOMContentLoaded', () => {

    //variables div y btn para el grid y el botón de request
    const div = document.getElementById('card-container');
    const btn = document.getElementById('btn-request');
    const ageInput = document.getElementById('age');

    // request al API
    btn.onclick = fetchAPI;

    //función de filtrado recibiendo datos de edad y array
    const findFunction = (age, results) => {
        let filtrado = [];
        for (let i = 0; i < results.length; i++) {
            if (results[i].dob.age >= age) {
                filtrado.push(results[i]);
            }
        }
        return filtrado;
    }

    //función de llamada al API
    const API = 'https://randomuser.me/api/';

    // https://randomuser.me/api/
    function fetchAPI() {
        const age = Number(ageInput.value);

        if (age > 100 || age <= 0) {
            alert("Edad invalida.");
            return;
        }

        fetch(API + '?results=100', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        }) // respuesta al en formato JSON y formato de data a crear
            .then((response) => response.json())
            .then((data) => {
                div.innerHTML = '';
                data.results = findFunction(age, data.results);
                if (data.results.length == 0) {
                    div.innerHTML = 'No se han encontrado resultados. Intente con otra edad.';
                } else {
                    for (let i = 0; i < data.results.length && i < 5; i++) {
                        let person = data.results[i];
                        let t = `<div class="card">
            <div class="information">
                <h1 id="name">Name: ${person.name.first} ${person.name.last}</h1>
                <h3 id="gender">Gender: ${person.gender}</h3>
                <p id="location">Country: ${person.location.country}</p>
                <p id="age">Age: ${person.dob.age}</p>
                <p id="email">Email: ${person.email}</p>
            </div>
            </div>`;
                        div.innerHTML += t;

                    }
                }
            });
    }
});

