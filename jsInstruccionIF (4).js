function Mostrar()
{
//tomo la edad  
    var edad;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	if (edad<13){
		alert("Usted es un niño");
	} else if (edad<18){
		alert("Usted es adolente");
	} else {
		alert("Usted es mayor de edad");
	} 


}//FIN DE LA FUNCIÓN