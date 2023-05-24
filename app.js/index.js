//VARIABLES

let tabla = document.querySelector("#tabla tbody");
const listaProductos = document.querySelector("#card-productos");
let productosTabla = [];

caragarEventListener();
function caragarEventListener() {
  //Cuando agregas un curso presionando 'Agregar a la lista'
  listaProductos.addEventListener("click", agregarProducto);
}

//Funciones

function agregarProducto(e) {
  e.preventDefault();
  // console.log(e.target)
  if (e.target.classList.contains("boton-producto")) {
    //Si al precionar el elemento contiene la clase "boton-producto" muesta la informacion
    const productoSeleccionado = e.target.parentElement;
    leerDatosProducto(productoSeleccionado);
  }
}

function leerDatosProducto(producto) {
  // console.log(producto);
  const infoProducto = {
    id: producto.querySelector("input").getAttribute("data-id"),
    titulo: producto.querySelector("h3").textContent,
    imagen: producto.querySelector("img").src,
    descripcion: producto.querySelector("p").textContent,
    cantidad: 1,
  };
  console.log(infoProducto);
  //Agrego la cada producto seleccionado al array que luego se mostrara en la tabla
  productosTabla = [...productosTabla, infoProducto];
  console.log(productosTabla);
  cantidadProducto();
  limpiarTabla();
  tablaHTML();
}

function tablaHTML() {
  //Recorro el array y lo agrego a la tabla
  productosTabla.forEach((productos) => {
    const row = document.createElement("tr");
    row.innerHTML = `
    
    <td>
        <img src="${productos.imagen}" > 
    </td>
    <td>
        ${productos.titulo} 
    </td>
    <td>
        ${productos.cantidad} 
    </td>
    
    `;
    //Agregar el HTML del carrito en el tbody
    tabla.appendChild(row);
  });
}

function limpiarTabla() {
  tabla.innerText = "";
}

function cantidadProducto() {
  productosTabla.forEach((producto) => {
    if (producto.id === producto.id) {
      producto.cantidad=+1;
    }
  });
}
