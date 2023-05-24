const modalProductos = document.querySelector("#modalProducto");
const botonGalletas = document.querySelector("#botonGalletas");
// Hace referencia al elemento <span> que tiene la X que cierra la ventana
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en el botón, se abre la ventana
botonGalletas.addEventListener("click", function (e) {
  e.preventDefault();
  modalProductos.style.display = "flex";

  // flex-direction: row;
  // flex-wrap: wrap;
  // justify-content: center;
  // align-items: center;
});


// Si el usuario hace clic en la x, la ventana se cierra
span.addEventListener("click",function() {
  modalProductos.style.display = "none";
});
// Si el usuario hace clic fuera de la ventana, se cierra.
window.addEventListener("click",function(event) {
  if (event.target == modalProductos) {
    modalProductos.style.display = "none";
  }
});