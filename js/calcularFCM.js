function calcularFCM() {

    const edadFormulario = parseInt(document.getElementById('edad').value);
    const generoFormulario = document.getElementById('genero').value;
    const edadFormularioString = document.getElementById('edad').value
    let resultado = ''
    filaResultadoFCM = document.getElementById('fcm')

    if (edadFormularioString == '' && generoFormulario == '') {

        Swal.fire({
            title: "No has introducido ningún valor",
            text: "Por favor, inténtalo de nuevo",
            icon: "warning",
            confirmButtonText: 'Reintentar',
          });

    } else if (edadFormularioString == '') {

        Swal.fire({
            title: "No has introducido ninguna edad",
            text: "Por favor, inténtalo de nuevo",
            icon: "warning",
            confirmButtonText: 'Reintentar',
          });

    } else if (generoFormulario == '') {

        Swal.fire({
            title: "No has introducido ningún género",
            text: "Por favor, inténtalo de nuevo",
            icon: "warning",
            confirmButtonText: 'Reintentar',
          });

    } else if (edadFormulario <= 0 || edadFormulario > 120) {

        Swal.fire({
            title: "Edad incorrecta",
            text: "Por favor, inténtalo de nuevo",
            icon: "error",
            confirmButtonText: 'Reintentar',
          });

    } else if (document.getElementById('genero').value != 'femenino' && document.getElementById('genero').value != 'masculino'){

        Swal.fire({
            title: "Género incorrecto",
            text: "Por favor, inténtalo de nuevo",
            icon: "error",
            confirmButtonText: 'Reintentar',
          });

    } else if (document.getElementById('genero').value == 'femenino') {

        resultado = parseFloat(208.1 - (0.77 * edadFormulario)).toFixed(3)+' lpm, (latidos por minuto)'
    
    } else if (document.getElementById('genero').value == 'masculino') {

        resultado = parseFloat(208.7 - (0.73 * edadFormulario)).toFixed(3)+' lpm, (latidos por minuto)'
        console.log(resultado)

    }

    if (resultado != '') {

        console.log('Pasa')

        document.getElementById('resultadoFCM').style.display = 'block'
        document.getElementById('fcm').value = resultado


        filaResultadoFCM = document.getElementById('fcm')
        contenedorZonasIntensidadCardiovascular = document.getElementById('contenedorZonasIntensidadCardiovascular')

        contenedorZonasIntensidadCardiovascular.innerHTML = 
        '<p>Zona de recuperación (60%-70%)</p>'+'<p>'+(parseFloat(filaResultadoFCM.value) * 0.6).toFixed(3)+' lpm'+' - '+(parseFloat(filaResultadoFCM.value) * 0.7).toFixed(3)+' lpm'+'</p>'+
        '<p>Zona aeróbica (70%-80%)</p>'+'<p>'+(parseFloat(filaResultadoFCM.value) * 0.7).toFixed(3)+' lpm'+' - '+(parseFloat(filaResultadoFCM.value) * 0.8).toFixed(3)+' lpm'+'</p>'+
        '<p>Zona anaeróbica (80%-90%)</p>'+'<p>'+(parseFloat(filaResultadoFCM.value) * 0.8).toFixed(3)+' lpm'+' - '+(parseFloat(filaResultadoFCM.value) * 0.9).toFixed(3)+' lpm'+'</p>'+
        '<p>Línea roja (90%-100%)</p>'+'<p>'+(parseFloat(filaResultadoFCM.value) * 0.9).toFixed(3)+' lpm'+' - '+(parseFloat(filaResultadoFCM.value)).toFixed(3)+' lpm'+'</p>';

        contenedorZonasIntensidadCardiovascular.className = 'comment commentClicked center'

        //document.getElementById('estado2').style.display = 'block'
    }
}

function limpiarFCM() {

    document.getElementById('miForm2').reset()
    document.getElementById('resultadoFCM').style.display = 'none'

    // Swal.fire("Limpieza de resultados", "La limpieza se ha realizado correctamente", "success")

    Swal.fire({
        title: "Limpieza de resultados",
        text: "La limpieza se ha realizado correctamente",
        icon: "success",
        confirmButtonText: 'Aceptar',
      });
}
