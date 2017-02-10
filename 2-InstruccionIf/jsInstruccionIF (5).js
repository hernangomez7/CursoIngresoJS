function Mostrar()
{
//tomo la edad  
    var edad;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	if (edad<18)
	{
		alert("Usted no es adolesente");
	} 
}//FIN DE LA FUNCIÓN