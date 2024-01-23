/*
    CSS = estilo de la página
    HTML = estructura de la página
    JavaScript = parte funcional de la página


    //Agrega hasta el final el elemento 8 a un array
    .push(8);
    //Para eliminar el último elemento del array
    .pop()
    //Saber la cantidad de elementos del array
    .length;
    //Para saber el últmo elemento del array
    .length-1;
*/

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    //Esta es la forma de conectar los elementos del HTML y mi JS
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    // El === me sirve para comparar que debe ser igual tanto en valor como en el tipo de dato
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        }else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    //Utilizamos # para indicar que es por el id
    document.querySelector('#valorUsuario').value = '';
}

function generarUnNumeroSecreto() {
    //Multiplicamos por numeroMaximo para obtener números del 0 al numeroMaximo, utilizamos
    //math.floor para eliminar la parte decimal y obtener solo el entero, y sumamos 1 para empezar en 1 y no en 0
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarUnNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

    
   
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarUnNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();