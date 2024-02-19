function guardar() {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let contraseña = document.getElementById("contraseña").value;
    let datos = {
        Nombre: nombre,
        Edad: edad,
        Contraseña: contraseña
    };
    console.log("Nombre: " + datos.Nombre);
    console.log("Edad: " + datos.Edad);
    console.log("Contraseña: " + datos.Contraseña);
}
