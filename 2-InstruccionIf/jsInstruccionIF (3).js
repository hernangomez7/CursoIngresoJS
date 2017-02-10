function Mostrar()
{  
    var edad;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	if (edad<18)
	{
		alert("Usted es menor de edad");
	} else {
		alert("Usted es mayor de edad");
	} 

}//FIN DE LA FUNCIÓN