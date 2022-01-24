function calcularFCM() {

    const edadFormulario = document.getElementById('edad');

    if (document.getElementById('genero') == 'femenino') {
        // resultado = ( 210 - (0,5 x edad en años) ) - 1% del peso
        // resultado = ( 210 - (0,5 * edadFormulario) ) - (0.01 * sexoFormulario)
        // FCmax = 208,1 – (0,77 x edad en años)

        resultado = 208.1 - (0.77 * edadFormulario)

    } else if (document.getElementById('genero') == 'masculino') {
        // resultado = (( 210 - (0,5 x edad en años) ) - 1% del peso) + 4
        // resultado = ( 210 - (0,5 * edadFormulario) ) - (0.01 * sexoFormulario) + 4
        // FCmax = 208,7 – (0,73 x edad en años)
        
        resultado = 208.7 - (0.73 * edadFormulario)

    }
    document.getElementById('fcm').value = resultado
    document.getElementById('estado').style.display = 'block'
}

function limpiar() {
    document.getElementById('miForm').reset()
    document.getElementById('resultado').style.display = 'none'
    console.log('Estoy ejecutando clear')
}