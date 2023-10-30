const formulario = document.getElementById('formulario');
//asi obtenemos todos los inputs
//queremos acceder al id formulario y luego a cada input que este en formulario, al ser un id formulario por eso va el simbolo numeral
const inputs = document.querySelectorAll('#formulario input');


const expresiones = {
	valor1: /^\d{5,14}$/, //de 5 a 14 numeros
  valor2: /^\d{1,14}$/ //de 5 a 14 numeros
}

const validarFormulario = (e) => {
	//al momento de levantar el dedo de la tecla se va a ejecutar la funcion validarFormulario, y lo que esta function
	//tiene por dentro es una condicional que verifica por el nombre de cada input, es decir identifica cual input se selecciona
	// y basado en eso efectua una accion
		if (e.target.name=='valor1') {
			//primero vamos a verificar que lo que el usuario ponga en el input coincida con la expresion regular
			//expresiones.valor1.test() me va a arrojar un valor booleano dependiendo si se cumple la expresion regular o no
      // e.target.value indica el valor que el usuario ingrese y expresiones.valor1.test va a evaluar si es correcta o no
				if(expresiones.valor1.test(e.target.value)){
					document.getElementById('grupo__valor1').classList.remove('formulario__grupo-incorrecto')
					document.getElementById('grupo__valor1').classList.add('formulario__grupo-correcto')
					document.querySelector('#grupo__valor1 i').classList.add('fa-check-circle')
					document.querySelector('#grupo__valor1 i').classList.remove('fa-times-circle')
					document.querySelector('#grupo__valor1 .formulario__input-error').classList.remove('formulario__input-error-activo')
				}else{
					document.getElementById('grupo__valor1').classList.add('formulario__grupo-incorrecto')
					document.getElementById('grupo__valor1').classList.remove('formulario__grupo-correcto')
					document.querySelector('#grupo__valor1 i').classList.add('fa-times-circle')
					document.querySelector('#grupo__valor1 i').classList.remove('fa-check-circle')
			  	document.querySelector('#grupo__valor1 .formulario__input-error').classList.add('formulario__input-error-activo')
				}
			}else{

				if (expresiones.valor2.test(e.target.value)) {
					document.getElementById('grupo__valor2').classList.remove('formulario__grupo-incorrecto')
					document.getElementById('grupo__valor2').classList.add('formulario__grupo-correcto')
					document.querySelector('#grupo__valor2 i').classList.add('fa-check-circle')
					document.querySelector('#grupo__valor2 i').classList.remove('fa-times-circle')
					document.querySelector('#grupo__valor2 .formulario__input-error').classList.remove('formulario__input-error-activo')
				}else {
					document.getElementById('grupo__valor2').classList.add('formulario__grupo-incorrecto')
					document.getElementById('grupo__valor2').classList.remove('formulario__grupo-correcto')
					document.querySelector('#grupo__valor2 i').classList.add('fa-times-circle')
					document.querySelector('#grupo__valor2 i').classList.remove('fa-check-circle')
			  	document.querySelector('#grupo__valor2 .formulario__input-error').classList.add('formulario__input-error-activo')
				}
			}
		}

//esta funcion se va a ejecutar por cada uno de los inputs del formulario
//cada vez que se presente el evento de soltar la tecla se va a ejecutar una funcion
//en este caso la funcion validar formulario
inputs.forEach((input) => {
	input.addEventListener('keyup' , validarFormulario);
	input.addEventListener('blur' , validarFormulario);
});

function Calcular() {
	var vr1 = document.getElementById('valor1').value;
	var vr2 = document.getElementById('valor2').value;
	var p1 = (parseFloat(vr1)+parseFloat(vr2))*0.60; document.getElementById('porcentaje1').innerHTML = "El valor recomendado para gastos basicos seria: " + p1;
	var p2 = (parseFloat(vr1)+parseFloat(vr2))*0.30; document.getElementById('porcentaje2').innerHTML = "El valor recomendado para gastos personales seria: " + p2;
	var p3 = (parseFloat(vr1)+parseFloat(vr2))*0.10; document.getElementById('porcentaje3').innerHTML = "el valor recomendado para ahorro seria: " + p3;
	}

	formulario.addEventListener('submit', (e) =>{
		//con prevent default Al hacer clic en un botón "Enviar", evitamos que envíe un formulario y cambie la URL
		e.preventDefault();

	});

	function Limpiar(){
	 document.getElementById('valor1').value = "";
   document.getElementById('valor2').value = "";
	 document.getElementById('porcentaje1').innerHTML="";
	 document.getElementById('porcentaje2').innerHTML="";
	 document.getElementById('porcentaje3').innerHTML="";
	 document.getElementById('grupo__valor1').classList.remove('formulario__grupo-correcto');
	 document.getElementById('grupo__valor2').classList.remove('formulario__grupo-correcto')

	}
