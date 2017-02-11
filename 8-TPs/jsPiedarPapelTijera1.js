/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
	var eleccionMaquina;
	var numeroSecreto;
	var eleccion;
	function comenzar()
	{
		numeroSecreto=Math.floor(Math.random()*3)+1;
		numeroSecreto=parseInt(numeroSecreto);
		switch(numeroSecreto)
		{
			case 1:
			eleccionMaquina="piedra";
			break;
			case 2:
			eleccionMaquina="papel";
			break;
			case 3:
			eleccionMaquina="tijera";
			break;
		}
		console.log(numeroSecreto);
		console.log(eleccionMaquina);
	}
	function piedra()
	{
		alert("la maquina a elegido "+eleccionMaquina+" usted a elegido piedra");
		if(eleccionMaquina=="piedra")
		{
			alert("empate");
		}else if(eleccionMaquina=="papel")
		{
			alert("Usted perdio");
		}else if(eleccionMaquina=="tijera")
		{
			alert("Usted gano");
		}
	}//FIN DE LA FUNCIÓN
	function papel()
	{
		alert("la maquina a elegido "+eleccionMaquina+" usted a elegido papel");
		if(eleccionMaquina=="piedra")
		{
			alert("Usted gano");
		}else if(eleccionMaquina=="papel")
		{
			alert("empate");
		}else if(eleccionMaquina=="tijera")
		{
			alert("Usted perdio");
		}

	}//FIN DE LA FUNCIÓN
	function tijera()
	{
		alert("la maquina a elegido "+eleccionMaquina+" usted a elegido tijera");
		if(eleccionMaquina=="piedra")
		{
			alert("Usted perdio");
		}else if(eleccionMaquina=="papel")
		{
			alert("usted gano");
		}else if(eleccionMaquina=="tijera")
		{
			alert("empate");
		}

	

	}//FIN DE LA FUNCIÓN