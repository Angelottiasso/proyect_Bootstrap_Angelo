/* Propósito: Funcionalidad para detectar la visibilidad de la sección "Nosotros" y disparar las animaciones CSS en el momento adecuado.*/

// Esperamos a que todo el documento HTML esté cargado
document.addEventListener("DOMContentLoaded", () => {
    
    // Seleccionamos la nueva sección por su ID
    const seccionNosotros = document.getElementById('nosotros');
    
    // Verificamos que la sección exista en la página actual
    if (seccionNosotros) {
        
        // Creamos un observador para detectar cuando la sección entra en el área visible (viewport)
        const observador = new IntersectionObserver((entradas) => {
            entradas.forEach(entrada => {
                // Si la sección es visible al menos en un 20%
                if (entrada.isIntersecting) {
                    // Agregamos la clase que detona la animación CSS (@keyframes entradaFluida)
                    entrada.target.classList.add('seccion-visible');
                    
                    // Dejamos de observar para que la animación solo ocurra una vez
                    observador.unobserve(entrada.target);
                }
            });
        }, { 
            threshold: 0.2 // Se activa cuando el 20% de la sección es visible
        });

        // Iniciamos la observación
        observador.observe(seccionNosotros);
    }
});