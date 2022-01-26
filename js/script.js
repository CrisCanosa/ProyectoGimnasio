function postComment() {
    let nombre = document.getElementById('nombre').value
    let comentario = document.getElementById('comentario').value

    if (nombre == '' || comentario == '') {
        alert('Rellena los campos')
    } else {

        //Creamos los elementos para mostrar los comentarios
        let divPadre = document.createElement('div')
        let el_nombre = document.createElement('h5')
        let el_mensaje = document.createElement('p')
        let divisor = document.createElement('hr')
        let txt_nombre = document.createTextNode(nombre)
        let txt_mensaje = document.createTextNode(comentario)

        el_nombre.appendChild(txt_nombre)
        el_mensaje.appendChild(txt_mensaje)
        divisor.style.border = '1px dotted #ccc'
        divPadre.appendChild(el_nombre)
        divPadre.appendChild(divisor)
        divPadre.appendChild(el_mensaje)
        divPadre.setAttribute('class', 'well')
        document.getElementById('resultado').appendChild(divPadre)

        document.getElementById('nombre').value = ''
        document.getElementById('comentario').value = ''
    }
}
