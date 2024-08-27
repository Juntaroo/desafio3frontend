document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');
    const buttonlog = document.getElementById('login');
    const buttonreg = document.getElementById('registro');
    const forml = document.getElementById("formulariol");
    const formr = document.getElementById("formularior");

    
    if (container && buttonlog && buttonreg && forml && formr) {//Si existen los elementos, que realice las acciones
        buttonreg.addEventListener('click', () => {
            container.classList.add("active");
        });

        buttonlog.addEventListener('click', () => {
            container.classList.remove("active");
        });

        forml.addEventListener("submit", function(e){
            e.preventDefault();
            const datos = new FormData(e.target);
            const datosingresados = Object.fromEntries(datos.entries());
            console.log(datosingresados);
        });

        formr.addEventListener("submit", function(e){
            e.preventDefault();
            const datos = new FormData(e.target);
            const datosingresados = Object.fromEntries(datos.entries());
            console.log(datosingresados);
        });
    } else {
        console.error('Uno de los objetos no existe');
    }
});