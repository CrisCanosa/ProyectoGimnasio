function categoria() {
    let fecha = document.getElementById('fecha')
    // console.log(fecha.value)
    let resultado = document.getElementsByClassName('resultado')
    let array = fecha.value.split('-')
    // console.log(array)
    let hoy = new Date()
    let fechaNacimiento = new Date(array[0], Number(array[1]) - 1, array[2])
    // console.log(fechaNacimiento)
    let edad = hoy.getTime() - fechaNacimiento.getTime()
    edad = edad / (1000 * 60 * 60 * 24 * 365)
    if (edad > 3 && edad <= 9) {
        resultado[0].style.fontWeight = 'bold'
    } else if (edad > 9 && edad <= 15) {
    } else if (edad > 15 && edad <= 20) {
    }
}
