const resultado = document.querySelector('#resultado')
const year = document.querySelector('#year')
const marca = document.querySelector('#marca')
const minimo = document.querySelector('#minimo')
const maximo = document.querySelector('#maximo')
const puertas = document.querySelector('#puertas')
const transmision = document.querySelector('#transmision')
const color = document.querySelector('#color')


const max = new Date().getFullYear(); // new Date().getFullYear() trae el year en el que estamos
const min = max - 10;

/* console.log(max)
console.log(min) */

const datosBusqueda = {
    marca: '',
    year: '',
    color: '',
    transmision: '',
    puertas: '',
    minimo: '',
    maximo: '',

}


document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);

    //Llena las opciones de year
    llenarSelect()
})

//Event listener para los select de busquedas
marca.addEventListener('change', (e) => { //change es para cuando cambia el select
    datosBusqueda.marca = e.target.value;

    console.log(datosBusqueda)
    filtrarAuto();
})

year.addEventListener('change', (e) => { //change es para cuando cambia el select
    datosBusqueda.year = parseInt(e.target.value);

    console.log(datosBusqueda)
    filtrarAuto()
})

color.addEventListener('change', (e) => { //change es para cuando cambia el select
    datosBusqueda.color = e.target.value;

    console.log(datosBusqueda)
    filtrarAuto()
})

transmision.addEventListener('change', (e) => { //change es para cuando cambia el select
    datosBusqueda.transmision = e.target.value;

    console.log(datosBusqueda)
    filtrarAuto()
})

puertas.addEventListener('change', (e) => { //change es para cuando cambia el select
    datosBusqueda.puertas = parseInt(e.target.value);

    console.log(datosBusqueda)
    filtrarAuto()
})

minimo.addEventListener('change', (e) => { //change es para cuando cambia el select
    datosBusqueda.minimo = e.target.value;

    console.log(datosBusqueda)
    filtrarAuto()
})

maximo.addEventListener('change', (e) => { //change es para cuando cambia el select
    datosBusqueda.maximo = e.target.value;

    console.log(datosBusqueda)
    filtrarAuto()
})













//Funciones
function mostrarAutos(autos){

    limpiarHTML() // elimina el html previo

    autos.forEach( auto => {
        const {marca , modelo, year, precio, puertas, color, transmision } = auto;

        const autoHTML = document.createElement('P')

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color}
        `;

        //insertar en html
        resultado.appendChild(autoHTML)
    })
}

//limpiarHTML
function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
}

//Genera los years del select
function llenarSelect() {
    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i

        year.appendChild(opcion)// agrega las opciones de year al select
        
    }
}

//filtra en base a la busqueda
function filtrarAuto() {
    //Funcion de alto nivel llamamos dentro del filter la funcion que creamos
    //ademas este metodo soporta el chaining o encadenamiento
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMinimo ).filter( filtrarMaximo ).filter( filtrarColor ).filter( filtrarPuertas ).filter( filtrarTransmision )

    
    if(resultado.length){
        mostrarAutos(resultado);
    } else {
        noResultado()
    }
}

function noResultado(){
    limpiarHTML()
    const sinResultado = document.createElement('DIV')

    sinResultado.classList.add('alerta', 'error')
    sinResultado.textContent = 'No hay resultado, Intenta con otros terminos de busqueda'

    resultado.appendChild(sinResultado)

}


function filtrarMarca(auto){
    const {marca} = datosBusqueda
    if (marca) {
        return auto.marca === marca;
    }
    return auto;
    // este codigo lo que hace es que si hay un valor en la busqueda de marca entonces filtro los que tienen esa marca y si no me traigo todos de regreso
}

function filtrarYear(auto){
    const {year} = datosBusqueda
    
    if (year) {
        return auto.year === year;
    }
    return auto;
    // este codigo lo que hace es que si hay un valor en la busqueda de marca entonces filtro los que tienen esa marca y si no me traigo todos de regreso
}

function filtrarMinimo(auto){
    const {minimo} = datosBusqueda
    
    if (minimo) {
        return auto.precio >= minimo;
    }
    return auto;
    // este codigo lo que hace es que si hay un valor en la busqueda de marca entonces filtro los que tienen esa marca y si no me traigo todos de regreso
}

function filtrarMaximo(auto){
    const {maximo} = datosBusqueda
    
    if (maximo) {
        return auto.precio <= maximo;
    }
    return auto;
    // este codigo lo que hace es que si hay un valor en la busqueda de marca entonces filtro los que tienen esa marca y si no me traigo todos de regreso
}

function filtrarColor(auto){
    const {color} = datosBusqueda
    
    if (color) {
        return auto.color === color;
    }
    return auto;
    // este codigo lo que hace es que si hay un valor en la busqueda de marca entonces filtro los que tienen esa marca y si no me traigo todos de regreso
}

function filtrarPuertas(auto){
    const {puertas} = datosBusqueda
    
    if (puertas) {
        return auto.puertas === puertas;
    }
    return auto;
    // este codigo lo que hace es que si hay un valor en la busqueda de marca entonces filtro los que tienen esa marca y si no me traigo todos de regreso
}

function filtrarTransmision(auto){
    const {transmision} = datosBusqueda
    
    if (transmision) {
        return auto.transmision === transmision;
    }
    return auto;
}