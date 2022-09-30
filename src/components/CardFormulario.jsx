import "../assets/styles/formulario.css"

export default function CardFormulario({atributos,type}){
	return(
		<div className="PFormulario">
			<div className="FInput">
				<div className="input">{atributos}<input type={type} name="Seleccion"/></div>
			</div>
		</div>
	)
}

