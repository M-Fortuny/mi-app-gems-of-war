document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('lista-tropas');

    // Función para obtener los datos
    async function cargarTropas() {
        try {
            const response = await fetch('./data/troops.json');
            const tropas = await response.json();

            // Limpiar contenedor
            contenedor.innerHTML = '';

            // Crear el HTML por cada tropa
            tropas.forEach(tropa => {
                const div = document.createElement('div');
                div.className = 'tropa-card';
                div.innerHTML = `
                    <img src="${tropa.imagen_url}" alt="${tropa.nombre}">
                    <h3>${tropa.nombre}</h3>
                    <p>${tropa.rareza}</p>
                `;
                contenedor.appendChild(div);
            });
        } catch (error) {
            console.error('Error cargando las tropas:', error);
            contenedor.innerHTML = '<p>Error al cargar los datos.</p>';
        }
    }

    cargarTropas();
});
