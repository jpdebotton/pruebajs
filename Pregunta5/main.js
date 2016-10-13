//Pregunta 5
// Definimos la clase telefono
function Telefono(num, marca, color) {
	this.marca = marca;
	this.color = color;
	this.num = num;
	this.numLlamadas = 0;
	this.marcar = function(){
	console.log("llamada realizada");
	this.numLlamadas++;
	return this.numLlamadas;
	};
}

// Se crean 3 telèfonos
var tel_juan = new Telefono(55555552, "samsung","azul");
var tel_amelie = new Telefono(00325464,"apple","rojo");
var tel_rulo = new Telefono(25334323, "samsung","verde");

// Juan realiza un par de llamadas de prueba
tel_juan.marcar();
var numJuan = tel_juan.marcar();
console.log("Se han realizado " + numJuan + " llamadas."); // Dos llamadas realizadas (numLlamadas =2)

//Arreglo de teléfonos
var guiaTel = [tel_juan,tel_amelie,tel_rulo];
console.log(guiaTel);

var telMarca = (function(telArray,marcaSeleccionar){
	var telMarca = [];
	for(var i=0; i < guiaTel.length; i++){
		if(telArray[i].marca == marcaSeleccionar){
			telMarca.push(telArray[i]);
		}
	}
	return telMarca;
	console.log(telMarca);
}(guiaTel,"samsung"))
console.log(telMarca);