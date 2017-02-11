function Mostrar()
{ 
    var mesDelAño=document.getElementById('mes').value;
	switch(mesDelAño)
	{
        case"Febrero":
        alert("este mes tiene 29 dias");
        break;
        case"Abril":        
        case"Junio":
        case"Septiembre":
        case"Noviembre":
        alert("este mes tiene 30 dias");
        break;
        case"Enero":
        case"Marzo":
		case"Mayo":
		case"Julio":
        case"Agosto":
        case"Octubre":
        case"Diciembre":
        alert("este mes tiene 31");
        break;
	}
}