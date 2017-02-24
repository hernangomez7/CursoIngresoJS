	/*
	function Mostrar()
	{	
		var numeroAscenente;
		text="";
		for(numeroAscenente=10;numeroAscenente>0;numeroAscenente--)
		{
			text+=" "+numeroAscenente;
		}
		alert(text);
	}
	*/
	function Mostrar()
	{	
		var mascota;
		var mascotaTiene=0;
		var mascotaNoTiene=0;
		var tipoMascota;
		var contador=0;
		var edad=0;
		var edadMayor=0;
		var nombrePrimerGato;
		var flagcat="vacio"
		var sexo;
		var edadGato=0;
		var nombreGato;
		for(;contador<5;)
		{
			edad=prompt("que edad tiene");
			edad=parseInt(edad);
			if (isNaN(edad))
			{
				edad=0;
			}
			mascota=prompt("tiene mascota?");
			while(mascota!="si"&&mascota!="no")
			{
				alert("responda la pregunta");
				mascota=prompt("tiene mascota");
				if (mascota=="si")
				{
					mascotaTiene=mascotaTiene+1;
					tipoMascota=prompt("ingrese tipo de mascota perro o gato");
					while(tipoMascota!="gato"&&tipoMascota!="perro")
					{
						alert("responda la pregunta");
						tipoMascota=prompt("ingrese tipo de mascota");
					}
					if(mascota=="gato")
					{
						nombreGato=prompt("nombre del  gato?")
						edadGato=prompt("ingrese la edad del gato");
						if(edadGato>0&&edadGato<6)
						{
							if(edad==30&&flagcat=="vacio")
							{
								nombrePrimerGato=nombreGato
							}
						}
					}
				}
				else
				{
					mascotaNoTiene=mascotaNoTiene+1;
				}
			}
			
			if(edad>edadMayor&&mascota="no")
			{
				edadMayor=edad;
			}
			contador++;
			//nombre del prime gato que sea de una mujer mayor a 30 años y el gato no tenga mas 5 años de edad
		}
	    



	}