/*
function Mostrar()
{
	var numeroAscenente;
	text="";
	for(numeroAscenente=1;numeroAscenente<11;numeroAscenente++)
	{
		text+=" "+numeroAscenente;
	}
	alert(text);
}
*/
/*
	function Mostrar()
	{
		var cont=0;
		for(;;)
		{
			alert(cont);
			cont++;
			if(cont==5)
			{
				break;
			}
		}
	 }
*/
	function Mostrar()
	{
		var cont=0;
		var numeroRan=0;
		var contador=0;
		var contadorUno=0;
		var contadorDos=0;
		var contadorTres=0;
		var contadorCuatro=0;
		var contadorCinco=0;
		var contadorSeis=0;
		var contadorSiete=0;
		var contadorOcho=0;
		var contadorNueve=0;
		var contadorDiez=0;
		var porcentajeUno;
		for(;cont<1000;cont++)
		{
			numeroRan=Math.floor(Math.random()*10)+1;
			contador=contador+1;
			switch(numeroRan)
			{
				case 1:
				contadorUno=contadorUno+1;
				break;
				case 2:
				contadorDos=contadorDos+1;
				break;
				case 3:
				contadorTres=contadorTres+1;
				break;
				case 4:
				contadorCuatro=contadorCuatro+1;
				break;
				case 5:
				contadorCinco=contadorCinco+1;
				break;
				case 6:
				contadorSeis=contadorSeis+1;
				break;
				case 7:
				if (contadorSiete==7)
				{
					continue;
				}
				contadorSiete=contadorSiete+1;
				break;
				case 8:
				contadorOcho=contadorOcho+1;
				break;
				case 9:
				contadorNueve=contadorNueve+1;
				break;
				case 10:
				contadorDiez=contadorDiez+1;
				break;
			}
		}
		/*
		console.log(contadorUno+" unos");
		console.log(contadorDos+" Dos");
		console.log(contadorTres+" tres");
		console.log(contadorCuatro+" cuatros");
		console.log(contadorCinco+" cincos");
		console.log(contadorSeis+" seis");
		console.log(contadorSiete+" sietes");
		console.log(contadorOcho+" ochos");
		console.log(contadorNueve+" nueves");
		console.log(contadorDiez+" diez");
        */
        console.log(contador);
		console.log(contadorUno/contador*100+" %");
		console.log(contadorDos/contador*100+" %");
		console.log(contadorTres/contador*100+" %");
		console.log(contadorCuatro/contador*100+" %");
		console.log(contadorCinco/contador*100+" %");
		console.log(contadorSeis/contador*100+" %");
		console.log(contadorSiete/contador*100+" %");
		console.log(contadorOcho/contador*100+" %");
		console.log(contadorNueve/contador*100+" %");
		console.log(contadorDiez/contador*100+" %");

	 }