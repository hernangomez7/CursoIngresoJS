function Mostrar()
{
//tomo la edad  
    var edad;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	if (edad>12&&edad<18)
	{
		alert("Usted es adolente");
	}
}//FIN DE LA FUNCIÓN