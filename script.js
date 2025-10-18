document.addEventListener('DOMContentLoaded', () => {
    const seccionProductos = document.getElementById('productos');
    const seccionServicios = document.getElementById('servicios');
    const navProductos = document.getElementById('nav-productos');
    const navServicios = document.getElementById('nav-servicios');

    /**
     * Alterna la visibilidad de las secciones y el estilo 'active' de la navegación.
     * @param {string} seccion - El ID de la sección a mostrar ('productos' o 'servicios').
     */
    const mostrarSeccion = (seccion) => {
        seccionProductos.classList.add('hidden');
        seccionServicios.classList.add('hidden');
        navProductos.classList.remove('active');
        navServicios.classList.remove('active');

        if (seccion === 'productos') {
            seccionProductos.classList.remove('hidden');
            navProductos.classList.add('active');
        } else if (seccion === 'servicios') {
            seccionServicios.classList.remove('hidden');
            navServicios.classList.add('active');
        }
    };

    navProductos.addEventListener('click', (e) => {
        e.preventDefault(); 
        mostrarSeccion('productos');
    });

    navServicios.addEventListener('click', (e) => {
        e.preventDefault();
        mostrarSeccion('servicios');
    });

    mostrarSeccion('productos'); 
});