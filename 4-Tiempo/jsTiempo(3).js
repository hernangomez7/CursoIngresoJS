/*
var miIntervalo ;
var contador=0;

function inicio()
{
	alert("function inicio.");
	miIntervalo = setInterval(SegundosEnElAire, 2000);
	
}//FIN DE LA FUNCIÓN inicio

function SegundosEnElAire() {

	contador=contador +1;
    alert("Bienvenido a la UTN FRA, cantidad ="+contador);
    
}//FIN DE LA FUNCIÓN SegundosEnElAire

function fin()
{
	alert("function fin.");
	clearInterval(miIntervalo);

}//FIN DE LA FUNCIÓN fin
*/
/*
var Intervalo;
var Contador=0;
function inicio()
{
	alert("incio de intervalo");
	Intervalo=setInterval(mensaje,2000);
}
function mensaje()
{
	Contador=Contador+1;
	alert("Bienvenido a la UTF FRA "+"veces de mensaje "+Contador);
}
function fin()
{
	clearInterval(Intervalo);
	alert("final de intervalo");
}
*/

	var Intervalo;
	var contador=0;

	function inicio()
	{
		Intervalo=setInterval(mensaje,2000);
	}
	function mensaje()
	{
		contador=contador+1;
		alert("Bienvenido a la UTN FRA "+contador);
	}
	function fin ()
	{
		clearTimeout(Intervalo);
	}