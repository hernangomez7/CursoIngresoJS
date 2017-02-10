function Mostrar()
{
	var acumulador;
	var contador;
	var respuesta="si";
	var respuestaContador;
	acumulador=0;
	contador=0;
	acumulador=parseInt(acumulador);
	while (respuesta=="si"||respuesta=="s")
	{
		acumulador=acumulador+parseInt(prompt("ingrese un numero"));
		contador=contador+1;
		respuesta=prompt("desea continuar?");
	}
	respuestaContador=(acumulador)/(contador);
	document.getElementById('suma').value=acumulador+(" suma");
	document.getElementById('promedio').value=respuestaContador+(" promedio");
}//FIN DE LA FUNCIÓN