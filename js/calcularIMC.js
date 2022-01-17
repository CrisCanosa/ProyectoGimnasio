document.getElementById('resultado').style.display = "none";

function calcularIMC() {
    var peso, altura, imc, estado;
    //hacemos la llamada a los datos introducidos
    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value / 100;
    //calculamos el imc
    imc = peso / (altura * altura);
    //enviamos el resultado a la caja correspondiente y lo reducimos a 2 decimales
    document.getElementById("imc").value = imc.toFixed(2);
    document.getElementById('resultado').style.display = "block";

    if (peso != "" && altura != "") {
        
        if (imc <= 16) {
            estado = "Delgadez severa";
            // estado = `Delgadez severa ${(altura * altura * 16 - peso).toFixed(1)} kilos`
        }
        else if (imc >= 16 && imc < 17) {
            estado = "Delgadez moderada";
        }
        else if (imc >= 17 && imc <= 18.5) {
            estado = "Delgadez aceptable";
        }
        else if (imc >= 25 && imc < 30) {
            estado = "Peso normal";
        }
        else if (imc >= 30 && imc <= 35.5) {
            estado = "Sobrepeso";
        }
        else if (imc >= 35 && imc < 40) {
            estado = "Obesidad tipo I";
        }
        else if (imc >= 40) {
            estado = "Obesidad tipo II";
        }
        else if (imc >= 30 && imc < 40) {
            estado = "Obesidad tipo III";
        }
    } else {
        alert("Debes ingresar peso y altura.")
    }
    document.getElementById("estado").value = estado;

}

function limpiar() {
    document.getElementById("resultado").style.display = "none";
    console.log("Estoy ejecutando clear")
}