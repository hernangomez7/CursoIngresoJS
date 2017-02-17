/*
var miTemporizador ;
var contador=0;

function inicio()
{
	alert("function inicio.");
	miTemporizador = setTimeout(SegundosEnElAire, 3000);
	
}//FIN DE LA FUNCIÓN inicio

function SegundosEnElAire() {


    alert("Bienvenido a la UTN FRA");
   
}//FIN DE LA FUNCIÓN SegundosEnElAire

function fin()
{
	alert("function fin.");
	clearTimeout(miIntervalo);

}//FIN DE LA FUNCIÓN fin
*/
var intervalo;
var contador;
function inicio()
{
	alert("intervalo iniciado");
	intervalo=setTimeout(mensaje,3000);
}
function mensaje()
{
	alert("Bienvenido a la UTN FRA");
}
function fin()
{
	alert("fin de intervalo");
	clearTimeout(intervalo);
}