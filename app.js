/* referenciar primero a los elementos del dom */

/* vincular a partir de variables, el elemento html a js a partir del id */

/* vincular inputs */
const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

/* vincular parrafos */

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

/* tres variables para guardar el valor incial del input, el valor de su propiedad value (usamos notacion de punto para ello) */
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;


/* actualizar texto de los parrafos (por ahora es solo una etiqueta vacia) 
agregamos el texto con innerTex y luego lo vinculamos a las variables que creamos antes  */

textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;


/* hasta aquí solo podemos ver en los parrafos los valores iniciales.
con la siguiente funcion vamos a actualizar esos valores segun cambien los valores en el input */

function actualizarColor(rojo, verde, azul) {
	/* aquí uso plantillas literales (backtik) para actualizar un valor con las variables que ya creamos */
	const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;

	/* actualizar luego el color de fondo del body */
	/* esto describe el cambio que queremos */
	document.body.style.backgroundColor = colorRGB;
}

/* definimos ahora el evento que genera el cambio utilizando la funcion creada */
/* para actualizar el input rojo */
/* change es un tipo de evento como 'click' */
/* el sendo parametro es una funcion flecha */
inputRojo.addEventListener('change', (e) => {
	rojo = e.target.value;
	textoRojo.innerText = rojo; /* muestra el numero en pantalla value actualizado */
	actualizarColor(rojo, verde, azul);
	/* cuando llamo a la funcionentrego un nuevo valor para rojo y los otros dos (verde y azul) sin modificar todavía */
});

inputVerde.addEventListener('change', (e) => {
	verde = e.target.value;
	textoVerde.innerText = verde; /* muestra el numero en pantalla value actualizado */
	actualizarColor(rojo, verde, azul);
	/* cuando llamo a la funcionentrego un nuevo valor para rojo y los otros dos (verde y azul) sin modificar todavía */
});

inputAzul.addEventListener('change', (e) => {
	azul = e.target.value;
	textoAzul.innerText = azul; /* muestra el numero en pantalla value actualizado */
	actualizarColor(rojo, verde, azul);
	/* cuando llamo a la funcionentrego un nuevo valor para rojo y los otros dos (verde y azul) sin modificar todavía */
});