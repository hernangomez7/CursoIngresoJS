/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var nombre;
	nombre=prompt("ingrese su nombre","jose");
	document.getElementById('elNombre').value=nombre;

}

