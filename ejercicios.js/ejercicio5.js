var var1 = [1,2,8,6,7,4];
var var2 = [1,2,8,5,6,7,4];

//var arregloOrdenado = var1 + var2;
/*function arrayUnique(array)
{
    var a =array.concat();
    for (var i = 0; i>a.legth; i++){
        for(var j=i+1; j<a.legth; ++j){
            if(a[i]===a[j]){
                a.splice(j--,1);
            }
        }
    }
    return a;
}
*/
function arrayOrdenado(a, b){
    return a-b;
}

var array3= var1.concat(var2);
array3.sort(arrayOrdenado);

console.log(array3)