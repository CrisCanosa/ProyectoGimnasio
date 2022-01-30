function horarioManhana () {

    contenedorHorario = document.getElementById('contenedorHorario')

    contenedorHorario.innerHTML = " "

    const para = document.createElement("p");
    const lista = document.createElement("ul");
    const elementoLista1 = document.createElement("li");
    const elementoLista2 = document.createElement("li");
    const elementoLista3 = document.createElement("li");
    para.innerHTML = "Horario de mañana, (de lunes a viernes)";

    elementoLista1.innerHTML = "09:00 - 11:00"
    elementoLista2.innerHTML = "11:00 - 13:00"
    elementoLista3.innerHTML = "13:00 - 15:00"

    // Append to another element:
    contenedorHorario.appendChild(para);
    contenedorHorario.appendChild(lista);
    contenedorHorario.appendChild(elementoLista1);
    contenedorHorario.appendChild(elementoLista2);
    contenedorHorario.appendChild(elementoLista3);


}

function horarioTarde () {

    contenedorHorario = document.getElementById('contenedorHorario')

    contenedorHorario.innerHTML = " "

    const para = document.createElement("p");
    const lista = document.createElement("ul");
    const elementoLista1 = document.createElement("li");
    const elementoLista2 = document.createElement("li");
    const elementoLista3 = document.createElement("li");
    const elementoLista4 = document.createElement("li");
    const elementoLista5 = document.createElement("li");
    para.innerHTML = "Horario de tarde, (de lunes a domingo)";

    elementoLista1.innerHTML = "16:00 - 17:00"
    elementoLista2.innerHTML = "17:00 - 18:00"
    elementoLista3.innerHTML = "18:00 - 19:00"
    elementoLista4.innerHTML = "19:00 - 20:00"
    elementoLista5.innerHTML = "20:00 - 21:00"

    // Append to another element:
    contenedorHorario.appendChild(para);
    contenedorHorario.appendChild(lista);
    contenedorHorario.appendChild(elementoLista1);
    contenedorHorario.appendChild(elementoLista2);
    contenedorHorario.appendChild(elementoLista3);
    contenedorHorario.appendChild(elementoLista4);
    contenedorHorario.appendChild(elementoLista5);
}
