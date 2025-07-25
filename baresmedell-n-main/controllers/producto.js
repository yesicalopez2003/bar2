// let btn = document.getElementById("btn")
// let nombreProducto= document.getElementById("nombreProducto")
// let precio = document.getElementById("precio")
// let unidadesVendidas = document.getElementById("uVendidas")
// let diaVentas = document.getElementById("ventas")


// //Escuchamos el evento de hacer click al botón del formulario
// btn.addEventListener("click", function(evento){
//     evento.preventDefault()
//     nombreIngresado = nombreProducto.value
//     precioIngresado = precio.value
//     unidadesVendidasIngresadas =unidadesVendidas.value
//     ventasIngresadas = diaVentas.value

//     let datos = JSON.stringify({
//         nombreProducto: nombreIngresado,
//         precioProducto: precioIngresado,
//         unidadesVendidasProducto: unidadesVendidasIngresadas,
//         ventasProducto: ventasIngresadas,
//     })

//     Swal.fire({
//         title: "¡Buen trabajo!",
//         text: "Empleado registrado con éxito!",
//         icon: "success"
//     });
// })

// ...existing code...

document.addEventListener('DOMContentLoaded', function() {
    // Guardar producto
    const btn = document.getElementById('btn');
    if (btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const nombreProducto = document.getElementById('nombreProducto').value.trim();
            const precio = document.getElementById('precio').value.trim();
            const uVendidas = document.getElementById('uVendidas').value.trim();
            const ventas = document.getElementById('ventas').value.trim();

            if (!nombreProducto || !precio || !uVendidas || !ventas) {
                Swal.fire('Error', 'Por favor completa todos los campos', 'error');
                return;
            }

            const producto = { nombreProducto, precio, uVendidas, ventas };

            let productos = JSON.parse(localStorage.getItem('productos')) || [];
            productos.push(producto);

            localStorage.setItem('productos', JSON.stringify(productos));

            Swal.fire('¡Guardado!', 'Producto registrado correctamente', 'success');

            // Limpiar formulario
            document.getElementById('nombreProducto').value = '';
            document.getElementById('precio').value = '';
            document.getElementById('uVendidas').value = '';
            document.getElementById('ventas').value = '';
        });
    }

    // Buscar producto
    const formBuscar = document.querySelector('form[role="search"]');
    if (formBuscar) {
        formBuscar.addEventListener('submit', function(e) {
            e.preventDefault();
            const valor = formBuscar.querySelector('input[type="search"]').value.trim().toLowerCase();
            let productos = JSON.parse(localStorage.getItem('productos')) || [];
            let resultados = productos.filter(prod => prod.nombreProducto.toLowerCase().includes(valor));
            if (resultados.length > 0) {
                let html = resultados.map(prod =>
                    `<b>${prod.nombreProducto}</b> - $${prod.precio} - Vendidas: ${prod.uVendidas} - Mejor día: ${prod.ventas}<br>`
                ).join('');
                Swal.fire('Resultados', html, 'info');
            } else {
                Swal.fire('Sin resultados', 'No se encontraron productos con ese nombre', 'warning');
            }
        });
    }
});
// ...existing code...