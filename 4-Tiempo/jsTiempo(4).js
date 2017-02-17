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
    if (contador==5)
    {
    	clearInterval(miIntervalo);
    }
}//FIN DE LA FUNCIÓN SegundosEnElAire

function fin()
{
	alert("function fin.");
	clearInterval(miIntervalo);

}//FIN DE LA FUNCIÓN fin
*/
/*
var Intervalo;
var contador=0;
function inicio()
{
	alert("intervalo iniciado");
	Intervalo=setInterval(mensaje,2000);
}
function mensaje()
{
	contador=contador+1;
	alert("Bienvenido a la UTN FRA "+contador);
	if (contador==5)
	{
		clearInterval(Intervalo);
	}
}
function fin()
{
	alert("fin del intervalo");
	clearInterval(Intervalo);
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
		if (contador==5)
		{
			clearTimeout(Intervalo);
			contador=0;
		}
	}
	function fin ()
	{
		clearTimeout(Intervalo);
	}