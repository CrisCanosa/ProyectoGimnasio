var rIndex
var table = document.getElementById('tablaStock')

// comprobar si el input esta vacío
function comprobarInputvacío() {
    var isEmpty = false,
        codigo = document.getElementById('codigo').value,
        familia = document.getElementById('familia').value,
        ubicacion = document.getElementById('ubicacion').value,
        unidad = document.getElementById('unidad').value,
        cantidad = document.getElementById('cantidad').value
        

        if (codigo =='') {
            Swal.fire({
                title: 'El campo codigo no puede estar vacío.',
                text: 'Por favor, inténtalo de nuevo',
                icon: 'warning',
                confirmButtonText: 'Reintentar',
            })
            isEmpty = true
        } else if (familia == '') {
            Swal.fire({
                title: 'El campo familia no puede estar vacío.',
                text: 'Por favor, inténtalo de nuevo',
                icon: 'warning',
                confirmButtonText: 'Reintentar',
            })
            isEmpty = true
        } else if (ubicacion == '') {
            Swal.fire({
                title: 'El campo ubicacion no puede estar vacío.',
                text: 'Por favor, inténtalo de nuevo',
                icon: 'warning',
                confirmButtonText: 'Reintentar',
            })
            isEmpty = true
        } else if (unidad == '') {
            Swal.fire({
                title: 'El campo unidad no puede estar vacío.',
                text: 'Por favor, inténtalo de nuevo',
                icon: 'warning',
                confirmButtonText: 'Reintentar',
            })
            isEmpty = true
        } else if (cantidad == '') {
            Swal.fire({
                title: 'El campo cantidad no puede estar vacío.',
                text: 'Por favor, inténtalo de nuevo',
                icon: 'warning',
                confirmButtonText: 'Reintentar',
            })
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
    if (!comprobarInputvacío()) {
        var filaNueva = table.insertRow(table.length),
            fila1 = filaNueva.insertCell(0),
            fila2 = filaNueva.insertCell(1),
            fila3 = filaNueva.insertCell(2),
            fila4 = filaNueva.insertCell(3),
            fila5 = filaNueva.insertCell(4),
          
            
            codigo = document.getElementById('codigo').value,
            familia = document.getElementById('familia').value,
            ubicacion = document.getElementById('ubicacion').value,
            unidad = document.getElementById('unidad').value,
            cantidad = document.getElementById('cantidad').value
          

        fila1.innerHTML = codigo
        fila2.innerHTML = familia
        fila3.innerHTML = ubicacion
        fila4.innerHTML = unidad
        fila5.innerHTML = cantidad
        

        // llamar a la función para establecer el evento en la nueva fila
        selecionarFila()
    }
    Swal.fire({
        title: 'Artículo añadido',
        text: 'El artículo ha sido añadido con éxito',
        icon: 'success',
        confirmButtonText: 'Aceptar',
    })
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
           
        }
    }
}
selecionarFila()

function editarFila() {
    var codigo = document.getElementById('codigo').value,
        familia = document.getElementById('familia').value,
        ubicacion = document.getElementById('ubicacion').value,
        unidad = document.getElementById('unidad').value,
        cantidad = document.getElementById('cantidad').value
       
    if (!comprobarInputvacío()) {
        table.rows[rIndex].cells[0].innerHTML = codigo
        table.rows[rIndex].cells[1].innerHTML = familia
        table.rows[rIndex].cells[2].innerHTML = ubicacion
        table.rows[rIndex].cells[3].innerHTML = unidad
        table.rows[rIndex].cells[4].innerHTML = cantidad
      
    }
    Swal.fire({
        title: 'Artículo modificado',
        text: 'El artículo ha sido modificado con éxito',
        icon: 'success',
        confirmButtonText: 'Aceptar',
    })
}

function borrarFila() {
   
    table.deleteRow(rIndex)
   
    // borrar el texto de entrada
    document.getElementById('codigo').value = ''
    document.getElementById('familia').value = ''
    document.getElementById('ubicacion').value = ''
    document.getElementById('unidad').value = ''
    document.getElementById('cantidad').value = ''

    Swal.fire({
        title: 'Artículo eliminado',
        text: 'El artículo ha sido eliminado con éxito',
        icon: 'success',
        confirmButtonText: 'Aceptar',
    })
    
}
