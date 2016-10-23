
// Aleatorizo el orden de las casillas png
var imagenes = ["2", "3", "4", "5", "6", "7", "8", "9"];
imagenes = imagenes.sort(function() {
	return Math.random() - 0.5;
});
imagenes = [imagenes.slice(0, 3), imagenes.slice(3, 6),imagenes.slice(6, 8)];

window.onload=ejecuta;
	function ejecuta() {
		for (var i=0; i<3; i++) {
			var fila = document.getElementById("tbody").children[i];
			for (var j=0; j<3; j++) {
				if (!(i==2 && j==2)) {
					var celda = fila.children[j];
					celda.innerHTML = "<img onclick='mover(this)' class='fichas' src='img/"+imagenes[i][j]+".png' alt='"+imagenes[i][j]+"'>";
				}
			}
		}
}

function mover(ficha) {
	// Variables necesarias:
	var movida = false; // Para evitar volver a mover la ficha una vez movida en el resto de comprobaciones
	var col = ficha.parentNode.cellIndex; // Columna de la ficha presionada
	
	// Celda derecha?
	if (ficha.parentNode.nextElementSibling && !movida){
		// Celda derecha vacía?
		console.log(ficha.parentNode.nextElementSibling);
	}
	// Celda izquierda?
	if (ficha.parentNode.previousElementSibling && !movida){
		// Celda izquierda vacía?
		
	}
	// Fila abajo?
	if (ficha.parentNode.parentNode.nextElementSibling && !movida){
		// Celda de fila abajo y misma columna vacía?
		
	}
	// Fila arriba?
	if (ficha.parentNode.parentNode.previousElementSibling && !movida){
		// Celda de fila arriba y misma columna vacía?
		
	}
}