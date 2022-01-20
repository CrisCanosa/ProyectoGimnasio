function calcularCategoria() {
    let fecha = document.getElementById('fecha')
    // console.log(fecha.value)
    var resultado = document.getElementsByClassName('resultado')
    let array = fecha.value.split('-')
    // console.log(array)
    let hoy = new Date()
    let fechaNacimiento = new Date(array[0], Number(array[1]) - 1, array[2])
    // console.log(fechaNacimiento)
    let edad = hoy.getTime() - fechaNacimiento.getTime()
    edad = edad / (1000 * 60 * 60 * 24 * 365)
    console.log(edad)

    for (var i = 0; i < resultado.length; i++) {
        resultado[i].style.fontWeight = 'normal'
    }

    if (edad <= 6) {
        resultado[0].style.fontWeight = 'bold'
    } else if (edad >= 7 && edad < 9) {
        resultado[1].style.fontWeight = 'bold'
    } else if (edad >= 9 && edad < 11) {
        resultado[2].style.fontWeight = 'bold'
    } else if (edad >= 11 && edad < 13) {
        resultado[3].style.fontWeight = 'bold'
    } else if (edad >= 13 && edad < 15) {
        resultado[4].style.fontWeight = 'bold'
    } else if (edad >= 15 && edad < 17) {
        resultado[5].style.fontWeight = 'bold'
    } else if (edad >= 17 && edad < 19) {
        resultado[6].style.fontWeight = 'bold'
    } else if (edad >= 19) {
        resultado[7].style.fontWeight = 'bold'
    }
}
