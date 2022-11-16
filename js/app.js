// Variables
const resultado = document.querySelector("#resultado");
const year = document.querySelector("#year");

const max = new Date().getFullYear();
const min = max - 10;

// Eventos
document.addEventListener("DOMContentLoaded", () =>{
    mostrarAutos();  // muestra los autos al cargar

    // Llena la opcion de años
    llenarSelect();
})

// Funciones
function mostrarAutos() {
    autos.forEach(auto => {

        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement("p");

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color}
        `

        // Insertaren el HTML
        resultado.appendChild(autoHTML);
    })
}

// Genera los años del select
function llenarSelect() {
    for (let i = max; i >= min; i--) {
        const opcion = document.createElement("option");
        opcion.textContent = i;
        year.appendChild(opcion);  // agrega los años al select
    }
}