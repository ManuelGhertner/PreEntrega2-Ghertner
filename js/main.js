let itemIngresado = ""
let volumen = 0
let cantidad = 0
let volumenTotal = 0
let seguirAgregandoItems = false
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

nombre()
apellido()
origen()
destino()

do {
    itemIngresado = prompt("Ingrese un mueble de la siguiente lista, luego precione continuar e igrese la cantidad de unidades Silla, Mesa, Cama doble, Cama simple, Heladera o Comoda.") .toUpperCase()

    switch (itemIngresado) {
        case "MESA":
            volumen = 1 
            break;
        case "SILLA":
            volumen = 0.2
            break;
        case "CAMA DOBLE":
            volumen = 2
            break;
        case "CAMA SIMPLE":
            volumen = 1
            break;
        case "HELADERA":
            volumen = 1
            break;
        case "COMODA":
            volumen = 2
            break;
        default:
            alert("Aun no esta consdierado el mueble en el cubicador, aguardar actualizaciones.")
            volumen = 0
            cantidad = 0
            break;
    } 
    
    if (volumen == 0) {
        seguirAgregandoItems = confirm ("¿Queres agregar mas muebles?")
    } else {
        cantidad = prompt("Por favor igrese la cantidad de unidades del mueble seleccionado:")
        if (cantidad>=1 && cantidad<=10000 ) {
            seguirAgregandoItems = confirm ("¿Queres agregar mas muebles?")
        } else {
            alert ("La cantidad ingresada es invalida")
            cantidad = prompt("Por favor ingrese una cantidad numerica valida:")
            seguirAgregandoItems = confirm ("¿Queres agregar mas muebles?")
        }
        
    }
 
    volumenTotal += volumen * cantidad


}while (seguirAgregandoItems)

alert ("Estimado"+" "+nombreIngresado+" "+apellidoIngresado+" "+"El origen de su mudanza es"+" "+origenMudanza+" "+"y el destino de su mudanza es"+" "+destinoMudanza+" "+"y el volumen total estimado es"+" "+volumenTotal+" "+"m3.")
