function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var sumar;
	var respuesta;
	acumulador=prompt("ingrese un numero").value;
	respuesta=prompt("desea continuar").value;
	acumulador=parseInt(acumulador);
	/*while (respuesta=="si")
	{
		acumulador+=prompt("ingrese un numero").value;
		acumulador=parseInt(acumulador);
		alert(acumulador);
		respuesta=prompt("desea continuar?").value;
	}*/
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN