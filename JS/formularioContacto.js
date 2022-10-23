const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

// Expresiones regulares
// "/^" indica donde empieza y "$/" indica donde termina
// ["a-z"] indica que toma letras de la "a" a la "z" minusculas
// [a-z"A-Z"] indica que toma letras de la "a" a la "z" mayusculas
// [a-zA-Z"À-ÿ"] indica ...
// [a-zA-ZÀ-ÿ"\s"] indica ...
// {3,15} indica que tiene que tener un minimo de 3 y 15 caracteres

const expresiones = {
    nomObligatorio: /^[a-zA-ZÀ-ÿ\s]{3,15}$/, // Toma letras y espacios, tambien puede llevar acentos
    apObligatorio: /^[a-zA-ZÀ-ÿ\s]{3,15}$/, // Toma letras y espacios, tambien puede llevar acentos
    emailObligatorio: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telObligatorio: /^\d{7,14}$/ // Toma de 7 a 14 numeros
}

const validarFormulario = (event) => {
    switch (event.target.name) {
        case "nombre":
            validarCampo(expresiones.nomObligatorio, event.target, "nombre")
        break;
        case "apellido":
            
        break;
        case "email":
            
        break;
        case "telefono":
            
        break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.nomObligatorio.test(input.value)){
        document.getElementById(`campo-${campo}`).classList.remove("formulario__grupo-incorrecto");
        document.getElementById(`campo-${campo}`).classList.add("formulario__grupo-correcto");
        document.querySelector(`#campo-${campo} i`).classList.add("fa-check-circle");
        document.querySelector(`#campo-${campo} i`).classList.remove("fa-times-circle");
    } else{
        document.getElementById(`campo-${campo}`).classList.add("formulario__grupo-incorrecto");
        document.getElementById(`campo-${campo}`).classList.remove("formulario__grupo-correcto");
        document.querySelector(`#campo-${campo} i`).classList.add("fa-times-circle");
        document.querySelector(`#campo-${campo} i`).classList.remove("fa-check-circle");
    }
}

inputs.forEach( (input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});


formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
});