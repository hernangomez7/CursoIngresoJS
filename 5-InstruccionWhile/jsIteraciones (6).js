function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroUNO;
	var numeroDos;
	var numeroTres;
	var numeroCuatro;
	var numeroCinco;
	var resultado;
	numeroUNO=prompt("ingrese numero 1");
	while (!(numeroUNO>=0||numeroUNO<=0))
	{
		numeroUNO=prompt("ingrese numero 1");
	}
	numeroDos=prompt("ingrese numero 2");
	while (!(numeroDos>=0||numeroDos<=0))
	{
		numeroDos=prompt("ingrese numero 2");
	}
	numeroTres=prompt("ingrese numero 3");
	while (!(numeroDos>=0||numeroDos<=0))
	{
		numeroTres=prompt("ingrese numero 3");
	}
	numeroCuatro=prompt("ingrese numero 4");
	while (!(numeroDos>=0||numeroDos<=0))
	{
		numeroCuatro=prompt("ingrese numero 4");
	}
	numeroCinco=prompt("ingrese numero 5");
	while (!(numeroDos>=0||numeroDos<=0))
	{
		numeroCinco=prompt("ingrese numero 5");
	}
	numeroUNO=parseInt(numeroUNO);
	numeroDos=parseInt(numeroDos);
	numeroTres=parseInt(numeroTres);
	numeroCuatro=parseInt(numeroCuatro);
	numeroCinco=parseInt(numeroCinco);
	acumulador=(numeroUNO+numeroDos+numeroTres+numeroCuatro+numeroCinco);
	contador=(acumulador)/5;
    document.getElementById('suma').value=acumulador;
    document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN