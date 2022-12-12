// let itemIngresado = ""
// let volumen = 0
// let cantidad = 0
// let volumenTotal = 0
// let seguirAgregandoItems = false
let nombreIngresado = ""
let apellidoIngresado = ""
let origenMudanza = ""
let destinoMudanza = ""


function nombre() {
    nombreIngresado = prompt("¿Cual es su nombre?").toUpperCase()
}

function apellido() {
    apellidoIngresado = prompt("¿Cual es su apellido?").toUpperCase()
}

function origen() {
    origenMudanza = prompt("¿Cual es el origen de su mudanza?").toUpperCase()
}

function destino() {
    destinoMudanza = prompt("¿Cual es el destino de su mudanza?").toUpperCase()
}

// nombre()
// apellido()
// origen()
// destino()

// do {
//     itemIngresado = prompt("Ingrese un mueble de la siguiente lista, luego precione continuar e igrese la cantidad de unidades Silla, Mesa, Cama doble, Cama simple, Heladera o Comoda.") .toUpperCase()

//     switch (itemIngresado) {
//         case "MESA":
//             volumen = 1 
//             break;
//         case "SILLA":
//             volumen = 0.2
//             break;
//         case "CAMA DOBLE":
//             volumen = 2
//             break;
//         case "CAMA SIMPLE":
//             volumen = 1
//             break;
//         case "HELADERA":
//             volumen = 1
//             break;
//         case "COMODA":
//             volumen = 2
//             break;
//         default:
//             alert("Aun no esta consdierado el mueble en el cubicador, aguardar actualizaciones.")
//             volumen = 0
//             cantidad = 0
//             break;
//     } 
    
//     if (volumen == 0) {
//         seguirAgregandoItems = confirm ("¿Queres agregar mas muebles?")
//     } else {
//         cantidad = prompt("Por favor igrese la cantidad de unidades del mueble seleccionado:")
//         if (cantidad>=1 && cantidad<=10000 ) {
//             seguirAgregandoItems = confirm ("¿Queres agregar mas muebles?")
//         } else {
//             alert ("La cantidad ingresada es invalida")
//             cantidad = prompt("Por favor ingrese una cantidad numerica valida:")
//             seguirAgregandoItems = confirm ("¿Queres agregar mas muebles?")
//         }
        
//     }
 
//     volumenTotal += volumen * cantidad


// }while (seguirAgregandoItems)

// alert ("Estimado"+" "+nombreIngresado+" "+apellidoIngresado+" "+"El origen de su mudanza es"+" "+origenMudanza+" "+"y el destino de su mudanza es"+" "+destinoMudanza+" "+"y el volumen total estimado es"+" "+volumenTotal+" "+"m3.")

const cubicador = []
nombre()
apellido()
origen()
destino()

const ordenarMenorMayor = () =>{
    itemsIngresados.sort((a, b) => a.volumen - b.volumen)
    mostrarListaItems()
}

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
        itemCantidad = parseInt(prompt("¿Que cantidad de unidades desea enviar?"))

        const item = itemsIngresados.find(item => item.nombre.toUpperCase() === itemNombre.toUpperCase())

        if (item) {
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
        if (item.nombre.toUpperCase() === itemNombre){
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

    const confirmar = confirm("Los muebles seleccionados son: "
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
    alert ( "Estimado"+" "+nombreIngresado+" "+apellidoIngresado+" "+"El origen de su mudanza es"+" "+origenMudanza+" "+"y el destino de su mudanza es"+" "+destinoMudanza
    +"\n\n Los muebles que selecciono son: \n "+listaMuebles.join("\n")
    + "\n\n El volumen total de su mudanza es: "+volumenTotal+"m3"
    + "\n\n Gracias por utilizar el cubicador."
    )
}




mostrarListaItems()
agregarItems()
agregarAlCubicador()
eliminarItemCubicador()
confirmarCubicador()
finalizarCubicador()