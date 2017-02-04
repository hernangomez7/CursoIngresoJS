/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	var suma;
	PrecioUno=document.getElementById('PrecioUno').value;
	PrecioDos=document.getElementById('PrecioDos').value;
	PrecioTres=document.getElementById('PrecioTres').value;
	PrecioUno=parseInt(PrecioUno);
	PrecioDos=parseInt(PrecioDos);
	PrecioTres=parseInt(PrecioTres);
	suma=(PrecioUno)+(PrecioDos)+(PrecioTres);
	alert(suma);
}
function Promedio () 
{
var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	var prome;
	PrecioUno=document.getElementById('PrecioUno').value;
	PrecioDos=document.getElementById('PrecioDos').value;
	PrecioTres=document.getElementById('PrecioTres').value;
	PrecioUno=parseInt(PrecioUno);
	PrecioDos=parseInt(PrecioDos);
	PrecioTres=parseInt(PrecioTres);
	prome=((PrecioUno)+(PrecioDos)+(PrecioTres))/3;
	alert(prome);

}
function PrecioFinal () 
{
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	var suma;
	PrecioUno=document.getElementById('PrecioUno').value;
	PrecioDos=document.getElementById('PrecioDos').value;
	PrecioTres=document.getElementById('PrecioTres').value;
	PrecioUno=parseInt(PrecioUno);
	PrecioDos=parseInt(PrecioDos);
	PrecioTres=parseInt(PrecioTres);
	suma=((PrecioUno)+(PrecioDos)+(PrecioTres))*1.21;
	alert(suma);

}