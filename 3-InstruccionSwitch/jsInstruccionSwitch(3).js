function Mostrar()
{
//tomo la edad  
    var mesDelAño=document.getElementById('mes').value;
	switch(mesDelAño)
	{
		case"Enero":
		alert("este mes tiene 30 dias o mas");
        break;
        case"Febrero":
        alert("este mes tiene 29 dias");
        break;
        case"Marzo":
        case"Abril":
        case"Mayo":
        case"Junio":
        case"Julio":
        case"Agosto":
        case"Septiembre":
        case"Octubre":
        case"Noviembre":
        case"Diciembre":
        alert("este mes tiene 30 dias o mas");
        break;
	}
}