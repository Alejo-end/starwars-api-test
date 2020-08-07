//fetch and find

document.addEventListener('DOMContentLoaded', () => {
    //variables div y btn para el grid y el botón de request
    const div = document.getElementById('card-container');
    const btn = document.getElementById('btn-request');
    // request al API
    btn.onclick = fetchAPI;
    //función de filtrado recibiendo datos de edad y array
    function findFunction(age, results) {
        let filtrado = [];
        for (let i = 0; i < results.length; i++) {
            if (results[i].age >= age) {
                filtrado.push(results[i]);
            }
        }
        return filtrado;
    }
    //función de llamada al API
    const API = 'https://randomuser.me/api/';
    // https://randomuser.me/api/
    function fetchAPI() {
        fetch(API + '?results=5', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        }) // respuesta al en formato JSON y formato de data a crear
            .then((response) => response.json())
            .then((data) => {
                div.innerHTML = '';
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
    }
});

