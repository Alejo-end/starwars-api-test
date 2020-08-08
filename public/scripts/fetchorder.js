// fetch order

document.addEventListener('DOMContentLoaded', () => {
    //variables para el container
    const div = document.getElementById('card-container');
    // función de comparación de para ordenamiento alfabetico
    const compareFunction = (a, b) => {
        if (a.name.first > b.name.first) return 1;
        else if (a.name.first < b.name.first) return -1;
        else return 0;
    };
    // función de fetch al API
    const API = 'https://randomuser.me/api/';
    // https://randomuser.me/api/
    fetch(API + '?results=10', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        },
    }) // respuesta en JSON y formato de data a ser mostrada
        .then((response) => response.json())
        .then((data) => {
            // se ordenan los resultados y se muestran
            data.results.sort(compareFunction);
            for (let i = 0; i < data.results.length; i++) {
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
        });

});