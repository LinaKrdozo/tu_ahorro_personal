//objeto que tiene varias probpiedades cada propiedad tiene una expresion regularesr
const formulario = document.getElementById('formulario');
//usamos un selector querySelectorAll() me va a crear un array con todos los inputs de formulario para poder acceder a cada unno
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
	apellido: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
//campos se inician en false
const campos = {
	nombre: false,
	apellido: false,
	password: false,
	correo: false,
	telefono: false
}


//cada input tiene un name, esto va a servior para validar correctamente
const validarFormulario = (e) => {
	//cada vez que el usuario suelte la tecla si pusieramos un console.log saldria en consola el valor que esta asignado en nombre en el html
//sale el valor de nombre de cada input de acuerdo al campo en el que este ubicado, si hago click sobre el campo nombre sale el valor de nombre del input
//si hago click en correo sale el nombre del input de la casilla correo
		switch (e.target.name) {
			//en caso que haga click sobre usuario
			case "nombre":
			//cuando este en la casilla de usuario cuando deje de teclear en consola saldria funciona
					//console.log("funciona");
				//tenemos que verificar que lo que el usuario va a digitar en el campo coincida con la expresion regular que tenemos arriba
				//el metodo test va a lanzar un boleano, si se cumple con en este caso las expresiones regulares, lo que este dentro del parentesis
				//va a lanzar un true, de lo contrario sera false ya que no se cumpliria
				//con target.value vamos a evaluar si el valor de cada input cumple con las condiciones para que se cumpla la expresion regular
				//la funcion validar campo nos pide tres valores, el primero es como tal la expresion resular que apunta al objeto Usuario
				//el segundo valor es como tal el valor que el usuario digite en el input, e.target es lo mismo que e.target.name
				//y el valor usuario hace referencia al campo que se va a diligenciar en este caso usuario
					validarCampo(expresiones.nombre, e.target, 'nombre');
				break;
			case "apellido":
			//cuando este en la casilla de usuario cuando deje de teclear en consola saldria funciona
					//console.log("funciona");
					validarCampo(expresiones.apellido, e.target, 'apellido');
				break;
			case "password":
				//cuando este en la casilla de usuario cuando deje de teclear en consola saldria funciona
					//console.log("funciona");
					validarCampo(expresiones.password, e.target, 'password');
					//puedo usar esta funcion tambien aqui con el fin de que se validen ambas contraseñas al tiempo
					validarPassword2();
				break;
			case "password2":
				//cuando este en la casilla de usuario cuando deje de teclear en consola saldria funciona
					//console.log("funciona");
					validarPassword2();
					break;
			case "correo":
					//cuando este en la casilla de usuario cuando deje de teclear en consola saldria funciona
					//console.log("funciona");
					validarCampo(expresiones.correo, e.target, 'correo');
					break;
			case "telefono":
					//cuando este en la casilla de usuario cuando deje de teclear en consola saldria funciona
					//console.log("funciona");
					validarCampo(expresiones.telefono, e.target, 'telefono');
					break;
			default:

		}

}
//para usar la funcion accediendo por cada input:
//le pasamos a la funcion tres valores, en este caso primero llamamos la expresion, despues el input ya que cada campo es diferente
//el input hace referencia al valor como tal que vamos a pasar en cada campo y el campo hace referencia puntualmente a los campos a diligenciar, ya sea usuario o nombre entre otros
const validarCampo =(expresion,input,campo)=>{
	//queremos acceder al valor de cada input por medio de input.value y comprobamos por medio de expresion.test si se cumple o no, es decir evaluamos si el valor diligenciado por el Usuario
	//es correcto segun los lineamientos de las expresiones regulares
	if (expresion.test(input.value)) {
		//por este medio entro al id de grupo__usuario, quiero acceder a su lista de clases y quiero eliminar la clase que esta en css e indica un color que indica que es incorrecto
		//en este caso se estan usando backtics o plantillas de cadenas en javaScript esto permite que por medio de ${} podemos acceder a variables o en este caso al valor campo que sea llamado cuando se invoque la funcion, ya sea el campo usuario, nombre entre otros
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto')
		//por este medio entro al id de grupo__usuario, quiero acceder a su lista de clases y quiero agregar la clase que esta en css e indica un color que indica que es correcto
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto')
		//por este medio entro al id de grupo__usuario, y a la clase i, quiero acceder a su lista de clases y quiero eliminar la clase que tiene el icono de incorrecto con una equis
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle')
		//por este medio entro al id de grupo__usuario, y a la clase i, quiero acceder a su lista de clases y quiero agregar la clase que tiene el icono de correcto con una chulo
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle')
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo')
		campos[campo]=true;
	}else{
		//en el else seria el contrario al codigo de arriba
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto')
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto')
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle')
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle')
		//seleccionamos el id grupo__usuario dentro de la clase formulario__input-error adicionamos a la lista de clases una clase de css llamada formulario__input-error-activo
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo')
		campos[campo]=false;
	}
}
//funcion para validar si ambas contraseñas coinciden o son iguales
const validarPassword2 = () =>{
	 const inputPassword1 = document.getElementById('password');
	 const inputPassword2 = document.getElementById('password2');

	 //en este caso si el valor que se pase a la primera contraseña es diferente al de la segunda contraseña entonces:
	 if (inputPassword1.value !== inputPassword2.value) {
		 //accedo a password2 por medio de su id, y le adiciono la clase de css que marque la casilla en rojo
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto')
    //accedo a password2 por medio de su id, y le quito la clase de css que marque la casilla en verde puesto que si  las contraseñas no coinciden quiere decir que estan mal
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto')
		 //accedo a password2 por medio de su id a la etiqueta i donde esta el icono de chulo o equis, y le adiciono la clase de css que ponga el icono de equis
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle')
 		//accedo a password2 por medio de su id a la etiqueta i donde esta el icono de chulo o equis, y le quito la clase de css que ponga el icono de chulo
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle')
 		//seleccionamos el id grupo__usuario dentro de la clase formulario__input-error adicionamos a la lista de clases una clase de css llamada formulario__input-error-activo para que ponga un letrero en pantalla
 		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo')
		campos['password']=false;
	}else{
		//en caso de que las contraseñas sean iguales entonces
		//accedo a password2 por medio de su id, y le quito la clase de css que marque la casilla en rojo puesto que las contraseñas en este caso si coincidirian
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto')
		//accedo a password2 por medio de su id, y le pongo la clase de css que marque la casilla en verde puesto que las contraseñas en este caso si coincidirian
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto')
		//accedo a password2 por medio de su id a la etiqueta i donde esta el icono de chulo o equis, y le quito la clase de css que ponga el icono de equis
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle')
		//accedo a password2 por medio de su id a la etiqueta i donde esta el icono de chulo o equis, y le adiciono la clase de css que ponga el icono de chulo
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle')
		//seleccionamos el id grupo__usuario dentro de la clase formulario__input-error adicionamos a la lista de clases una clase de css llamada formulario__input-error-activo para que no muestre un letrero en pantalla
		//puesto que estarian correctas las contraseñas
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo')
		campos['password']=true;
	}
}

//por cada input cada vez que deje de teclear va a realizar la comprobacion de si esta bien diligenciado o no
inputs.forEach((input) => {
		/*console.log(input)*/
		input.addEventListener('keyup', validarFormulario);
		//el evento blur es cuando se le da un click fuera del input ejecute tambien esa comprobacion o validacion del formulario
		input.addEventListener('blur', validarFormulario);

});

/*for (var indice = 0; indice < inputs.length; indice++) {
	var input = inputs[indice]
	console.log(input)
	input.addEventListener('keyup', validarFormulario);
	//el evento blur es cuando se le da un click fuera del input ejecute tambien esa comprobacion o validacion del formulario
	input.addEventListener('blur', validarFormulario);
}*/

/*var indice = 0
do {
	var input = inputs[indice]
	indice++
	console.log(input)
	input.addEventListener('keyup', validarFormulario);
	//el evento blur es cuando se le da un click fuera del input ejecute tambien esa comprobacion o validacion del formulario
	input.addEventListener('blur', validarFormulario);

} while (indice < inputs.length);*/



//el boton es de tipo submit, es decir que cuando le de click va a enviar el formulario
formulario.addEventListener('submit',(e)=>{
	//prevent Default cancela el evento
	e.preventDefault();
//constante para terminos y condiciones
	const terminos = document.getElementById('terminos');
	//si los valores que estan en campos son verdaderos entonces el formulario se va a reiniciar
		if(campos.nombre && campos.apellido && campos.password && campos.correo && campos.telefono && terminos.checked ){
			formulario.reset();
			//si los valores son verdadero tambien se esta llamando una clase formulario donde esta un mensaje de formulario completado
			//asi mismo se adiciona una clase de css para darle estilo a ese mensaje
		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		//el metodo setTimeout en este caso eliminaria el mensaje de formulario diligenciado despues de 5 segundos en este caso 5000 son milisegundos que equivale a 5 segundos
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		//para quitar todos los iconos una vez se reinicie el formulario
		//se llama la clase de css que es donde esta el estilo del icono
		//por cada icono queremos acceder a su lista de clases y queremos eliminar la clase de formulario correcto para que deje de salir el icono de correcto o chulo
		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	}else{
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo')
		setTimeout(() => {
			document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
		}, 3000);
	}
});
