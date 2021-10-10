var numero = window.prompt('Cantidad de numeros a generar');

var array = [];
function generarNumAleatorio(array, numero) {
    
    for (let i = 0; i < numero; i++) {
        
        console.log(`Numero aleartorio ${i}`);
        array[i] = aleatorio(1,100);
    }
    
}
function aleatorio(minimo, maximo) {
   var numero = Math.floor(Math.random() * ((maximo + 1) - minimo) + minimo);
    console.log(numero);
}

//aleatorio(1,5)
generarNumAleatorio(array, numero);