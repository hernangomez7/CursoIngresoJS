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
		} else {
		}
	} else if (edad>17){
		if(estadoCivil=="Soltero"){
			alert("Es soltero y no es menor");
		} else {	
		}
	}
}
//FIN DE LA FUNCIÓN