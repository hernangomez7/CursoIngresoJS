function Mostrar()
{
//tomo la edad  
    var edad;
    edad=document.getElementById('edad').value;
    edad=parseInt(edad);
    if (edad==15){
	    alert("niña bonita");
    } else {
    	alert("Error");
    }

}//FIN DE LA FUNCIÓN