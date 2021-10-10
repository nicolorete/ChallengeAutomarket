

var contador = 0;
 var oracion = "CaDena con MayUsCulAs";
 var mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


function CantidadMayusculas (oracion){
for (var i = 0; i < mayusculas.length; i++) {
 for (var x = 0; x < oracion.length; x++) {
 if(oracion[x]==mayusculas[i]){
 contador+=1;
     }
   }
 }

console.log("Se encontraron: "+contador+" Mayusculas");
}

CantidadMayusculas(oracion);