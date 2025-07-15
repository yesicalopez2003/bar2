let btn = document.getElementById("btn")
let nombreProducto= document.getElementById("nombreProducto")
let precio = document.getElementById("precio")
let unidadesVendidas = document.getElementById("uVendidas")
let diaVentas = document.getElementById("ventas")


//Escuchamos el evento de hacer click al botón del formulario
btn.addEventListener("click", function(evento){
    evento.preventDefault()
    nombreIngresado = nombreProducto.value
    precioIngresado = precio.value
    unidadesVendidasIngresadas =unidadesVendidas.value
    ventasIngresadas = diaVentas.value

    let datos = JSON.stringify({
        nombreProducto: nombreIngresado,
        precioProducto: precioIngresado,
        unidadesVendidasProducto: unidadesVendidasIngresadas,
        ventasProducto: ventasIngresadas,
    })

    Swal.fire({
        title: "¡Buen trabajo!",
        text: "Empleado registrado con éxito!",
        icon: "success"
    });
})