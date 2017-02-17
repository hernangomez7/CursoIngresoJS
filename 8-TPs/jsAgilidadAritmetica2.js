/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
	var respuesta;
	var numeroUno;
	var numeroDos;
	var operacion;
	var resultado;
	var operacion2;
	var temporizador;
	function comenzar()
	{
		numeroUno=Math.floor(Math.random()*10)+1;
		numeroDos=Math.floor(Math.random()*10)+1;
		operacion=Math.floor(Math.random()*4)+1;
		switch(operacion)
		{
			case 1:
			resultado=numeroUno+numeroDos;
			break;
			case 2:
			resultado=numeroUno-numeroDos;
			break;
			case 3:
			resultado=numeroUno/numeroDos;
			break;
			case 4:
			resultado=numeroUno*numeroDos;
			break;
		}
		switch (operacion)
		{
			case 1:
			operacion2="+";
			break;
			case 2:
			operacion2="-";
			break;
			case 3:
			operacion2="/";
			break;
			case 4:
			operacion2="*";
			break;
		}
		document.getElementById('PrimerNumero').value=numeroUno;
		document.getElementById('Operador').value=operacion2;
		document.getElementById('SegundoNumero').value=numeroDos;
		temporizador=setTimeout(mensaje,4000);
	}
	function Responder()
	{
	respuesta=document.getElementById("Respuesta").value;
	if (respuesta==resultado)
	{
		alert("respuesta correcta");
	}else
	{
		alert("MAAAAAAAL");
	}
	}//FIN DE LA FUNCIÓN
	function mensaje()
	{
		alert("El tiempo acabo");
	}