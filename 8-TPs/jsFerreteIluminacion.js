/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	var lamparitas;
	var marca;
	var descuento;
	var resultado;
	var precioFinal;
	var impuesto;
	lamparitas=document.getElementById('Cantidad').value;
	marca=document.getElementById('Marca').value;
	lamparitas=parseInt(lamparitas);
	if (lamparitas>5){
			descuento=0.5;
	}else if(lamparitas==5){
		if(marca=="ArgentinaLuz"){
			descuento=0.6;
		}else{
			descuento=0.7;
		}
	}else if(lamparitas==4){
		if(marca=="ArgentinaLuz"){
			descuento=0.75;
		}else{
			descuento=0.8;
		}
	}else if(lamparitas==3){
		if(marca=="ArgentinaLuz"){
			descuento=0.85;
		}else if(marca=="FelipeLamparas"){
			descuento=0.90;
		}else{
			descuento=0.95;
		}
	}else{
		descuento=1;
	}
	resultado=((lamparitas)*35)*(descuento);

	    if (resultado<121){
	    	precioFinal=resultado;
	    	impuesto=0;
	}else{
		precioFinal=resultado*1.1;
		impuesto=resultado*0.1;
	}
	alert("Precio final es = "+precioFinal+"$ Usted pago "+impuesto+"$ de IIBB");
}