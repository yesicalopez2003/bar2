// let boton = document.getElementById("boton")
// let nombres = document.getElementById("nombres")
// let salario = document.getElementById("salario")
// let horas = document.getElementById("horas")
// let cargo = document.getElementById("cargo")
// let experiencia = document.getElementById("experiencia")

// //Escuchamos el evento de hacer click al botón del formulario
// boton.addEventListener("click", function(evento){
//     evento.preventDefault()
//     nombreIngresado = nombres.value
//     salarioIngresado = salario.value
//     horasIngresadas = horas.value
//     cargoIngresado = cargo.value
//     experienciaIngresada = experiencia.value

//     let datos = JSON.stringify({
//         nombresEmpleado: nombreIngresado,
//         salarioEmpleado: salarioIngresado,
//         horasEmpleado: horasIngresadas,
//         cargoEmpleado: cargoIngresado,
//         experienciaEmpleado: experienciaIngresada
//     })

//     Swal.fire({
//         title: "¡Buen trabajo!",
//         text: "Empleado registrado con éxito!",
//         icon: "success"
//     });
// })
// Aquí puedes enviar los datos al servidor o procesarlos como necesites
// ...existing code...

document.addEventListener('DOMContentLoaded', function() {
    // Guardar empleado
    const boton = document.getElementById('boton');
    if (boton) {
        boton.addEventListener('click', function() {
            const nombres = document.getElementById('nombres').value.trim();
            const salario = document.getElementById('salario').value.trim();
            const horas = document.getElementById('horas').value.trim();
            const cargo = document.getElementById('cargo').value.trim();
            const experiencia = document.getElementById('experiencia').value.trim();

            if (!nombres || !salario || !horas || !cargo || !experiencia) {
                Swal.fire('Error', 'Por favor completa todos los campos', 'error');
                return;
            }

            // Crear objeto empleado
            const empleado = { nombres, salario, horas, cargo, experiencia };

            // Obtener empleados existentes
            let empleados = JSON.parse(localStorage.getItem('empleados')) || [];
            empleados.push(empleado);

            // Guardar en localStorage
            localStorage.setItem('empleados', JSON.stringify(empleados));

            Swal.fire('¡Guardado!', 'Empleado registrado correctamente', 'success');
            
            // Limpiar formulario
            document.getElementById('nombres').value = '';
            document.getElementById('salario').value = '';
            document.getElementById('horas').value = '';
            document.getElementById('cargo').value = '';
            document.getElementById('experiencia').value = '';
        });
    }

    // Buscar empleado
    const formBuscar = document.querySelector('form[role="search"]');
    if (formBuscar) {
        formBuscar.addEventListener('submit', function(e) {
            e.preventDefault();
            const valor = formBuscar.querySelector('input[type="search"]').value.trim().toLowerCase();
            let empleados = JSON.parse(localStorage.getItem('empleados')) || [];
            let resultados = empleados.filter(emp => emp.nombres.toLowerCase().includes(valor));
            if (resultados.length > 0) {
                let html = resultados.map(emp => 
                    `<b>Nombres - ${emp.nombres}</b> - Cargo - ${emp.cargo} - Salario $${emp.salario} <br>`
                ).join('');
                Swal.fire('Resultados', html, 'success');
            } else {
                Swal.fire('Sin resultados', 'No se encontraron empleados con ese nombre', 'warning');
            }
        });
    }
});
// ...existing code...