// REGISTRARSE
const registro = prompt("¿Desea registrarse?");

switch (registro){
    case"si":
        alert("Bienvenido, comencemos tu registro!!")
        let nombre = prompt("Ingrese su nombre");
        let apellido = prompt("Apellido");
        let mail = parseInt(prompt("Mail"));

        break;
    case "no":
        alert("Muchas gracias por visitarnos");
        break;
    default:
        alert("Debe indicar si o no");
        break;

}
//debo consultar a un tutor como se puede especificar que debe tener el formato "@" para que sea valido

// ***** BUSCAR DISPONIBILIDAD *****
// DECLARAR CANTIDAD DE PERSONAS
if (registro == "si"){
    let adultos = parseInt(prompt("Cantidad de adultos"));
let ninios = parseInt(prompt("Cantidad de niños"));

let totalPersonas = (adultos + ninios);
    if (totalPersonas <= 2){
        alert("Puede elegir *monoambiente* o *2ambientes*");

    }
    else if(totalPersonas = 3){
        alert ("Debe seleccionar un dpto *dos ambientes*");
    }
    else if(totalPersonas = 4){
        alert ("Debe seleccionar un dpto *dos ambientes*");
    }

    else if (4 < totalPersonas <= 6){
        alert("Puede elegir 1 *monoambiente y 1 dpto dos ambientes*; o *2 dptos dos ambientes*");
    }
    else if (6 < totalPersonas <= 8){
        alert("Debe elegir *2 dptos dos ambientes*");
    }
    
}
else{

}
let adultos = parseInt(prompt("Cantidad de adultos"));
let ninios = parseInt(prompt("Cantidad de niños"));

let totalPersonas = (adultos + ninios);
    if (totalPersonas <= 2){
        alert("Puede elegir *monoambiente* o *2ambientes*");

    }
    else if(totalPersonas = 3){
        alert ("Debe seleccionar un dpto *dos ambientes*");
    }
    else if(totalPersonas = 4){
        alert ("Debe seleccionar un dpto *dos ambientes*");
    }

    else if (4 < totalPersonas <= 6){
        alert("Puede elegir 1 *monoambiente y 1 dpto dos ambientes*; o *2 dptos dos ambientes*");
    }
    else if (6 < totalPersonas <= 8){
        alert("Debe elegir *2 dptos dos ambientes*");
    }


// SELECCIONAR TIPO DE DEPARTAMENTO 
//(boton monoambiente) 
const monoambiente = 6000;

//(boton 2 ambientes)
const dosAmbientes = 9500;

// BUSCAR FECHAS (presentar un calendario)


// CANTIDAD DE NOCHES (como aun no se como se puede seleccionar fechas en calendario, voy a  solicitar "cantidad de noches")
let noches = parseInt(prompt("Ingrese cantidad de noches que se hospedará"));


//CALCULAR COSTO DE ESTADIA

let precioEstadia1 = 0;
let precioEstadia2 = 0;
function multiplicar (noches, monoambiente, dosAmbientes){
    precioEstadia1 = noche * monoambiente;
    alert("El precio de su estadia es de " + precioEstadia1)
    precioEstadia2 = noche * dosAmbientes;
    alert("El precio de su estadia es de " + precioEstadia2)

}

