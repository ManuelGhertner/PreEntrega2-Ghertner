
const modalCubicador = document.getElementById("modal-contenedor")
modalCubicador.addEventListener("click", (e) => {
    e.stopPropagation()
    if(e.target.classList.contains("eliminar")){
        eliminarItem(e.target.value)
    }
})