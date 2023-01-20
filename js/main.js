
// // let cubicador = []
// const formulario = document.getElementById("form")
// const nombre = document.getElementById("primerNombre")
// const apellido = document.getElementById("primerApellido")
// const email = document.getElementById("correoElectronico")
// const telefono = document.getElementById("numeroTelefono")




// formulario.addEventListener("submit" , (e) =>{
//     e.preventDefault() 


// })



const mostrarMuebles = () => {
    const contenedor = document.getElementById("cubicadorTabla")
    itemsIngresados.forEach(item => {
        const table = document.createElement("table")
        table.classList.add("table")
        table.innerHTML += `
        <thead>
        <tr>
          <th scope="col">MUEBLE SELECCIONADO</th>
          <th scope="col">MARQUE SI POSEE</th>
          <th scope="col">VOLUMEN</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${item.nombre}</td>
          <td>
            <a id=${item.id} class="btn btn-secondary btn-sm agregar">Agregar
                <i id=${item.id}></i>
            </a>
          </td>
          <td>${item.volumen}m3</td>
        </tr>
      </tbody>
      
        `
        contenedor.appendChild(table)
    }
        )
}


// const nombre = () => {
//     nombreIngresado = prompt("Ingrese su nombre:").toUpperCase()
//     while (nombreIngresado === "") {
//         nombreIngresado = prompt("Ingrese un nombre:").toUpperCase()
//     }
// }

// const apellido = () => {
//     apellidoIngresado = prompt("Ingrese su apellido:").toUpperCase()
//     while (apellidoIngresado === "") {
//         apellidoIngresado = prompt("Ingrese un apellido:").toUpperCase()
//     }
// }

// const mail = () => {
//     correoElectronico = prompt("Ingrese su correo electronico:").toUpperCase()
//     while (correoElectronico === "") {
//         correoElectronico = prompt("Ingrese un correo electronico valido:").toUpperCase()
//     }
// }

// const origen = () => {
//     origenMudanza = prompt("¿Cual es el origen de su mudanza?").toUpperCase()
//     while (origenMudanza === "") {
//         origenMudanza = prompt("Ingrese un origen valido:").toUpperCase()
//     }
// }

// const destino = () => {
//     destinoMudanza = prompt("¿Cual es el destino de su mudanza?").toUpperCase()
//     while (destinoMudanza === "") {
//         destinoMudanza = prompt("Ingrese un destino valido:").toUpperCase()
//     }
// }

// const cubicador = []
// nombre()
// apellido()
// mail()
// origen()
// destino()

// const mostrarListaItems = () => {
//    const listaOrdenada = itemsIngresados.map(itemIngresado => {
//     return "- "+itemIngresado.nombre+" - Volumen: "+itemIngresado.volumen+"m3"
//    })
//    alert( "Lista de muebles:"+"\n\n"+listaOrdenada.join("\n"))
//    agregarItems(listaOrdenada)
// }


// const agregarItems = (listaItems) => {
//     let itemNombre = ""
//     let itemCantidad = ""
//     let agregarItem = false

//     do{
//         itemNombre = prompt ("¿Que mueble desea agregar?"+"\n\n"+listaItems.join("\n"))
//         const item = itemsIngresados.find(item => item.nombre.toUpperCase() === itemNombre.toUpperCase())

//         if (item) {
//             itemCantidad = parseInt(prompt("¿Que cantidad de unidades desea enviar?"))

//             while(isNaN(itemCantidad)) {
//                 itemCantidad = Math.abs(prompt("Por favor ingrese una cantidad numerica valida:"))
//             }
//             agregarAlCubicador(item, itemCantidad, item.nombre)
           
//         } else {
//             alert("El mueble no se encuentra en el cubicador, aguarde actualizaciones")
//         }
       
//         agregarItem = confirm("¿Desea agregar mas muebles?")
//     }while (agregarItem)
//     confirmarCubicador()
// }

// const agregarAlCubicador = (item, itemCantidad, itemNombre) => {
//     const itemRepetido = cubicador.find(item => item.nombre.toUpperCase() === itemNombre.toUpperCase())
//     if (itemRepetido) {
//         itemRepetido.cantidad += itemCantidad
        
//     } else {
//         item.cantidad += itemCantidad
//         cubicador.push(item)
//     }
// }

// const eliminarItemCubicador = (itemNombre) => {
//     cubicador.forEach((item, index) => {
//         if (item.nombre.toUpperCase() === itemNombre.toUpperCase()){
//             if (item.cantidad > 1) {
//                 item.cantidad--
//             } else {
//                 cubicador.splice(index,1)
          
//             }
//         }
//     })
//     confirmarCubicador()
// }

// const confirmarCubicador = () => {
//     const listaMuebles = cubicador.map(item =>{
//         return "- "+item.nombre+" -- Cantidad: "+item.cantidad+" unidades."
//     })

//     const confirmar = confirm("Los muebles seleccionados son:"
//     +"\n\n"+listaMuebles.join("\n")
//     +"\n\n Si desea confirmar la cantidad de muebles presione aceptar. Si desea eliminar un mueble presione cancelar"
//     )

//     if (confirmar) {
//         finalizarCubicador(listaMuebles)
//     } else {
//         const itemEliminar = prompt ("Ingrese el nombre del mueble que desea eliminar:")
//         eliminarItemCubicador(itemEliminar)
//     }
// }

// const finalizarCubicador = (listaMuebles) =>{
//     const cantidadTotal = cubicador.reduce((acc, item) => acc + item.cantidad, 0)
//     const volumenTotal = cubicador.reduce((acc, item) => acc + (item.volumen * item.cantidad), 0)
//     if (cantidadTotal === 0) {
//         alert("Estimado"+" "+nombreIngresado+" "+apellidoIngresado+" "+"No posee muebles seleccionados")
//     }else {
//         alert ( "Estimado"+" "+nombreIngresado+" "+apellidoIngresado+", "+"su correo electronico es "+correoElectronico+". "+"El origen de su mudanza es"+" "+origenMudanza+" "+"y el destino de su mudanza es"+" "+destinoMudanza+"."
//         +"\n\n Los muebles que selecciono son: \n "+listaMuebles.join("\n")
//         + "\n\n El volumen total estimado de su mudanza es: "+volumenTotal+"m3"
//         + "\n\n Gracias por utilizar el cubicador."
//         )
//     }
 
// }


// mostrarListaItems()
// agregarItems()
// agregarAlCubicador()
// eliminarItemCubicador()
// confirmarCubicador()
// finalizarCubicador()