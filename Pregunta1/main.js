// ### Pregunta 1 (1pto)

function sumArreglo(arreglo){
	var sumAr = 0;
	for(var i=0;i<arreglo.length;i++){
		sumAr = sumAr + arreglo[i];
	}
	return sumAr;
}

var arreglo = [1,2,3,4,5,6];

console.log(sumArreglo(arreglo));

