
const Bloque = document.querySelectorAll(".Bloque")
const Titulo = document.querySelectorAll(".Bloque-titulo")
const Contenido = document.querySelectorAll(".Bloque-contenido")

// Cuando haga CLICK en h2,
    // QUITAR la clase isActive de TODOS los contenidos
    // Vamos a añadir la clase isActive al CONTENIDO con la POSICION del h2

Titulo.forEach((cadaTitulo,i) => {
    
    Titulo[i].addEventListener('click', () => {

        Contenido.forEach((cadaBloque,i) => {
            Contenido[i].classList.remove('isActive')
        });

        Contenido[i].classList.add('isActive');
    });
    
});