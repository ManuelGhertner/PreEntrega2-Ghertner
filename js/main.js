
const nombre = () => {
    nombreIngresado = prompt("¿Cual es su nombre?").toUpperCase()
}

const apellido = () => {
    apellidoIngresado = prompt("¿Cual es su apellido?").toUpperCase()
}

const origen = () => {
    origenMudanza = prompt("¿Cual es el origen de su mudanza?").toUpperCase()
}

const destino = () => {
    destinoMudanza = prompt("¿Cual es el destino de su mudanza?").toUpperCase()
}

const cubicador = []
nombre()
apellido()
origen()
destino()

const mostrarListaItems = () => {
   const listaOrdenada = itemsIngresados.map(itemIngresado => {
    return "- "+itemIngresado.nombre+" - Volumen: "+itemIngresado.volumen+"m3"
   })
   alert( "Lista de muebles:"+"\n\n"+listaOrdenada.join("\n"))
   agregarItems(listaOrdenada)
}


const agregarItems = (listaItems) => {
    let itemNombre = ""
    let itemCantidad = ""
    let agregarItem = false

    do{
        itemNombre = prompt ("¿Que mueble desea agregar"+"\n\n"+listaItems.join("\n"))
        const item = itemsIngresados.find(item => item.nombre.toUpperCase() === itemNombre.toUpperCase())

        if (item) {
            itemCantidad = parseInt(prompt("¿Que cantidad de unidades desea enviar?"))

            while(isNaN(itemCantidad)) {
                itemCantidad = Math.abs(prompt("Por favor ingrese una cantidad numerica valida:"))
            }
            agregarAlCubicador(item, itemCantidad, item.nombre)
           
        } else {
            alert("El mueble no se encuentra en el cubicador, aguarde actualizaciones")
        }
       
        agregarItem = confirm("¿Desea agregar mas muebles?")
    }while (agregarItem)
    confirmarCubicador()
}

const agregarAlCubicador = (item, itemCantidad, itemNombre) => {
    const itemRepetido = cubicador.find(item => item.nombre.toUpperCase() === itemNombre.toUpperCase())
    if (itemRepetido) {
        itemRepetido.cantidad += itemCantidad
        
    } else {
        item.cantidad += itemCantidad
        cubicador.push(item)
    }
}

const eliminarItemCubicador = (itemNombre) => {
    cubicador.forEach((item, index) => {
        if (item.nombre.toUpperCase() === itemNombre.toUpperCase()){
            if (item.cantidad > 1) {
                item.cantidad--
            } else {
                cubicador.splice(index,1)
          
            }
        }
    })
    confirmarCubicador()
}

const confirmarCubicador = () => {
    const listaMuebles = cubicador.map(item =>{
        return "- "+item.nombre+" -- Cantidad: "+item.cantidad+" unidades."
    })

    const confirmar = confirm("Los muebles seleccionados son:"
    +"\n\n"+listaMuebles.join("\n")
    +"\n\n Si desea confirmar la cantidad de muebles presione aceptar. Si desea eliminar un mueble presione cancelar"
    )

    if (confirmar) {
        finalizarCubicador(listaMuebles)
    } else {
        const itemEliminar = prompt ("Ingrese el nombre del mueble que desea eliminar:")
        eliminarItemCubicador(itemEliminar)
    }
}

const finalizarCubicador = (listaMuebles) =>{
    const cantidadTotal = cubicador.reduce((acc, item) => acc + item.cantidad, 0)
    const volumenTotal = cubicador.reduce((acc, item) => acc + (item.volumen * item.cantidad), 0)
    if (cantidadTotal === 0) {
        alert("Estimado"+" "+nombreIngresado+" "+apellidoIngresado+" "+"No posee muebles seleccionados")
    }else {
        alert ( "Estimado"+" "+nombreIngresado+" "+apellidoIngresado+" "+"El origen de su mudanza es"+" "+origenMudanza+" "+"y el destino de su mudanza es"+" "+destinoMudanza
        +"\n\n Los muebles que selecciono son: \n "+listaMuebles.join("\n")
        + "\n\n El volumen total estimado de su mudanza es: "+volumenTotal+"m3"
        + "\n\n Gracias por utilizar el cubicador."
        )
    }
 
}


mostrarListaItems()
agregarItems()
agregarAlCubicador()
eliminarItemCubicador()
confirmarCubicador()
finalizarCubicador()