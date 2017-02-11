function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	var numero=prompt("ingrese el número de repeticiones");
	var divisoresCant=0;
	var text="";
	var numeroDos=parseInt(numero);
	var numero=parseInt(numero);
	divisoresCant=parseInt(divisoresCant);
	/*if(isNaN(numero))
	{
		alert("introduce un numero");
	}
	numero=Math.abs(numero);*/
	for(numeroUno=2;numeroUno<numero;numeroUno++)
	{
		if(numero/numero-1)
		{
			text+=", "+numeroUno;
		}	
	}
	divisoresCant=divisoresCant+1
	alert("divisores en contrados = "+divisoresCant);
	alert("divisores = 1"+text+", "+numero);
}