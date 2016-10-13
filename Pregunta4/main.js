// Pregunta 4

var n = parseInt(prompt("Ingresa el lado del cuadradado"));



$(document).ready(function(){
	// Lado de arriba
	var upSide = "<p> *";
	for(var i=0; i<(n-1); i++){
		var upSide = upSide + "*";
		console.log(upSide);
	}
	upSide = upSide + " </p>"
	$('.cuadro').append(upSide);
	//Lados intermedios
	for(var i=0; i<(n-2);i++){
		$('.cuadro').append("<p> *" + new Array(n-1).join('_')+"*</p>");
	}
	//Lado de abajo
	$('.cuadro').append(upSide);
});