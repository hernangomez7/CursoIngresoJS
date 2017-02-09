/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var Largo;
	var Ancho;
	var radio;
	var resultado;
	Largo=document.getElementById('Largo').value;
	Ancho=document.getElementById('Ancho').value;
	radio=document.getElementById('Radio').value;
	Largo=parseInt(Largo);
	Ancho=parseInt(Ancho);
	Radio=parseInt(Radio);
	resultado=2*(Largo+Ancho);
	alert("El Rectangulo de alambre es = "+(resultado)+" m");
}
function Circulo () 
{
	var Largo;
	var Ancho;
	var radio;
	var resultado;
	Largo=document.getElementById('Largo').value;
	Ancho=document.getElementById('Ancho').value;
	radio=document.getElementById('Radio').value;
	Largo=parseInt(Largo);
	Ancho=parseInt(Ancho);
	radio=parseInt(radio);
	resultado=2*3.14*(radio);
	alert("El circulo de alambre es = "+(resultado)+" m");
}
function Materiales () 
{
	var Largo;
	var Ancho;
	var radio;
	var resultado;
	var resultado2;
	var cemento;
	var cal;
	Largo=document.getElementById('Largo').value;
	Ancho=document.getElementById('Ancho').value;
	radio=document.getElementById('Radio').value;
	Largo=parseInt(Largo);
	Ancho=parseInt(Ancho);
	radio=parseInt(radio);
	resultado=(Largo+Ancho);
	cal=resultado*1.5
	cemento=resultado*1
	alert("La cantidad de bolsas de cemeto es = "+(cemento)+" Bolsas");
	alert("La cantidad de bolsas de cal es = "+(cal)+" Bolsas");
}