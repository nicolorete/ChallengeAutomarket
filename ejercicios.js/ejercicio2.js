const numeros = [1,2,3,4,5,7];

function sumarUno(arrayToCopy) {
    const array = [];
    for (let i = 0; i < arrayToCopy.length; i++) {
        array[i] = arrayToCopy[i] +1;
        
    }


    array.forEach(function(array){
        console.log(array);
    });
}

sumarUno(numeros);