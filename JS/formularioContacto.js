let nombre = document.getElementById("nombre").value;
let apellido = document.getElementById("apellido").value;
let email = document.getElementById("e-mail").value;
let telefono = document.getElementById("telefono").value;

function validarFormulario(){
    if(nombre != "" ){
        console.log("Checkeado Perri");
        console.log(nombre);
    } else{
        console.log("No le capta");
        console.log(nombre);
    }
}