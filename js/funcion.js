//validar que ingrese solo numeros
function solonumeros(e){
	//var key = e.keyCode; Obtenga el valor Unicode de la tecla del teclado presionada:
	//var key = e.which El evento. Qué propiedad devuelve qué tecla del teclado o botón del mouse se presionó para el evento.
	key=e.keyCode || e.which;

	//Convierte un número Unicode en un character:
	teclado=String.fromCharCode(key);

	numeros="0123456789";

	//8 backspace - 37 flecha para la izquierda - 39 flecha para la derecha - 42=* - 47=/ - 43=+ - 45=-
	especiales = [8,37,39,42,43,45,47,13];

	tecla_especial=false;

	for(var i in especiales){
		if (key==13){
			calcular();
		}
		else if(key==especiales[i]){
			tecla_especial=true;
		}
	}

	/*
	El método indexOf () devuelve la posición de la primera aparición de un valor especificado en una cadena.
	Este método devuelve -1 si el valor para buscar nunca ocurre.
	Nota: El método indexOf () distingue entre mayúsculas y minúsculas.
	*/
	if(numeros.indexOf(teclado)==-1 && !tecla_especial){
		return false;
	}

}

//Asignar lo valores de los botones con sus respectivos numeros 0123456789
function retornar(num){
	var anterior=document.fo.valores.value;
	document.getElementById("valores").value=anterior+num;
}

//Eliminar el ultimo caracter aplicamos la funcion a la tecla con el simbolo <- backspace
function eliminar(){

	var anterior=document.fo.valores.value;
	/*
		El método substring () extrae los caracteres de una cadena, entre dos índices especificados, y 
		devuelve la nueva cadena secundaria.

		Este método extrae los caracteres en una cadena entre "inicio" y "final", sin incluir el "final".

		Si "inicio" es mayor que "fin", este método intercambiará los dos argumentos, es decir str.substring 
		(1, 4) == str.substring (4, 1).

		Si "inicio" o "fin" es menor que 0, se trata como si fuera 0.

		Nota: El método substring () no cambia la cadena original.
	*/
	var nuevovalor=anterior.substring(0,anterior.length-1);

	document.getElementById("valores").value=nuevovalor;
}

/*
Eliminar todos los valores en la caja de resultados input type="text" name="valores" 
le damos la funcion a la tecla con el valor "C"	
*/
function eliminar_todo(){
	document.fo.valores.value="";
}


//Validar los signos de aritmética, esta funciona no va a permitir que se escriba dos veces un signo
function comprobar(num){
	var anterior = document.fo.valores.value;
	if(anterior==""){ //Si el campo esta vacio mantenlo vacio
		document.fo.valores.value="";
	}else{
		var anterior = document.fo.valores.value;//Lee lo que este en el campo valores
		document.getElementById("valores").value=anterior+num;//Setea lo que este en el campo valores mas el numero que recibio
		esto=document.fo.valores.value;//captura lo que esta en el campo valores

		record=0;
		igual=1;
		var letraRecord;
		var b=0;
		var letra="";

		for (a=1;a<esto.length;a++){
		//recoremos toda la cadena y si encuentra un simnolo de suma resta multiplicacion o divison  
			if(esto.charAt(a)=="+" || esto.charAt(a)=="-" || esto.charAt(a)=="*" || esto.charAt(a)=="/"){
		//incrementamos igual + 1 
				igual=igual+1;
		//almacenamos en la variable letra lo que se contenga
				letra=esto.charAt(a);
			}else{
				if(igual>record){record=igual;letraRecord=letra}
					igual=1;			
			}
			b=a;
		}

		if(igual>record){
			record=igual;
			letraRecord=letra;
		}

		if(record>2){
			var anterior = esto;
			var nuevovalor = anterior.substring(0,anterior.length-1);
			document.getElementById("valores").value=nuevovalor;
			record=0;b=0;igual=1;letra="";letraRecord="";
		}	
	}
}


//Realizar las operaciones matematicas

function calcular(){
	/*
		La función eval () evalúa o ejecuta un argumento. eval("2 + 2")
		Si el argumento es una expresión, eval () evalúa la expresión. 
		Si el argumento es uno o más enunciados de JavaScript, eval () ejecuta los enunciados.
	*/
	var resultado = eval(document.fo.valores.value);

	document.fo.valores.value=resultado;
}