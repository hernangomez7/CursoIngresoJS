function Mostrar()
{
	var bloqueo=1;
	var numero = prompt("ingrese un número entre 0 y 9.");
	numero=parseInt(numero);
	bloqueo=parseInt(bloqueo)
	if (numero>=0&&numero<10)
	{
		bloqueo=0;
	}else{
		bloqueo=1;
	}
	while (bloqueo==1)
	{
		alert("numero incorrecto");
		bloqueo=0;
		
    }
    if (numero>=0&&numero<10)
	{
		document.getElementById('Numero').value="Desbloqueado";
	}else{
		document.getElementById('Numero').value="Bloqueado";
	}
    
}//FIN DE LA FUNCIÓN||
