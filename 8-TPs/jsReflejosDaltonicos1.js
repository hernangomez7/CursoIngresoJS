/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
	var ColorSecreto;
	var tiempoInicio;
	var Responder;
	var tiempoFinal;
	function comenzar()
	{
		ColorSecreto=Math.floor(Math.random()*6)+1;
		tiempoInicio=  new Date();
		tiempoInicio=tiempoInicio.getTime();
		console.log(ColorSecreto+" color sercreto");
	}//FIN DE LA FUNCIÓN

	function Responder(azul)
	{

		tiempoFinal= new Date();
		tiempoFinal=tiempoFinal.getTime();
		resultado=tiempoFinal-tiempoInicio;
		alert(resultado/1000+" segundos");
		switch(ColorSecreto==1)
		{
			case 1:
			alert("gano");
			break;
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			alert("perdio");
			break;
		}
	}//FIN DE LA FUNCIÓN
