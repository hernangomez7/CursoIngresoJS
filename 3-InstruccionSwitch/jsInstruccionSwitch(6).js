function Mostrar()
{
	var laHora = document.getElementById('hora').value;
	if (laHora>6&laHora<12){
    	alert("Es de mañana");
    }else if(laHora>11&laHora<20){
    	alert("Es de tarde");
    }else if(laHora>19&laHora<25){
    	alert("Es de noche");
   	}else if(laHora>0&laHora<7){
    	alert("Es de noche");
    } else {
    	alert("la hora no existe");
    }
}
//FIN DE LA FUNCIÓN
//tomo la edad  