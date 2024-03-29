let cubicador = []; 

const formulario = document.getElementById("form")
const nombre = document.getElementById("primerNombre")
const apellido = document.getElementById("primerApellido")
const mail = document.getElementById("correoElectronico")
const telefono = document.getElementById("numeroTelefono")

const paisOrigen = document.getElementById("paisOrigen")
const ciudadOrigen = document.getElementById("ciudadOrigen")
const calleOrigen = document.getElementById("calleOrigen")
const cpOrigen = document.getElementById("cpOrigen")

const paisDestino = document.getElementById("paisDestino")
const ciduadDestino = document.getElementById("ciduadDestino")
const calleDestino = document.getElementById("calleDestino")
const cpDestino = document.getElementById("cpDestino")





formulario.addEventListener("submit", (e) => {
e.preventDefault()
})



const itemContenedor = document.getElementById("cubicadorTabla")

itemContenedor.addEventListener ('click', (e) => {
    e.preventDefault()
    if (e.target.classList.contains("agregar")){
        validarItemRepetido(e.target.id)
    }

    
})


const validarItemRepetido = (itemId) => {
    const itemRepetido = cubicador.find(item => item.id == itemId)
    if (!itemRepetido){
        const item = itemsIngresados.find(item => item.id == itemId)
        cubicador.push(item)
        muebleAgregado(item)
        guardarCubicadorStorage(cubicador)
        actualizarTotalCubicador(cubicador)   
    } else{
        itemRepetido.cantidad++
        const cantidadItem = document.getElementById(`cantidad${itemRepetido.id}`)
        cantidadItem.innerText = `Cantidad: ${itemRepetido.cantidad}`
        actualizarTotalCubicador(cubicador)
    }
}



const muebleAgregado = (item) => {
    const contenedor = document.getElementById("modal-cubicador")
    const div = document.createElement("div")
    div.classList.add("shadow-lg,p-3,mb-5,bg-body,rounded")
    div.innerHTML = `
        <ul>
            <li>${item.nombre}</li>
            <li id=cantidad${item.id}>Cantidad: ${item.cantidad}</li>
            <a class="btn btn-danger btn-sm eliminar" value="${item.id}">-</a>
        </ul>
        `
    contenedor.appendChild(div)

}

const eliminarItem = (itemId) => {
    const itemIndex = cubicador.findIndex(item => item.id == itemId)
    const itemRepetido = cubicador.find(item => item.id == itemId)
    if (itemRepetido) {
            itemRepetido.cantidad--
    } else {
        cubicador.splice(itemIndex, 1)  
    }
  console.log(cubicador)
    actualizarCubicador(cubicador)
    guardarCubicadorStorage(cubicador)
    actualizarTotalCubicador(cubicador)
}

const actualizarCubicador = (cubicador) =>{
    const contenedor = document.getElementById("modal-cubicador")
    contenedor.innerHTML = ""

    cubicador.forEach(item => {
        const div = document.createElement("div")
        div.classList.add("shadow-lg,p-3,mb-5,bg-body,rounded")
        div.innerHTML += `
            <ul>
                <li>${item.nombre}</li>
                <li id=cantidad${item.id}>Cantidad: ${item.cantidad}</li>
                <button type="button" class="btn btn-danger btn-sm eliminar" value="${item.id}">-</button>
            </ul>
            `
        contenedor.appendChild(div)
    })
    };




const guardarCubicadorStorage = (cubicador) => {
    localStorage.setItem("cubicador", JSON.stringify(cubicador))

}

const obtenerCubicadorStorage = () => {
    const cubicadorStorage = JSON.parse(localStorage.getItem("cubicador"))
    return cubicadorStorage
}


const actualizarTotalCubicador = (cubicador) => {
    const totalVolumen = cubicador.reduce ((acc, item) => acc + (item.cantidad * item.volumen), 0)
    mostrarTotalCubicador(totalVolumen)
    guardarCubicadorStorage(cubicador)
}

const mostrarTotalCubicador = (totalVolumen) => {
    const volumenTotal = document.getElementById("volumen-total")
    volumenTotal.innerText = totalVolumen
}

const btn = document.getElementById("enviar")

btn.addEventListener( "click", () => {
    Swal.fire ({
        icon: "success",
        title: "Felicidades",
        text: `Estimado/a ${nombre.value}, su solicitud para una mudanza desde ${paisOrigen.value} hacia ${paisDestino.value} se ha enviado con exito`
    
    }
        
    )
}

)


// btn.addEventListener( "click", () => {

    function sendMail() {
   
        let params = {
            nombre: document.getElementById("primerNombre").value,
            apellido: document.getElementById("primerApellido").value,
            email: document.getElementById("correoElectronico").value,
            telefono: document.getElementById("numeroTelefono").value,
            paisOrigen: document.getElementById("paisOrigen").value,
            ciudadOrigen: document.getElementById("ciudadOrigen").value,
            calleOrigen: document.getElementById("calleOrigen").value,
            cpOrigen: document.getElementById("cpOrigen").value,
            paisDestino: document.getElementById("paisDestino").value,
            ciduadDestino: document.getElementById("ciudadDestino").value,
            calleDestino: document.getElementById("calleDestino").value,
            cpDestino: document.getElementById("cpDestino").value
        }
    const serviceID = "service_pscciu4"
    const templateID = "template_lcrwx5i"
    
    emailjs.send(serviceID,templateID,params)
    .then(
        (res) => {
            document.getElementById("primerNombre").value = "";
            document.getElementById("primerApellido").value = "";
            document.getElementById("correoElectronico").value = "";
            document.getElementById("numeroTelefono").value = "";
            document.getElementById("paisOrigen").value = "";
            document.getElementById("ciudadOrigen").value = "";
            document.getElementById("calleOrigen").value = "";
            document.getElementById("cpOrigen").value = "";
            document.getElementById("paisDestino").value = "";
            document.getElementById("ciudadDestino").value = "";
            document.getElementById("calleDestino").value = "";
            document.getElementById("cpDestino").value = "";

        })
  
        .catch((err) => console.log(err))
    }


btn.addEventListener("click", sendMail)