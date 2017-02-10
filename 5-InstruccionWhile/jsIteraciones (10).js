function Mostrar()
{

	var contador=0;
	var positivos=0;
	var negativos=0;
	var sumaNega=0;
	var sumaPosi=0;
	var numerosCero=0;
	var numerosPar=0;
	var promePosi=0;
	var promeNega=0;
	var difePoNe=0;
	var resto;
	var respuesta="si";
	contador=parseInt(contador);
	positivos=parseInt(positivos);
	negativos=parseInt(negativos);
	sumaNega=parseInt(sumaNega);
	sumaPosi=parseInt(sumaPosi);
	numerosCero=parseInt(numerosCero);
	numerosPar=parseInt(numerosPar);
	promePosi=parseInt(promePosi);
	promeNega=parseInt(promeNega);
	difePoNe=parseInt(difePoNe);
	while(respuesta!="no")
	{
		resto=1;
		contador=parseInt(prompt("Ingrese el numero"));
		if (contador>0)
		{
			positivos=positivos+contador;
			sumaPosi=sumaPosi+1;
		}else if(contador<0)
		{
			negativos=negativos+contador;
			sumaNega=sumaNega+1;
		}else if(contador==0)
		{
			numerosCero=numerosCero+1;
			numerosPar=numerosPar-1;
		}
		resto=(contador)%(2);
		if(resto==0)
		{
			numerosPar=numerosPar+1;
		}
		respuesta=prompt("¿desea continuar?");
	}
	if (promePosi!=0)
	{
	promePosi=(positivos)/(sumaPosi);
	}
	if(promeNega!=0)
	{
	promeNega=(negativos)/(sumaNega);
	}
	difePoNe=(positivos)-(negativos);
	if(contador!=" ")
		{
			contador=0;
			promePosi=0;
			promeNega=0;
		}
	var mywindow=window.open("","MsgWindow","width=300,height=205");
	mywindow.document.write("Contador = "+contador+"<br>");
	mywindow.document.write("Suma de positivos = "+positivos+"<br>");
	mywindow.document.write("Suma de negativos = "+negativos+"<br>");
	mywindow.document.write("Negativos = "+sumaNega+"<br>");
	mywindow.document.write("Positivos = "+sumaPosi+"<br>");
	mywindow.document.write("Ceros = "+numerosCero+"<br>");
	mywindow.document.write("Pares = "+numerosPar+"<br>");
	mywindow.document.write("promedio de positivos = "+promePosi+"<br>");
	mywindow.document.write("promedio de negativos = "+promeNega+"<br>");
	mywindow.document.write("Diferencia de positivos y negativos = "+difePoNe+"<br>");
}//FIN DE LA FUNCIÓN