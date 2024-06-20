

// setteo fecha actual para mostrar en cabecera de calendario
const fechaActual = document.querySelector(".fecha-actual");
const diasCalendario = document.querySelector(".dias");
const flechitas = document.querySelectorAll(".simbolos span");

// obteniendo anio y mes actual
let fecha = new Date();
anioActual = fecha.getFullYear();
mesActual = fecha.getMonth();

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const mostrarCalendario = () => {
    fechaActual.innerText = `${meses[mesActual]} ${anioActual}`;

    let primerDiaMes = new Date(anioActual, mesActual, 1).getDay();
    let ultimaFechaMes = new Date(anioActual, mesActual+1, 0).getDate();
    let ultimoDiaMes = new Date(anioActual, mesActual, ultimaFechaMes).getDay();
    let ultimaFechaUltimoMes = new Date(anioActual, mesActual, 0).getDate();
    let li = "";

    for (let i = primerDiaMes; i>0; i--){
        li += `<li class="inactive">${ultimaFechaUltimoMes - i + 1}</li>`;
    }

    for (let i = 1; i <= ultimaFechaMes; i++){
        let esHoy = i === fecha.getDate() && mesActual === new Date().getMonth() && anioActual === new Date().getFullYear() ? "active" : "";
        li += `<li class="${esHoy}">${i}</li>`;
    }

    for (let i = ultimoDiaMes; i < 6; i++){
        li += `<li class="inactive">${i - ultimoDiaMes + 1}</li>`;
    }

    diasCalendario.innerHTML = li;
}

mostrarCalendario();

flechitas.forEach(simbolo => {
    simbolo.addEventListener('click', () =>{
        mesActual = simbolo.id === "anterior" ? mesActual-1 : mesActual+1;

        if (mesActual < 0 || mesActual > 11){
            fecha = new Date(anioActual, mesActual);
            anioActual = fecha.getFullYear();
            mesActual = fecha.getMonth();
        } else{
            fecha = new Date();
        }

        mostrarCalendario();
    })
});