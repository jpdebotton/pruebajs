// Pregunta 2
var suma = 0;

do{	
	var ingreso = prompt("ingresa un número");
	var num_ingreso = parseInt(ingreso)	
	if(!isNaN(num_ingreso)){
	suma = suma + num_ingreso;}}
while(ingreso != "fin");
console.log(suma);