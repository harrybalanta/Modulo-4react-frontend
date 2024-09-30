let container = document.getElementById("container")
let boton = document.getElementById("mostrar")

boton.addEventListener("click", mostraTarea2, true)
const url = 'https://randomuser.me/api/';
function mostraTarea2() {
    console.log("ingresamos");

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data, "data----");
            container.innerHTML = `
            <img src="${data.results[0].picture.large}">
            <h5> Celular: ${data.results[0].cell}</h5>
            <h5> Email: ${data.results[0].email}</h5>
             <h6> Email: ${data.results[0].gender}</h6>
                <h3> Nombre: ${data.results[0].name.first} ${data.results[0].name.last}</h3>
            `;
        })
}