function guardar() {
    let nom = document.getElementById('nomb').value
    let cat = document.getElementById('cat').value
    let precio = document.getElementById('precio').value
    let stock = document.getElementById('stock').value
    let eliminar = document.getElementsByTagName('bot_elim')
    let fila =
        '<tr><td>' +
        nom +
        '</td><td>' +
        cat +
        '</td><td>' +
        precio +
        '</td><td>' +
        stock +
        '</td><td>' +
        eliminar + 
        '</td></tr>'

    let btn = document.createElement('TR')
    btn.innerHTML = fila
    document.getElementById('tabla').appendChild(btn)

}
// function Eliminar(i) {
//     document.getElementsByTagName("table")[0].setAttribute("id", "tableid");
//     document.getElementById("tableid").deleteRow(i);
// }
