document.getElementById('edad');
document.getElementById('sexo');

const edadFormulario = document.getElementById('edad');
const sexoFormulario = document.getElementById('sexo');

function calcularFCM() {

    if (document.getElementById('sexo') == 'mujer') {
        // resultado = ( 210 - (0,5 x edad en años) ) - 1% del peso
        resultado = ( 210 - (0,5 * edadFormulario) ) - (0.01 * sexoFormulario)
    } else if (document.getElementById('sexo') == 'hombre') {
        // resultado = (( 210 - (0,5 x edad en años) ) - 1% del peso) + 4
        resultado = ( 210 - (0,5 * edadFormulario) ) - (0.01 * sexoFormulario) +4
    }
    return resultado;
}