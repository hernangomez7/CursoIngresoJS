/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
	var ColorSecreto;
	var tiempoInicio;
	var tiempoFinal;
	var colortext;
	var eleccion;
	var Responder;
	function comenzar()
	{
		ColorSecreto=Math.floor(Math.random()*6)+1;
		tiempoInicio=  new Date();
		tiempoInicio=tiempoInicio.getTime();
		console.log(ColorSecreto+" color sercreto");
		switch(ColorSecreto)
		{
			case 1:
			colortext=("azul");
			break;
			case 2:
			colortext=("amarillo");
			break;
			case 3:
			colortext=("marron");
			break;
			case 4:
			colortext=("verde");
			break;
			case 5:
			colortext=("celeste");
			break;
			case 6:
			colortext=("rojo")
			break;
		}
		document.getElementById('ColorElejido').value=colortext;
	}//FIN DE LA FUNCIÓN
	function Responder(colorParametro)
	{

		tiempoFinal= new Date();
		tiempoFinal=tiempoFinal.getTime();
		resultado=tiempoFinal-tiempoInicio;
		alert(resultado+" segundos");
		if (ColorSecreto==Responder)
		{
			alert("gaaaaaaaanoooooooooooooo")
		}else
		{
			alert("vas a morir")
		}
	}

	/*
	var ColorSecreto;
var tiempoInicio;
function comenzar()
{

	

}
function Responder(colorParametro)
{
	
	


}
	*/