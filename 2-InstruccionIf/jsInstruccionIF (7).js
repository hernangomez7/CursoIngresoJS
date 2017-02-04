function Mostrar()
{
//tomo la edad  

	var edad;
	var estadoCivil;
	var Soltero;
	var Casado;
	var Divorsiado;
	edad=document.getElementById('edad').value;
	estadoCivil=document.getElementById('estadoCivil').value;
	edad=parseInt(edad);
	if (edad<18){
		if(estadoCivil=="Soltero"){
			alert("aun es menor y es soltero");
		} else if(estadoCivil=="Casado"){
			alert("Es muy pequeño para No ser soltero");
		} else {
			alert("Usted no pudo haberse casa como para estar divorsiado");
		}
	} else if (edad>17){
		if(estadoCivil=="Soltero"){
			alert("Es mayor y es soltero, la vida loca");
		} else if(estadoCivil=="Casado"){
			alert("Usted es mayor y es un prisionero");
		} else {
			alert("Usted es mayor y esta divorsiado, se quedo con el coche ¿no?");
		}
	}
}
//FIN DE LA FUNCIÓN