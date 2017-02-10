function Mostrar()
{
	var mensajeRep;
	var repeticiones=prompt("ingrese el número de repeticiones");
	var text="Hola UTN FRA";
	for(mensajeRep=0;mensajeRep<repeticiones;mensajeRep++)
	{
		if(repeticiones>=9)
		{
			break;
		}
		alert(text);
	}
}