/*
var miIntervalo ;


function inicio()
{
	alert("function inicio.");
	miIntervalo = setInterval(SegundosEnElAire, 3000);
	
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
var Intervalo;
function inicio()
{
	alert("Inicio de intervalo = Activado");
	Intervalo= setInterval(Mensaje,3000);
}
function Mensaje()
{
	alert("Bienvenido a la UTN FRA");
}
function fin()
{
	alert("Inicio de intervalo = Desactivado");
	clearTimeout(Intervalo);
}