function Mostrar()
{
	var Nota;
	Nota=Math.floor(Math.random()*11);
	if (Nota<4)
	{
		alert("Vamos la proxima se puede");
	} else if(Nota<9)
	{
		alert("APROBÒ");
	} else if (Nota>8)
	{
		alert("EXCELENTE");
	} else {
		alert("La nota tiene que ser numerica, de 0 a 10")
	}
	//Genero el número RANDOM entre 1 y 10 
}//FIN DE LA FUNCIÓN