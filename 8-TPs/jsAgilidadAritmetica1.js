/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
	var respuesta;
	var numeroUno;
	var numeroDos;
	var operacion;
	var resultado;
	var operacion2;
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
