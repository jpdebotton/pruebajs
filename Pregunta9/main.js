// Pregunta 9
$('.submit').on('click',function(event){
	if($('.correo').value=""){
		event.preventDefault();
		alert("Debes ingresar un correo");
	}
})