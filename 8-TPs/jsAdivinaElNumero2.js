/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;
var numero;
var mensaje;
contadorIntentos=0;
contadorIntentos=parseInt(contadorIntentos);
function comenzar()
{
	numeroSecreto=Math.floor(Math.random()*100)+1;
	numeroSecreto=parseInt(numeroSecreto);
	console.log("numero secreto="+numeroSecreto);
}

function verificar()
{
	numero=document.getElementById('numero').value;
	numero=parseInt(numero);
	if (numero==numeroSecreto){
		contadorIntentos+=1;
		if(contadorIntentos==1){
			alert("Usted es un psìquico");
		}else if(contadorIntentos==2){
			alert("Excelente percepciòn");
		}else if(contadorIntentos==3){
			alert("Esto es suerte");
		}else if(contadorIntentos==4){
			alert("Excelente tecnica");
		}else if(contadorIntentos==5){
			alert("Usted esta en la media");
		}else if(contadorIntentos>5&contadorIntentos<11){
			alert("falta tècnica");
		}else{
			alert("Afortunado en el amor!!")
		}
	}else if(numero<numeroSecreto){
		contadorIntentos+=1;
		alert("Falta para el numero secreto");
	}else if(numero>numeroSecreto){
		contadorIntentos+=1;
		alert("Se paso del numero Secreto");
	}else{
		alert("Eso no es un numero");
	}
	document.getElementById('intentos').value=contadorIntentos+(" intentos");
}