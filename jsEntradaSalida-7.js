/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	resultado=numeroUno+numeroDos;
	alert("la suma resulta "+(resultado));
}

function restar()
{
		var numeroUno;
	var numeroDos;
	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	resultado=numeroUno-numeroDos;
	alert("la resta resulta "+(resultado));	
}

function multiplicar()
{ 
		var numeroUno;
	var numeroDos;
	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	resultado=numeroUno*numeroDos;
	alert("la multiplicacion resulta "+(resultado));
}

function dividir()
{
		var numeroUno;
	var numeroDos;
	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	resultado=numeroUno/numeroDos;
	alert("la divicion resulta "+(resultado));
}

