/**
 * 
 */

window.onload=function()
{
	

	cuerpo = document.getElementById("contenedor");
	

	var img=cuerpo.getElementsByTagName("img");
	ordenCorrecto=[];
	

	imagenes=Array();
	
	num=img.length;
	
	
	
	//*****************************
	//orden correcto imagenes, para saber cuando hemos ganado
	
	for(var i=0;i<num;i++)
	{
		
		
		ordenCorrecto.push(img[i].getAttribute("id"));
		
		
	}
	
	
	
	//***************************************************
	//clono las imagenes en un array para después borrar las originales e incluir las clonadar ya revueltas

	
	for(var i=0;i<num;i++)
	{
		
		
			imagenes.push(img[i].cloneNode(true));
		
		
		
	}
	


var tds=cuerpo.getElementsByTagName("td");

	
	for(var i=0;i<num;i++)
	{
		var j=0;
		
		
			tds[i].removeChild(img[j]);
		
		
	}
	

	
	imagenes.sort(function() {return Math.random() - 0.5});
	
	var blanca=document.createElement("img");
	
	blanca.setAttribute("href", "imagenes/24.png");
	blanca.setAttribute("id", "a24");
	blanca.setAttribute("width", "125px");
	blanca.setAttribute("height", "149.9px");
	
	
	imagenes.push(blanca);//Añado la última ficha para que se añada siempre en la última posición
	ordenCorrecto.push(blanca);//Añado la ficha en blanco para que la tenga en cuenta a la hora de saber si la imagen es correcta
	
	
	for( i=0;i<imagenes.length;i++)
	{
		
		tds[i].appendChild(imagenes[i]);
	
	}
	
		
	
	
	for ( i=0; i<imagenes.length; i++)
	{
		imagenes[i].onclick = mover;
	}

	
	
}

function mover() {
	var padre= document.getElementById("tabla");
	var movida = false; // Para evitar volver a mover la ficha una vez movida en el resto de comprobaciones
	var col = this.parentNode.cellIndex; // Columna de la ficha presionada
	
	
	
	//Derecha
	if(this.parentNode.nextElementSibling)
	{
		
		var derecha=this.parentNode.nextElementSibling.getElementsByTagName("img")[0];
		console.log(derecha)
		
		if(derecha.getAttribute("id")=="a24"&& !movida)
		{
			
			var celdaPulsada=this.parentNode;
			var hueco=document.getElementById("a24")
			var celdaHueco=hueco.parentNode
			
			celdaHueco.appendChild(this);
			celdaPulsada.appendChild(hueco)
		
			
			movida = true;
		}
	}
	
	
	
	//Izquierda
	if(this.parentNode.previousElementSibling)
	{
		var izq =this.parentNode.previousElementSibling.getElementsByTagName("img")[0];
		
		if(izq.getAttribute("id")=="a24"&& !movida)
		{
			var celdaPulsada=this.parentNode;
			var hueco=document.getElementById("a24")
			var celdaHueco=hueco.parentNode
			
			celdaHueco.appendChild(this);
			celdaPulsada.appendChild(hueco)
		
			
			movida = true;
		}
		
	}
	
	
	
	
	//Abajo

	if(this.parentNode.parentNode.nextElementSibling)
	{
		var abajo=this.parentNode.parentNode.nextElementSibling.children[col];
		
		
		if(abajo.getElementsByTagName("img")[0].getAttribute("id")=="a24"&& !movida)
		{
			
			var celdaPulsada=this.parentNode;
			var hueco=document.getElementById("a24")
			var celdaHueco=hueco.parentNode
			
			celdaHueco.appendChild(this);
			celdaPulsada.appendChild(hueco)
		
			
			movida = true;
			
		}
	
	}
	


	
	//Arriba
	if(this.parentNode.parentNode.previousElementSibling)
	{
		var arriba=this.parentNode.parentNode.previousElementSibling.children[col];
	
	
		if(arriba.getElementsByTagName("img")[0].getAttribute("id")=="a24"&& !movida)
		{
			var celdaPulsada=this.parentNode;
			var hueco=document.getElementById("a24")
			var celdaHueco=hueco.parentNode
			
			celdaHueco.appendChild(this);
			celdaPulsada.appendChild(hueco)
			
	
			movida = true;
		}
	
	}
	
	
	var img=cuerpo.getElementsByTagName("img");
	
	compruebaImagen(img);

	
}

function compruebaImagen(imagen)
{
	var correcto=false;
	for(var i=0;i<num;i++)
	{

		if(imagen[i].getAttribute("id")==ordenCorrecto[i])
		{
			correcto=true;
		}
		else
		{
			return;
		}
		
		
	}
	
	if(correcto)
	{
		alert("Enhorabuena, has ganado, Sigue así, que te irá bienen la vida campeón");
	}
}