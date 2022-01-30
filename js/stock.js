var rIndex
var table = document.getElementById('tablaStock')

// comprobar si el input esta vacio
function comprobarInputVacio() {
    var isEmpty = false,
        codigo = document.getElementById('codigo').value,
        familia = document.getElementById('familia').value,
        ubicacion = document.getElementById('ubicacion').value,
        unidad = document.getElementById('codigo').value,
        cantidad = document.getElementById('familia').value,
        precio = document.getElementById('ubicacion').value

    if (codigo === '') {
        alert('El Codigo no puede estar vacio')
        isEmpty = true
    } else if (familia === '') {
        alert('La familia no puede estar vacio')
        isEmpty = true
    } else if (ubicacion === '') {
        alert('La ubicacion no puede estar vacio')
        isEmpty = true
    } else if (unidad === '') {
        alert('La unidad no puede estar vacio')
        isEmpty = true
    } else if (cantidad === '') {
        alert('La cantidad no puede estar vacio')
        isEmpty = true
    } 
    return isEmpty
}

// añadir fila
function agregarHtml() {
    // obtener la tabla por id
    // crea una nueva fila y celdas
    // obtener valor del texto de entrada
    // establece los valores en las celdas de la fila
    if (!comprobarInputVacio()) {
        var filaNueva = table.insertRow(table.length),
            fila1 = filaNueva.insertCell(0),
            fila2 = filaNueva.insertCell(1),
            fila3 = filaNueva.insertCell(2),
            fila4 = filaNueva.insertCell(3),
            fila5 = filaNueva.insertCell(4),
            fila6 = filaNueva.insertCell(5),
            
            codigo = document.getElementById('codigo').value,
            familia = document.getElementById('familia').value,
            ubicacion = document.getElementById('ubicacion').value,
            unidad = document.getElementById('unidad').value,
            cantidad = document.getElementById('cantidad').value,
            precio = document.getElementById('precio').value

        fila1.innerHTML = codigo
        fila2.innerHTML = familia
        fila3.innerHTML = ubicacion
        fila4.innerHTML = unidad
        fila5.innerHTML = cantidad
        fila6.innerHTML = precio

        // llamar a la función para establecer el evento en la nueva fila
        selecionarFila()
    }
}

// mostrar los datos de la fila seleccionada en el texto de entrada
function selecionarFila() {
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            // obtener el índice de la fila seccionada
            rIndex = this.rowIndex
            document.getElementById('codigo').value = this.cells[0].innerHTML
            document.getElementById('familia').value = this.cells[1].innerHTML
            document.getElementById('ubicacion').value = this.cells[2].innerHTML
            document.getElementById('unidad').value = this.cells[3].innerHTML
            document.getElementById('cantidad').value = this.cells[4].innerHTML
            document.getElementById('precio').value = this.cells[5].innerHTML
        }
    }
}
selecionarFila()

function editarFila() {
    var codigo = document.getElementById('codigo').value,
        familia = document.getElementById('familia').value,
        ubicacion = document.getElementById('ubicacion').value,
        unidad = document.getElementById('unidad').value,
        cantidad = document.getElementById('cantidad').value,
        precio = document.getElementById('precio').value
    if (!comprobarInputVacio()) {
        table.rows[rIndex].cells[0].innerHTML = codigo
        table.rows[rIndex].cells[1].innerHTML = familia
        table.rows[rIndex].cells[2].innerHTML = ubicacion
        table.rows[rIndex].cells[3].innerHTML = unidad
        table.rows[rIndex].cells[4].innerHTML = cantidad
        table.rows[rIndex].cells[5].innerHTML = precio
    }
}

function borrarFila() {
   
    table.deleteRow(rIndex)
   
    // borrar el texto de entrada
    document.getElementById('codigo').value = ''
    document.getElementById('familia').value = ''
    document.getElementById('ubicacion').value = ''
    document.getElementById('unidad').value = ''
    document.getElementById('cantidad').value = ''
    document.getElementById('precio').value = ''
}
