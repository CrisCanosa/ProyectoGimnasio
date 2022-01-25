document.getElementById('resultado2').style.display = 'none'

function calcularIMC() {
    var peso, altura, imc, estado
    //hacemos la llamada a los datos introducidos
    peso = document.getElementById('peso').value
    altura = document.getElementById('altura').value / 100
    //calculamos el imc
    imc = peso / (altura * altura)
    //enviamos el resultado a la caja correspondiente y lo reducimos a 2 decimales
    document.getElementById('imc').value = imc.toFixed(2)
    document.getElementById('resultado2').style.display = 'block'

    if (peso != '' && altura != '') {
        if (imc <= 16) {
            estado = 'Delgadez severa'

            // estado = `Delgadez severa ${(altura * altura * 16 - peso).toFixed(1)} kilos`
        } else if (imc >= 16 && imc <= 16.99) {
            estado = 'Delgadez moderada'
        } else if (imc >= 17 && imc <= 18.49) {
            estado = 'Delgadez aceptable'
        } else if (imc >= 18.5 && imc <= 24.99) {
            estado = 'Peso normal'
        } else if (imc >= 25 && imc <= 29.99) {
            estado = 'Sobrepeso'
        } else if (imc >= 30 && imc <= 34.99) {
            estado = 'Obeso Tipo I'
        } else if (imc >= 35 && imc <= 40) {
            estado = 'Obesidad tipo II'
        } else if (imc > 40) {
            estado = 'Obesidad tipo III'
        }
    }
    document.getElementById('estado').value = estado

    /*VALIDACIONES*/
    var fPeso = document.forms['miForm']['peso']
    var fAltura = document.forms['miForm']['altura']
    if (fPeso.value == '' && fAltura.value == '') {
        alert('Introduce tu peso o altura:')
        document.getElementById('resultado2').style.display = 'none'
    }
}

function limpiar() {
    document.getElementById('miForm').reset()
    document.getElementById('resultado2').style.display = 'none'
    console.log('Estoy ejecutando clear')
}
