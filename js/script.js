function addItem() {

  console.log('Hola')
  cajaDeComentarios = document.getElementById('cajaDeComentarios')
  contenedorComentarios = document.getElementById('contenedorComentarios')

  contenedorComentarios.innerHTML += '<p>'+cajaDeComentarios.value+'</p>'
  cajaDeComentarios.value = ''

  contenedorComentarios.className = 'comment commentClicked'
}
