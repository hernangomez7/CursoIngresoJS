function Mostrar()
{
	var numeroUno;
	var numero=prompt("ingrese el número de repeticiones");
	var numeroDos;
	var resultado;
	var divisoresCant=0;
	var text="";
	var numeroDos=parseInt(numero);
	var numero=parseInt(numero);
	divisoresCant=parseInt(divisoresCant);
	if(isNaN(numero))
	{
		alert("introduce un numero");
	}
	numero=Math.abs(numero);
	for(numeroUno=2;numeroUno<numero;numeroUno++)
	{
		if((numero/2))
		{
			text+=", "+numeroUno;
		}	
	}
	divisoresCant=divisoresCant+2
	alert("divisores en contrados = "+divisoresCant);
	alert("divisores = 1"+text+", "+numero);
}