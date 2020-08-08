// Fetch and Count

document.addEventListener('DOMContentLoaded', () => {
    // variable para el container
    const div = document.getElementById('card-container');
    // función para encontrar el caracter más usado
    const contarCaracteres = str1 => {
        var c = {};
        str1.replace(/\S/g, function (l) {
            c[l] = isNaN(c[l]) ? 1 : c[l] + 1;
        });
        return c;
    }
    const comparador = (a, b) => {
        return a[1] - b[1];
    }
    //función de fetch al API
    const API = 'https://randomuser.me/api/';
    // https://randomuser.me/api/
    fetch(API + '?results=5', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        },
    }) // respuesta en JSON y formato de envio de data
        .then((response) => response.json())
        .then((data) => {
            for (let i = 0; i < data.results.length; i++) {
                let person = data.results[i];
                let nombreCompleto = person.name.first + person.name.last;
                nombreCompleto = nombreCompleto.toLowerCase();
                let cuentaDeLetras = Object.entries(contarCaracteres(nombreCompleto)).sort(comparador).reverse();
                let letraMasUsada = cuentaDeLetras[0][0];
                let t = `<div class="card">
            <div class="information">
              <h1 id="name">Name: ${person.name.first} ${person.name.last}</h1>
              <h3 id="gender">Gender: ${person.gender}</h3>
              <p id="location">Country: ${person.location.country}</p>
              <p id="age">Age: ${person.dob.age}</p>
              <p id="email">Email: ${person.email}</p>
              <p id="caracter">Letra comun: ${letraMasUsada}
            </div>
          </div>`;
                div.innerHTML += t;
            }
        });
});
