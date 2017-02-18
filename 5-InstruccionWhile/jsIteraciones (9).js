/*
function Mostrar()
{
	var contador=0;
	var maximo=0;
	var minimo=0;
	var respuesta='si';
	contador=parseInt(contador);
	maximo=parseInt(maximo);
	minimo=parseInt(minimo);
	contador=parseInt(prompt("Ingrese un numero"));
	maximo=contador;
	minimo=contador;
	respuesta=prompt("¿Desea continuar?");
	while(respuesta!='no')
	{
		contador=parseInt(prompt("Ingrese un numero"));
		if (maximo<contador)
		{
			maximo=contador;
		}
		if (minimo>contador)
		{
			minimo=contador;
		}
		respuesta=prompt("¿Desea continuar?");
	}
	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;
}//FIN DE LA FUNCIÓN

*/
function Mostrar()
{
	var contador=0;
	var maximo=0;
	var minimo=0;
	var numero;
	var edad=0;
	var aprobados=0;
	var varonesAprobados=0;
	var mujeresAprobadas=0;
	var promedioNotas=0;
	var cantidadNotas=0;
	var sumaNotas=0;
	var cantidadNotas=0;
	var nombre;
	var mayor;
	var sexo;
	var nota=0;
	var notaminima=0;
	var edadesFem=0;
	var sumaEdadFem=0;
	var promedioEdadesFem=0;
	var sexonotamin;
	var respuesta='si';
	var bandera="";
	var nombreDelDies;
	var edadDelDies;
	var sexoDelDies;
	while(respuesta!='no')
	{
		contador=contador+1;
		nombre=prompt("ingrese nombre");
		edad=prompt("ingrese edad");
		edad=parseInt(edad);
		while(edad>100&&edad<17)
		{
			alert("nombre invalido");
			edad=prompt("ingrese edad");
			edad=parseInt(edad);
		}
		sexo=prompt("ingrese su sexo con f o m");
		while(sexo!="f"&&sexo!="m")
		{
			alert("sexo invalido");
			sexo=prompt("ingrese su sexo con f o m");
		}
		nota=prompt("ingrese nota");
		nota=parseInt(nota);
		if(nota==10||bandera=="")
		{
			nombreDelDies=nombre;
			edadDelDies=edad;
			sexoDelDies=sexo;
		}
		while(nota<0||nota>10)
		{
			alert("nota invalida");
			nota=prompt("ingrese nota");
			nota=parseInt(nota);
		}
		if(contador==1)//cantidad de personas aprobadas
		{
			maximo=edad;
			minimo=edad;
			mayor=nombre;
			notaminima=nota;
		}
		 else
		{
		 if (edad>maximo)
		{
			maximo=edad;
		}
		if (edad<minimo) 
		{
			minimo=edad;
		}
	    }

	    if(contador==1)//sexo de nota min
		{
			notaminima=nota;
			sexonotamin=sexo;
		}
		 else
		{
		if (nota<notaminima) 
		{
			notaminima=nota;
			sexonotamin=sexo;
		}
	    }
	    if(nota>3)
	    {
	    	aprobados=aprobados+1;
	    }
		if(nota>3) //cuanas mujeres cuantos hombres desaprobaron
		{
			if(sexo=="m")
			{
				varonesAprobados=varonesAprobados+1;
			}
			else
			{
				if(sexo=="f")
				{
					mujeresAprobadas=mujeresAprobadas+1;
				}
			}
		}//promedio de notas
		if(nota>0)
		{
			cantidadNotas=cantidadNotas+1;
			sumaNotas=sumaNotas+nota;
		}
		if(sexo=="f")//edad promedio de las mujeres
		{
			edadesFem=edadesFem+1;
			sumaEdadFem=sumaEdadFem+edad;
		}


		
		respuesta=prompt("¿Desea continuar?");
	}
	promedioNotas=sumaNotas/cantidadNotas;
	promedioEdadesFem=sumaEdadFem/edadesFem;
	document.getElementById('maximo').value=promedioNotas;
	document.getElementById('minimo').value=promedioEdadesFem;
}