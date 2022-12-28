document.addEventListener( "DOMContentLoaded", () => {
    mostrarMuebles()
    if (localStorage.getItem("cubicador")){
        cubicador = obtenerCubicadorStorage()
        actualizarCubicador(cubicador)
    }
})