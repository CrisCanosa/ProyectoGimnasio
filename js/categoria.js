function calcularCategoria() {
    let fecha = document.getElementById('fecha')
    // console.log(fecha.value)
    var resultadoCategoria = document.getElementsByClassName('resultadoCategoria')
    let array = fecha.value.split('-')
    // console.log(array)
    let hoy = new Date()
    let fechaNacimiento = new Date(array[0], Number(array[1]) - 1, array[2])
    // console.log(fechaNacimiento)
    let edad = hoy.getTime() - fechaNacimiento.getTime()
    edad = edad / (1000 * 60 * 60 * 24 * 365)
    // console.log(edad)
    
    
    for (var i = 0; i < resultadoCategoria.length; i++) {
        resultadoCategoria[i].style.fontWeight = 'normal'
    }

    if (edad <= 7) {
        resultadoCategoria[0].style.fontWeight = 'bold'
    } else if (edad > 7 && edad <= 9) {
        resultadoCategoria[1].style.fontWeight = 'bold'
    } else if (edad > 9 && edad <= 11) {
        resultadoCategoria[2].style.fontWeight = 'bold'
    } else if (edad > 11 && edad <= 13) {
        resultadoCategoria[3].style.fontWeight = 'bold'
    } else if (edad > 13 && edad <= 15) {
        resultadoCategoria[4].style.fontWeight = 'bold'
    } else if (edad > 15 && edad <= 17) {
        resultadoCategoria[5].style.fontWeight = 'bold'
    } else if (edad > 17 && edad <= 19) {
        resultadoCategoria[6].style.fontWeight = 'bold'
    } else if (edad > 19) {
        resultadoCategoria[7].style.fontWeight = 'bold'
    }

    if (fechaNacimiento > hoy) {

        Swal.fire({
            title: 'Fecha incorrecta',
            text: 'La fecha de nacimiento no puede ser superior a la fecha actual',
            icon: 'warning',
            confirmButtonText: 'Reintentar',
        })
        for (var i = 0; i < resultadoCategoria.length; i++) {
            resultadoCategoria[i].style.fontWeight = 'normal'
        }
    }
}
