import CardFormulario from "./CardFormulario"

function formulario (){

	const datoAlumno = [
		{
		inputName:"Nombres",
		Type:"text"
		},
		{
		inputName:"Apellidos",
		Type:"text"
		},
		{
		inputName:"Correo",
		Type:"email"
		},
		{
		inputName:"Numero Celular",
		Type:"text"
		},
		{
		inputName:"Edad",
		Type:"number"
		},
		{
		inputName:"Nueva contraseña",
		Type:"text"
		},
		{
		inputName:"Estudiante",
		Type:"radio"
		},
		{
		inputName:"Maestro",
		Type:"radio"
		},
		{
		Type:"submit"
		},
	];
	

	return(
		<div className="Formulario">
			<div className="Register"><h1 >Register</h1></div>
		{datoAlumno.map((input)=>{
			return<CardFormulario atributos={input.inputName} type={input.Type}/>;
		})} 
		</div>
	)
}

export default formulario;


