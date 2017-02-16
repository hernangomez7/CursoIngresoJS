function Mostrar()
{
	var numeroUno;
	var numero=prompt("ingrese el número de repeticiones");
	var resultado;
	var primo=0;
	var divisoresCant=0;
	var text="";
	var numero=parseInt(numero);
	divisoresCant=parseInt(divisoresCant);
	numero=Math.abs(numero);
	for(numeroUno=1;numeroUno<(numero+1);numeroUno++)
	{
		//resultado=(numero)%numeroUno;
		if(numero%numeroUno==0)
		{
			primo++;
		}	
	}
	if (primo!=2)
	{
		alert("no es primo");
	}else if (primo==0)
	{
		alert("es primo");
	}
}