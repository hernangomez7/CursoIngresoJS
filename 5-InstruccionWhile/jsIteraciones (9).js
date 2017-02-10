function Mostrar()
{
	var contador=0;
	var maximo=0;
	var minimo=0;
	var respuesta='si';
	contador=parseInt(contador);
	maximo=parseInt(maximo);
	minimo=parseInt(minimo);
	contador=parseInt(prompt("Ingrese un numero"));
	maximo=contador;
	minimo=contador;
	respuesta=prompt("¿Desea continuar?");
	while(respuesta!='no')
	{
		contador=parseInt(prompt("Ingrese un numero"));
		if (maximo<contador)
		{
			maximo=contador;
		}
		if (minimo>contador)
		{
			minimo=contador;
		}
		respuesta=prompt("¿Desea continuar?");
	}
	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;
}//FIN DE LA FUNCIÓN