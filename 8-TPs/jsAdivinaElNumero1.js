/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var numero;
contadorIntentos=0;
contadorIntentos=parseInt(contadorIntentos);
function comenzar()
{
	numeroSecreto=Math.floor(Math.random()*100)+1;
	numeroSecreto=parseInt(numeroSecreto);
}

function verificar()
{
	numero=document.getElementById('numero').value;
	numero=parseInt(numero);
	if (numero==numeroSecreto){
		contadorIntentos+=1;
		alert("Usted es un ganador");
	}else if(numero<numeroSecreto){
		contadorIntentos+=1;
		alert("Falta para el numero secreto");
	}else if(numero>numeroSecreto){
		contadorIntentos+=1;
		alert("Se paso del numero Secreto");
	}else{
		alert("Eso no es un numero");
	}
	document.getElementById('intentos').value=contadorIntentos+(" intentos");
}