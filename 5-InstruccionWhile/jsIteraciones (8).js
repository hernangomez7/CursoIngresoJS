function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	contador=parseInt(contador);
	positivo=parseInt(positivo);
	negativo=parseInt(negativo);
	var respuesta='si';
	while(respuesta=="si"||respuesta=="s")
	{
		contador=0
		contador=contador+parseInt(prompt("ingrese un numero"));
		if (contador>0)
		{
			positivo=positivo+contador;
		}else if(contador<0)
		{
			negativo=negativo*contador;
		}else
		{
			alert("¿Eso acaso es un numero?")
		}
		respuesta=prompt("¿quiere continuar?");
	}
	if (negativo<0)
		{
			negativo=negativo*(-1);
		}
	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN