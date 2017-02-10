function Mostrar()
{
	var mensajeRep;
	var repeticiones=5;
	repeticiones=parseInt(repeticiones);
	var text="Hola UTN FRA";
	for(mensajeRep=0;mensajeRep<repeticiones;mensajeRep++)
	{
		if(mensajeRep===3)
		{
			break;
		}
		alert(text);
	}
}//FIN DE LA FUNCIÓN