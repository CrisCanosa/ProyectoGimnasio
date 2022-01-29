// document.getElementById('resultadoIMC').style.display = 'none'

// function calcularIMC() {
//     var peso, altura, imc, estado
//     //hacemos la llamada a los datos introducidos
//     peso = document.getElementById('peso').value
//     altura = document.getElementById('altura').value / 100
//     //calculamos el imc
//     imc = peso / (altura * altura)
//     //enviamos el resultado a la caja correspondiente y lo reducimos a 2 decimales
//     document.getElementById('imc').value = imc.toFixed(2)
//     document.getElementById('resultadoIMC').style.display = 'block'

//     if (peso != '' && altura != '') {
//         if (imc <= 16) {
//             estado = 'Delgadez severa'

//             // estado = `Delgadez severa ${(altura * altura * 16 - peso).toFixed(1)} kilos`
//         } else if (imc >= 16 && imc <= 16.99) {
//             estado = 'Delgadez moderada'
//         } else if (imc >= 17 && imc <= 18.49) {
//             estado = 'Delgadez aceptable'
//         } else if (imc >= 18.5 && imc <= 24.99) {
//             estado = 'Peso normal'
//         } else if (imc >= 25 && imc <= 29.99) {
//             estado = 'Sobrepeso'
//         } else if (imc >= 30 && imc <= 34.99) {
//             estado = 'Obeso Tipo I'
//         } else if (imc >= 35 && imc <= 40) {
//             estado = 'Obesidad tipo II'
//         } else if (imc > 40) {
//             estado = 'Obesidad tipo III'
//         }
//     }
//     document.getElementById('estado').value = estado

//     /*VALIDACIONES*/
//     var fPeso = document.forms['miForm']['peso']
//     var fAltura = document.forms['miForm']['altura']
//     if (fPeso.value == '' && fAltura.value == '') {
//         alert('Introduce tu peso o altura:')
//         document.getElementById('resultadoIMC').style.display = 'none'
//     }
// }

// function limpiar() {
//     document.getElementById('miForm').reset()
//     document.getElementById('resultadoIMC').style.display = 'none'
//     console.log('Estoy ejecutando clear')
// }
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
    var fPeso = document.forms['miForm']['peso']
    var fAltura = document.forms['miForm']['altura']
    if (fPeso.value == '' && fAltura.value == '') {
        alert('Introduce tu peso o altura:')
        document.getElementById('resultadoIMC').style.display = 'none'
    }
    
}

function limpiar() {
    
    document.getElementById('miForm').reset()
    document.getElementById('resultadoIMC').style.display = 'none'
    document.getElementById('quitarPintado').style.fontWeight = 'normal'
    for (var i = 0; i < clasificacion.length; i++) {
        clasificacion[i].style.fontWeight = 'normal'
    }
    console.log('Estoy ejecutando clear')
}
