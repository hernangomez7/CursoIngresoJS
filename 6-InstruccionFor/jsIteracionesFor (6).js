function Mostrar()
{
	var numeroUno;
	var numero=prompt("ingrese el número de repeticiones");
	var resultado;
	var pares=0;
	var text="";
	pares=parseInt(pares);
	for(numeroUno=1;numeroUno<numero;numero--)
	{
		resultado=(numero)%(2);
			if (resultado==0)
			{
				pares=pares+1;
			}
			if (resultado==0)
			{
			text+=" "+numero;
			}
	}
	alert(" cantidad de pares = "+pares);
	alert("pares = "+text);
}