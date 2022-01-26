function guardar() {
    let nom = document.getElementById('nomb').value
    let cat = document.getElementById('cat').value
    let precio = document.getElementById('precio').value
    let stock = document.getElementById('stock').value

    let fila =
        '<tr><td>' +
        nom +
        '</td><td>' +
        cat +
        '</td><td>' +
        precio +
        '</td><td>' +
        stock +
        '</td></tr>'

    let btn = document.createElement('TR')
    btn.innerHTML = fila
    document.getElementById('tabla').appendChild(btn)
    
}
