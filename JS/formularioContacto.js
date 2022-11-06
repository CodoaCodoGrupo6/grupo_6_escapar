// Expresiones regulares
// "/^" indica donde empieza y "$/" indica donde termina
// ["a-z"] indica que toma letras de la "a" a la "z" minusculas
// [a-z"A-Z"] indica que toma letras de la "a" a la "z" mayusculas
// [a-zA-Z"À-ÿ"] indica ...
// [a-zA-ZÀ-ÿ"\s"] indica ...
// {3,15} indica que tiene que tener un minimo de 3 y 15 caracteres

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario .formulario__input__obligatorio');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
    nombre: false,
    apellido: false,
    email: false,
    telefono: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
        case "apellido":
            validarCampo(expresiones.apellido, e.target, 'apellido');
        break;
        case "email":
            validarCampo(expresiones.email, e.target, 'email');
        break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
        break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`campo-${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`campo-${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#campo-${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`campo-${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`campo-${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#campo-${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

// Codigo para Estetica del Alert

function mostrarAlert(){
    swal({
        title: 'Enviado',
        text: 'Su consulta ha sido enviada con exito. En breve nos pondremos en contacto con usted. Muchas gracias',
        icon: 'success'
    });
}

// Codigo para consumir la API del formulario

const $form = document.querySelector("#formulario")

$form.addEventListener("submit", handleSubmit)

async function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            "Accept": "application/json"
        }
    })
    if(response.ok){
        mostrarAlert();
    }
}