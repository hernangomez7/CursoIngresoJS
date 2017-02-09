function Mostrar()
{
	    var numero = prompt("ingrese un número entre 0 y 10.");
	    numero=parseInt(numero);
	    while (numero<1||numero>9) {
        numero = prompt("ingrese un número entre 0 y 10.");
    }
    document.getElementById('Numero').value=numero+(" numero validado");
}//FIN DE LA FUNCIÓN||