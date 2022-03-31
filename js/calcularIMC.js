
document.getElementById('resultadoIMC').style.display = 'none'
let clasificacion = document.getElementsByClassName('clasificacion')

function calcularIMC() {
    var peso, altura, imc, estado
    //hacemos la llamada a los datos introducidos
    peso = document.getElementById('peso').value
    altura = document.getElementById('altura').value / 100
    //calculamos el imc
    imc = peso / (altura * altura)
    //enviamos el resultado a la caja correspondiente y lo reducimos a 2 decimales
    document.getElementById('imc').value = imc.toFixed(2)
    document.getElementById('resultadoIMC').style.display = 'block'

    for (var i = 0; i < clasificacion.length; i++) {
        clasificacion[i].style.fontWeight = 'normal'
    }

    if (peso != '' && altura != '') {
        if (imc <= 16) {
            estado = 'Delgadez severa'
            clasificacion[0].style.fontWeight = 'bold'
        } else if (imc >= 16 && imc <= 16.99) {
            estado = 'Delgadez moderada'
            clasificacion[1].style.fontWeight = 'bold'
        } else if (imc >= 17 && imc <= 18.49) {
            estado = 'Delgadez aceptable'
            clasificacion[2].style.fontWeight = 'bold'
        } else if (imc >= 18.5 && imc <= 24.99) {
            estado = 'Peso normal'
            clasificacion[3].style.fontWeight = 'bold'
        } else if (imc >= 25 && imc <= 29.99) {
            estado = 'Sobrepeso'
            clasificacion[4].style.fontWeight = 'bold'
        } else if (imc >= 30 && imc <= 34.99) {
            estado = 'Obeso Tipo I'
            clasificacion[5].style.fontWeight = 'bold'
        } else if (imc >= 35 && imc <= 40) {
            estado = 'Obesidad tipo II'
            clasificacion[6].style.fontWeight = 'bold'
        } else if (imc > 40) {
            estado = 'Obesidad tipo III'
            clasificacion[7].style.fontWeight = 'bold'
        }
    }
    document.getElementById('estado').value = estado

    /*VALIDACIONES*/
    var fPeso = document.forms['miFormulario']['peso']
    var fAltura = document.forms['miFormulario']['altura']

    if (fPeso.value == '') {
        Swal.fire({
            title: 'No has introducido ningún peso',
            text: 'Por favor, inténtalo de nuevo',
            icon: 'warning',
            confirmButtonText: 'Reintentar',
        })
        document.getElementById('resultadoIMC').style.display = 'none'
    } else if (fAltura.value == '') {
        Swal.fire({
            title: 'No has introducido ninguna altura',
            text: 'Por favor, inténtalo de nuevo',
            icon: 'warning',
            confirmButtonText: 'Reintentar',
        })
        document.getElementById('resultadoIMC').style.display = 'none'
    } else if (fPeso.value >= 500 ) {
        Swal.fire({
            title: 'No has introducido un peso válido',
            text: 'Por favor, inténtalo de nuevo',
            icon: 'warning',
            confirmButtonText: 'Reintentar',
        })
        document.getElementById('resultadoIMC').style.display = 'none'
    } else if (fAltura.value <= 44 ) {
        Swal.fire({
            title: 'No has introducido una altura válida',
            text: 'Por favor, inténtalo de nuevo',
            icon: 'warning',
            confirmButtonText: 'Reintentar',
        })
        document.getElementById('resultadoIMC').style.display = 'none'
    }
    


}

function limpiar() {
    document.getElementById('miFormulario').reset()
    document.getElementById('resultadoIMC').style.display = 'none'

    for (var i = 0; i < clasificacion.length; i++) {
        clasificacion[i].style.fontWeight = 'normal'
    }
    Swal.fire({
        title: "Limpieza de resultados",
        text: "La limpieza se ha realizado correctamente",
        icon: "success",
        confirmButtonText: 'Aceptar',
    });
}
