function Mostrar()
{
	var numeroAscendente=1;
	var text="";
	numeroAscendente=parseInt(numeroAscendente);
	while ((numeroAscendente) < 11) {
    text += " " + (numeroAscendente);
    (numeroAscendente)++;
}
//alert(text);
	document.write("<br>"+text);
}//FIN DE LA FUNCIÓN